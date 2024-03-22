from django.shortcuts import render, redirect
# IMPORT FORM
from Project.forms import *

# Create your views here.


def index(request):
    # Create Instance Of A form that you have created
    myForm = UsersForm()
    return render(request, "Index.html", locals())


def upload(request):
    if request.method == "POST":
        form_fname = request.POST.get("fname")
        form_lname = request.POST.get("lname")
        form_email = request.POST.get("email")
        form_phone = request.POST.get("phone")
        print(form_fname, form_lname, form_email, form_phone)
        return redirect("Index")
    return render(request, "Index.html", locals())
