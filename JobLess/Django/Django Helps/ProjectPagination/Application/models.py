from django.db import models

# Create your models here.
class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=50,default="admin")
    timeStamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title