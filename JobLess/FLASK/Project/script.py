from flask import Flask,render_template,request,redirect,session
from datetime import datetime
# connect to news API
from newsapi import NewsApiClient
import requests
# file store
import os
from werkzeug.utils import secure_filename

# connect to database
from flask_sqlalchemy import SQLAlchemy
import json

# working with json file
local_server = True
with open('config.json', 'r') as c:
    params = json.load(c)["parameters"]


app = Flask(__name__)
# secret key
app.secret_key = 'super-secret-key'
# upload
app.config['UPLOAD_FOLDER'] = params['upload_location']


# Working with server
if local_server:
    app.config['SQLALCHEMY_DATABASE_URI'] = params['local_url']  # if error occurs no module found use this pip install mysqlclient
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = params['live_url']  # if we are working on live server




# working with database
db = SQLAlchemy(app)
class Contact(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.String(12), nullable=False)
    msg = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(12),nullable=True)

# Post table
class Post(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    author = db.Column(db.String(80), nullable=False)
    content = db.Column(db.String(120), nullable=False)
    slug = db.Column(db.String(20), nullable=False)
    image = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(12),nullable=True)


@app.route('/')
def index():
    '''
    # News
    newsapi = NewsApiClient(api_key='2c3171958b52495588f9fefb8f547135')
    topheadlines = newsapi.get_top_headlines(sources='the-times-of-india')
    # fetch all the article
    t_articles = topheadlines['articles']
    # content of the article
    news = []
    desc = []
    img = []
    p_date = []
    url = []

    for i in range(len(t_articles)):
        main_article = t_articles[i]
        news.append(main_article['title'])
        desc.append(main_article['description'])
        img.append(main_article['urlToImage'])
        p_date.append(main_article['publishedAt'])
        url.append(main_article['url'])
    print("===>",news,desc,img,url,p_date,"\n")
    '''

    return render_template('index.html',context=params)

@app.route('/about')
def about():
    return render_template('about.html',context=params)

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
    return render_template('contact.html',context=params)


@app.route('/blog')
def blog():
    posts = Post.query.all()
    return render_template('blog.html',context=params,allPosts=posts)


@app.route('/post/<string:post_slug>',methods=['GET'])
def post(post_slug):
    post = Post.query.filter_by(slug=post_slug).first()
    return render_template('post.html',context=params,allPosts=post)


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login_post():
    # if user already login
    if "user" in session and session['user']==params['admin_username']:
        return render_template("dashboard/dashboard.html",user=params['admin_username'])

    # If new login
    if (request.method == "POST"):
        username = request.form.get('username')
        password = request.form.get('password')
    
        if username == params["admin_username"] and password == params["admin_password"]:
            session['user']=username
            return render_template('dashboard/dashboard.html',user=params['admin_username'])
    else:
        return render_template('login.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect("/")



@app.route('/dashboard')
def dashboard():
    if "user" in session and session['user']==params['admin_username']:
        return render_template("dashboard/dashboard.html")
    else:
        return redirect('/login')



# Dashboard Tool
@app.route('/dashboard_post')
def dashboard_post():
    if "user" in session and session['user']==params['admin_username']:
        posts = Post.query.all()
        return render_template("dashboard/dashboard_post.html",posts=posts)
    else:
        return redirect('/login')


@app.route('/edit/<string:sno>',methods=['GET','POST'])
def dashboard_edit(sno):
    if "user" in session and session['user']==params['admin_username']:
        if request.method == "POST":
            e_author = request.form.get('author')
            e_title = request.form.get('title')
            e_content = request.form.get('content')
            e_slug = request.form.get('slug')
            e_image = request.form.get('thumbnail')
            e_date = datetime.now()
            if sno=='0':
                post = Post(author=e_author,title=e_title,content=e_content,slug=e_slug,image=e_image,date=e_date)
                db.session.add(post)
                db.session.commit()
            else:
                post = Post.query.filter_by(sno=sno).first()
                post.author = e_author
                post.title = e_title
                post.content = e_content
                post.slug = e_slug
                post.image = e_image
                post.date = e_date
                db.session.commit()
        get_post = Post.query.filter_by(sno=sno).first()
        return render_template("dashboard/dashboard_edit.html",get_post=get_post)
    else:
        return redirect('/login')



@app.route("/uploader" , methods=['GET', 'POST'])
def uploader():
    if "user" in session and session['user']==params['admin_username']:
        if request.method=='POST':
            f = request.files['file']
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(f.filename)))
            return "Uploaded successfully!"


@app.route("/delete/<string:sno>" , methods=['GET', 'POST'])
def delete(sno):
    if "user" in session and session['user']==params['admin_username']:
        post = Post.query.filter_by(sno=sno).first()
        db.session.delete(post)
        db.session.commit()
    return redirect("/dashboard")














app.run(debug=True)

