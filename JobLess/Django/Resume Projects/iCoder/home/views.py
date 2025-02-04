from django.shortcuts import render, HttpResponse, redirect
from home.models import Contact
from django.contrib import messages 
from django.contrib.auth import authenticate,login,logout  # login/logout
from django.contrib.auth.models import User                # for signup
from blog.models import Post

def home(request): 
    return render(request, "home/home.html")

def contact(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        phone=request.POST['phone']
        content =request.POST['content']
        if len(name)<2 or len(email)<3 or len(phone)<10 or len(content)<4:
            messages.error(request, "Please fill the form correctly")
        else:
            contact=Contact(name=name, email=email, phone=phone, content=content)
            contact.save()
            messages.success(request, "Your message has been successfully sent")
    return render(request, "home/contact.html")

def search(request):
    query=request.GET['query']
    if len(query)>78:
        allPosts=Post.objects.none()
    else:
        allPostsTitle= Post.objects.filter(title__icontains=query)
        allPostsAuthor= Post.objects.filter(author__icontains=query)
        allPostsContent =Post.objects.filter(content__icontains=query)
        allPosts=  allPostsTitle.union(allPostsContent, allPostsAuthor)
    if allPosts.count()==0:
        messages.warning(request, "No search results found. Please refine your query.")
    params={'allPosts': allPosts, 'query': query}
    return render(request, 'home/search.html', params)

def about(request): 
    return render(request, "home/about.html")


# APIs Authentications :
def handleSignUp(request):
    if request.method=="POST":
        # Get the post parameters
        username=request.POST['username']
        email=request.POST['email']
        fname=request.POST['fname']
        lname=request.POST['lname']
        pass1=request.POST['pass1']
        pass2=request.POST['pass2']

        # check for errorneous input
        # Username must be under 10 characters
        if len(username)>10:
            messages.error(request, "Username must be under 10 characters")
            return redirect('/')

        # Username should only contain letters and numbers
        if not username.isalnum():
            messages.error(request, "Username should only contain letters and numbers")
            return redirect('/')

        # Passwords do not match    
        if pass1!=pass2:
            messages.error(request, "Passwords do not match")
            return redirect('/')            

        # Create the user
        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name= fname
        myuser.last_name= lname
        myuser.save()
        messages.success(request, " Your iCoder has been successfully created")
        return redirect('/')
    else:
        return HttpResponse("404 - Not found")

def handleLogin(request):
    if request.method == "POST":
        # Get the post parameters
        loginusername = request.POST['loginusername']
        loginpassword = request.POST['loginpassword']
        user = authenticate(username=loginusername,password=loginpassword)

        if user is not None:
            login(request,user)
            messages.success(request, "Login Successfull,Welcome Back")
            return redirect('/')
        else:
            messages.error(request, "Invalid Credentials,Please Try Again!!!")
            return redirect('/')    

    return HttpResponse("HandleLogin")  

def handleLogout(request):
    logout(request)
    messages.success(request, "You Are Logout From Your Account")
    return redirect('home') 