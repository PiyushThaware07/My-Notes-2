from django.db import models

# Create your models here.
class Contactus(models.Model):
    Email = models.CharField(max_length=100)
    msg = models.TextField()

    def __str__(self):
        return self.Email
    