from django.db import models

# Create your models here.


class EmployeeDetails(models.Model):
    db_id = models.AutoField(primary_key=True)
    db_fname = models.CharField(max_length=50, blank=False)
    db_lname = models.CharField(max_length=50, blank=False)
    db_email = models.EmailField(max_length=200,unique=True, blank=False)

    def __str__(self):
        return self.db_fname
