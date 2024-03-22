from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.String(12), nullable=False)
    msg = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(12),nullable=True)




class Post(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    author = db.Column(db.String(80), nullable=False)
    content = db.Column(db.String(120), nullable=False)
    slug = db.Column(db.String(20), nullable=False)
    image = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(12),nullable=True)



class Letter(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)