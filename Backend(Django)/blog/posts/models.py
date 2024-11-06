from django.db import models
from datetime import datetime

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    posts = models.CharField(max_length=10000000000)
    created_at = models.DateTimeField(default=datetime.now,blank=True)

    
