from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="home-index"),
    path('display',views.display,name="display-index"),
]
