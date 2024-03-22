from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    publish_dt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="UploadImage/")

    def __str__(self):
        return self.title
    

class CommentModel(models.Model):
    comment_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    get_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_date_time = models.DateTimeField(auto_now_add=True)
    comment_message = models.TextField()
    reply_on_comment = models.ForeignKey("self", on_delete=models.CASCADE,null=True)



