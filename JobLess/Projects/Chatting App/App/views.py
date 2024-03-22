from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,template_name="Home.html")

def room(request,room_name):
    return render(request,"Room.html",{"roomname":room_name})

