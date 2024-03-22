from django.shortcuts import render,HttpResponse

# Import Model
from . models import *

# Create your views here.
def home(request):
    if request.method == "POST":
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        contact = Contact(email=email,subject=subject)
        contact.save()
        return HttpResponse("Contact Save Successfully")
    return render(request, "home.html",locals())