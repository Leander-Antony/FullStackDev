from django.shortcuts import render
from .models import Post

# Create your views here.
def index(request):
    posts = Post.objects.all()
    return render(request, 'index.html',{'posts':posts})

def post(reqquest, pk):
    post = Post.objects.get(id=pk)
    return render(reqquest,'posts.html', {'posts':post})