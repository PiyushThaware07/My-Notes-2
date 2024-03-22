from django.shortcuts import render, redirect
# Import Model
from .models import *

# Create your views here.


def index(request):
    Employees = EmployeeDetails.objects.all()
    print(Employees)
    return render(request, "Index.html", locals())


def Add_new(request):
    if request.method == "POST":
        fname_form = request.POST.get("fname_form")
        lname_form = request.POST.get("lname_form")
        email_form = request.POST.get("email_form")
        print(fname_form, lname_form, email_form)
        records = EmployeeDetails(
            db_fname=fname_form,
            db_lname=lname_form,
            db_email=email_form
        )
        records.save()
        return redirect("IndexPage")


def Edit_Record(request):
    records_edit = EmployeeDetails.objects.all()

    if request.method == "POST":
        return redirect("IndexPage")
