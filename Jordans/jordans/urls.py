from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('men', views.men, name='men'),
    path('women', views.women, name='women'),
    path('kids', views.kids, name='kids'),
    path('signup', views.register, name='register'),
    path('', views.login_view, name='login'),
]