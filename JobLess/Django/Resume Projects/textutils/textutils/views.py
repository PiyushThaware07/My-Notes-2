# I have created the file - Piyush
# code for video 6 and before
# from django.http import HttpResponse

# def index(request):
#     return HttpResponse('Hello')

# def about(request):
#     return HttpResponse('<h1>About Page</h1>') 
#====================================================================================
# code for video 7
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

# Functions :
def analyze(request):
    # Used to check the value of checkbox
    '''
     djtext = request.GET.get('text','default')
    removepunc = request.GET.get('removepunc','off')
    fullcaps = request.GET.get('fullcap','off')
    newlineremove = request.GET.get('newlineremover','off')
    spaceremove = request.GET.get('spaceremover','off')
    '''

    djtext = request.POST.get('text','default')
    removepunc = request.POST.get('removepunc','off')
    fullcaps = request.POST.get('fullcap','off')
    newlineremove = request.POST.get('newlineremover','off')
    spaceremove = request.POST.get('spaceremover','off')
    

# 1) Remove Punctuations :
    if removepunc=='on':
        analyzed = ""
        Punctuations = '''{[]-_+()*&^%$#@!~<>,.?:;"'/|\=}'''
        for char in djtext:
            if char not in Punctuations:
                analyzed = analyzed+char
        my_dict = {'purpose':'Remove Punctuations','analyzed_text':analyzed}
        djtext = analyzed
        # return render(request, 'analyze.html',my_dict)    

# 2) Uppercase :
    if fullcaps=='on':
        analyzed = ""
        for char in djtext:
            analyzed = analyzed+char.upper()
        my_dict = {'purpose':'Uppercase','analyzed_text':analyzed}
        djtext = analyzed
        # return render(request, 'analyze.html',my_dict)

# 3) New Line Remove :
    if newlineremove=='on':
        analyzed=""
        for char in djtext:
            if char!='\n'and char!='\r':
                analyzed=analyzed+char
        my_dict = {'purpose':'New line remover','analyzed_text':analyzed}
        djtext = analyzed
        # return render(request, 'analyze.html',my_dict)     

# 4) space remover :
    if spaceremove=='on':
        analyzed=""
        for index,char in enumerate(djtext):
            if not (djtext[index]==" " and djtext[index+1]==" "):
                analyzed = analyzed + char

        my_dict = {'purpose':'Space remover','analyzed_text':analyzed}
        # return render(request, 'analyze.html',my_dict) 

# 5) Every this is off then 
    if(removepunc!='on' and fullcaps!='on' and newlineremove!='on' and spaceremove!='on'):
        return HttpResponse("Error")    

    # Analyze Text
    return render(request, 'analyze.html',my_dict) 