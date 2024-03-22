from flask import Flask,render_template,request,flash,send_from_directory,redirect,session,url_for
from datetime import datetime
import os
from werkzeug.utils import secure_filename

# Working With JSON =============================================================================================
import json
with open('config.json','r') as w:
    params = json.load(w)["parameters"]

# Working With API =============================================================================================
import requests
from newsapi import NewsApiClient


# Working With Pagination =============================================================================================
from flask_paginate import Pagination, get_page_parameter


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = params['upload_location']
app.secret_key = 'my_secret_key'


# Working with database ========================================================================================
from Models import db,Contact,Post,Letter
local_server = True
if local_server:
    app.config['SQLALCHEMY_DATABASE_URI'] = params['local_url']  # if error occurs no module found use this pip install mysqlclient
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = params['live_url'] 
db.init_app(app)

# MEDIA =========================================================================================================
@app.route('/media/<path:filename>')
def media(filename):
    return send_from_directory('media', filename)

# HOME ==========================================================================================================
@app.route('/')
def home():
    posts = Post.query.all()
    # Slider
    url = f'https://newsapi.org/v2/top-headlines?country={params["api_location"]}&apiKey={params["api_key"]}'
    response = requests.get(url)
    data = response.json()
    articles = data['articles']
    print(len(posts),len(articles))
    return render_template('home.html',param=params,posts=posts,articles=articles)

# CONTACT ========================================================================================================
@app.route('/contact', methods=["GET","POST"])
def contact():
    if request.method == "POST":
        # Add entry to the database
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        phone = request.form.get('phone')
        entry = Contact(name=name,email=email,msg=message,phone=phone,date= datetime.now())
        db.session.add(entry)
        db.session.commit()
        flash('Form Submitted Successfully!!!')
    return render_template('contact.html',param=params)

# LETTER ========================================================================================================
@app.route('/letter/<string:id>', methods=["GET","POST"])
def letter(id):
    if request.method == "POST":
        # Add entry to the database
        fname = request.form.get('fname')
        lname = request.form.get('lname')
        email = request.form.get('email')
        entry = Letter(first_name=fname,last_name=lname,email=email)
        db.session.add(entry)
        db.session.commit()
        flash('Form Submitted Successfully!!!')
        return redirect(f"/post/{id}")

# BLOG ===========================================================================================================
@app.route('/blog')
def blog():
    posts = Post.query.all()
    return render_template('blog.html',param=params,posts=posts)

@app.route('/post/<string:sno>')
def post(sno):
    posts = Post.query.filter_by(sno=sno).first()
    return render_template("post.html",param=params,posts=posts)

# AUTHENTICATION ===============================================================================================
@app.route('/login',methods=['GET','POST'])
def login():
    if "user" in session and session['user']==params['admin_username']:
        return render_template("Dashboard/dashboard.html",user=params['admin_username'])
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        if (username==params["admin_username"] and password==params["admin_password"]):
            session['user']=username
            return redirect("/dashboard")
    return render_template("login.html",param=params)

@app.route('/logout')
def logout():
    session.clear()
    return redirect("/")
    
# DASHBOARD ===============================================================================================
@app.route("/dashboard")
def dashboard():
    if "user" in session and session['user']==params['admin_username']:
        posts = Post.query.all()
        return render_template("Dashboard/dashboard.html",posts=posts)
    else:
        return redirect('/login')

@app.route("/upload",methods=['GET','POST'])
def upload():
    if "user" in session and session['user']==params['admin_username']:
        if request.method == "POST":
            author = request.form.get('author')
            title = request.form.get('title')
            content = request.form.get('content')
            slug = request.form.get('slug')
            date = datetime.now().strftime('%Y-%m-%d') + '.md'
            # Store Image
            image = request.files['image']
            image_url = datetime.now().strftime('%Y-%m-%d-%H-%M-%S') + '.png'
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], image_url))
            # Saving data to database
            up = Post(author=author,title=title,content=content,slug=slug,date=date,image=image_url)
            db.session.add(up)
            db.session.commit()
            post_id = up.sno
            return redirect(url_for('post', sno=post_id))
            # return render_template("post.html",param=params,posts=posts)
        return render_template("Dashboard/upload.html")
    else:
        return redirect('/login')


@app.route('/delete/<string:id>')
def delete(id):
    if "user" in session and session['user']==params['admin_username']:
        post = Post.query.filter_by(sno=id).first()
        db.session.delete(post)
        db.session.commit()
    return redirect("/dashboard")


@app.route('/edit/<string:id>',methods=['GET','POST'])
def edit(id):
    if "user" in session and session['user']==params['admin_username']:
        if request.method == "POST":
            author = request.form.get('author')
            title = request.form.get('title')
            content = request.form.get('content')
            slug = request.form.get('slug')
            date = datetime.now().strftime('%Y-%m-%d') + '.md'
            # Store Image
            image = request.files['image']
            image_url = datetime.now().strftime('%Y-%m-%d-%H-%M-%S') + '.png'
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], image_url))
            # Updating
            post = Post.query.filter_by(sno=id).first()
            post.author = author
            post.title = title
            post.content = content
            post.slug = slug
            post.image = image_url
            db.session.commit()
            return redirect(url_for('post', sno=id))
        posts = Post.query.all()
        return render_template("Dashboard/dashboard.html",posts=posts)
    else:
        return redirect('/login')


@app.route('/phone')
def phone():
    if "user" in session and session['user']==params['admin_username']:
        contacts = Contact.query.all()
        return render_template("Dashboard/phone.html",contacts=contacts)
    else:
        return redirect('/login')    

@app.route('/delete_phone/<string:id>')
def delete_phone(id):
    if "user" in session and session['user']==params['admin_username']:
        contacts = Contact.query.filter_by(id=id).first()
        db.session.delete(contacts)
        db.session.commit()
        return redirect("/phone")
    else:
        return redirect('/login')
    




# GETTING NEWS ==================================================================================================
def top_heading_news():
    url = f'https://newsapi.org/v2/top-headlines?country={params["api_location"]}&apiKey={params["api_key"]}'
    response = requests.get(url)
    news_data = response.json()
    # Accessing Articles
    top_headlines = news_data['articles']
    return top_headlines

def search_news(search):
    url = f'https://newsapi.org/v2/everything?q={search}&from=2023-03-03&sortBy=popularity&apiKey={params["api_key"]}'
    response = requests.get(url)
    news_data = response.json()
    # Accessing Articles
    search_data = news_data['articles']
    return search_data


@app.route('/search',methods=['GET','POST'])
def search():
    if request.method == "POST":
        query = request.form.get("search","usa")
        if query:
            articles = search_news(query)
        else:
            query = "india"
            articles = search_news(query)
        return render_template("news.html",param=params,articles=articles,search_result=query)

    
@app.route('/news')
def news():
    articles = top_heading_news()
    return render_template("news.html",param=params,articles=articles)

#==============================================================================================================
app.run(debug=True)