from django.shortcuts import render,redirect,HttpResponse
# FSS
from django.core.files.storage import FileSystemStorage
from .models import *


# Create your views here.
def home(request):
    allPosts = profile.objects.all()
    return render(request, 'Home.html',locals())

def normalupload(request):
    if request.method == "POST" and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name,myfile)
        url = fs.url(filename)
        new_profile = profile(name=request.POST['name'],age=request.POST['age'],image=url)
        new_profile.save()
        redirect('home/')
    else:
        pass
    return redirect('/home/')