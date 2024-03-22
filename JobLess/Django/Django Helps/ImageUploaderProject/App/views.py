from django.shortcuts import render
from .forms import ImageForm
from .models import *
# Create your views here.
def home(request):
    if request.method == "POST":
        form = ImageForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
    form = ImageForm()

    allImage = Image.objects.all()
    return render(request, "home.html",{'form':form,'img':allImage})