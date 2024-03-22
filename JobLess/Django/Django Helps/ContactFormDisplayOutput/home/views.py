from django.shortcuts import render,redirect
from .models import Contactus

# Create your views here.
def home(request):
    # Contact us
    if request.method == "POST":
        email = request.POST.get('email')
        msg = request.POST.get('msg')
        contact = Contactus(Email=email,msg=msg)
        contact.save()
        
    return render(request, 'home/home.html')

def display(request):
    con = Contactus.objects.all()
    context = {'con':con}
    print(context)
    return render(request, 'home/display.html',context)

