from flask import Flask,render_template
app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    name = "Piyush"
    return render_template('about.html',name2=name)

@app.route('/bootstrap')
def bootstrapTemplate():
    return render_template('bootstrap.html')

@app.route('/jinja')
def video5():
    return render_template('jinja templating.html')


app.run(debug=True)