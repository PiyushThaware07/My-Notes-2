from django.shortcuts import render, redirect
# MODEL
from .models import *
# UPLOAD BINARY DATA : FILE SYSTEM STORAGE
from django.core.files.storage import FileSystemStorage


# Create your views here.
def index(request):
    posts = Posts.objects.all()
    return render(request, "Index.html", locals())


def add(request):
    if request.method == "POST" and request.FILES['form_thumbnail']:
        form_heading = request.POST.get("form_heading")
        form_content = request.POST.get("form_content")
        # FILE SYSTEM STORAGE
        form_thumbnail = request.FILES['form_thumbnail']
        fs = FileSystemStorage()
        filename = fs.save(form_thumbnail.name, form_thumbnail)
        url = fs.url(filename)
        # STORE TO DATABASE
        save_to_db = Posts(db_heading=form_heading,
                           db_content=form_content, db_thumbnail=url)
        save_to_db.save()
        return redirect("Index")


def update(request, post_id):
    post_to_update = Posts.objects.get(db_id=post_id)
    if request.method == "POST" and request.FILES['update_form_thumbnail']:
        update_form_heading = request.POST.get("update_form_heading")
        update_form_content = request.POST.get("update_form_content")

        # Updating ---------------------------------------------
        post_to_update.db_heading = update_form_heading
        post_to_update.db_content = update_form_content

        # FILE SYSTEM STORAGE
        update_form_thumbnail = request.FILES['update_form_thumbnail']
        fs = FileSystemStorage()
        filename = fs.save(update_form_thumbnail.name, update_form_thumbnail)
        url = fs.url(filename)
        if update_form_thumbnail:
            post_to_update.db_thumbnail = url
        # SAVE TO DATABASE
        post_to_update.save()
        return redirect("Index")
    return render(request, 'Index.html', locals())


def delete(request, post_id):
    post_to_delete = Posts.objects.filter(db_id=post_id)
    post_to_delete.delete()
    return redirect("Index")
