from django.db import models

# Create your models here.
class Details(models.Model):
    id = models.AutoField(primary_key=True);
    email = models.EmailField();
    message = models.TextField();
    def __str__(self):
        return self.email
    

class Data1(models.Model):
    name = models.CharField(max_length=255);
    desc = models.TextField();

class Data2(models.Model):
    name = models.CharField(max_length=255);
    desc = models.TextField();