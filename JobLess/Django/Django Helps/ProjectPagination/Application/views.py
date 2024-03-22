from django.shortcuts import render
from . models import *
# Pagination
from django.core.paginator import Paginator

# Create your views here.
def home(request):
    allPosts = Blog.objects.all()                # Getting Items
    paginator = Paginator(allPosts, 2)           # Item Per Page
    page_number = request.GET.get('page')        # Getting Page No
    allPosts = paginator.get_page(page_number)   # Connection Page No with Page
    last = allPosts.paginator.num_pages          # total no of pages
    totalPageList = [n+1 for n in range(last)]   # 1,2,3
    return render(request, 'home.html',locals())