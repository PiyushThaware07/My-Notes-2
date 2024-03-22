from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Contact)
admin.site.register(Portfolio)

admin.site.register(WhyHire)
admin.site.register(Strength)
admin.site.register(FutureGoals)