from django.shortcuts import render,HttpResponse,redirect
# Signup
from django.contrib.auth.models import User
# Messages
from django.contrib import messages
# Signin
from django.contrib.auth import authenticate
from django.contrib.auth import login,logout


# Create your views here.
def home(request):
    return render(request, 'Authentication/home.html')


def signup(request):
    if request.method == "POST":
        username = request.POST.get('username')
        fname = request.POST.get('firstname')
        lname = request.POST.get('lastname')
        email = request.POST.get('email')
        password1 = request.POST.get('pass1')
        password2 = request.POST.get('pass2')

        myuser = User.objects.create_user(username=username,email=email,password=password1)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.save()
        messages.success(request, "Your Account has been successfully created")
        return redirect('signin')

    return render(request, 'Authentication/signup.html')


def signin(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('pass1')
        
       
        user = authenticate(username=username,password=password)

        if user is not None: # Valid User --- user exist right details
            login(request,user)
            fname = user.first_name
            messages.success(request, "Successfully signin to your account")
            return render(request,  'Authentication/home.html',{'fname':fname})
        else:
            messages.error(request, "Invalid details !!!")   
            return redirect('home') 

    return render(request, 'Authentication/signin.html')

def signout(request):
    logout(request)
    messages.success(request, "Logout Successfully")
    return redirect('home')
