from django.contrib import admin

# Register your models here.
from .models import *


class ModelInTableFormat(admin.ModelAdmin):
    list_display = ("db_fname", 'db_lname', 'db_email')


admin.site.register(EmployeeDetails, ModelInTableFormat)
