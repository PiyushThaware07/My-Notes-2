from django.db import models

# Create your models here.
class Posts(models.Model):
    db_id = models.AutoField(primary_key=True)
    db_heading = models.CharField(max_length=25,blank=False)
    db_content = models.TextField(blank=False)
    db_date = models.DateField(auto_now=True)
    db_thumbnail = models.URLField()