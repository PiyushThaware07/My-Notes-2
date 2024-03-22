from django.db import models

# Create your models here.
class profile(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    image = models.URLField()

    def __str__(self):
        return self.name
    