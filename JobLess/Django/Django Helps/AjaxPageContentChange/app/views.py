from django.shortcuts import render,HttpResponse
# Model
from .models import *

# Create your views here.
def index(request):
    return render(request,"index.html")

def create(request):
    if request.method == "POST":
        email = request.POST.get("email")
        message = request.POST.get("message")
        newDetails = Details(email=email,message=message)
        newDetails.save()
        success = f"Data uploaded successfully for {email}"
        return render(request,"index.html")


def about(request):
    data1 = Data1.objects.all()
    data2 = Data2.objects.all()
    return render(request,"about.html",locals())