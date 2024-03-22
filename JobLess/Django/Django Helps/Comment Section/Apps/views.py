from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from . models import *
# templatestag
from .templatetags import extras

# Create your views here.
def home(request):
    allPosts = Post.objects.all()
    return render(request, "Home.html",locals())

def post(request,pid):
    post = Post.objects.filter(post_id=pid).first()
    comments = CommentModel.objects.filter(get_post=post,reply_on_comment=None) # comments related to corresponding post used to show actual reply

    # reply
    replies = CommentModel.objects.filter(get_post=post).exclude(reply_on_comment=None) # getting only reply
    replyDict = {}
    for reply in replies:
        if reply.reply_on_comment.comment_id not in replyDict.keys():
            replyDict[reply.reply_on_comment.comment_id] = [reply]
        else:
            replyDict[reply.reply_on_comment.comment_id].append(reply)   
    print(replyDict)

    return render(request, "Post.html",locals())

def comment(request):
    # if request.method == "POST":
    #     user = request.user
    #     postID = request.POST.get('postID')
    #     post = Post.objects.get(post_id=postID)
    #     commentMSG = request.POST.get('commentMSG')

    #     comment = CommentModel(user=user,comment_message=commentMSG,get_post=post)
    #     comment.save()

    # reply
    if request.method == "POST":
        user = request.user
        postID = request.POST.get('postID')
        post = Post.objects.get(post_id=postID)
        commentMSG = request.POST.get('commentMSG')

        parentID = request.POST.get('parentSno')

        if parentID == "":
            comment = CommentModel(user=user,comment_message=commentMSG,get_post=post)
            comment.save()
        else:
            reply = CommentModel.objects.get(comment_id=parentID)
            comment = CommentModel(user=user,comment_message=commentMSG,get_post=post,reply_on_comment=reply)
            comment.save()
        return redirect(f"/post/{post.post_id}")