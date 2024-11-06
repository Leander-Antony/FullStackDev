from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('signup', views.register, name='register'),
    path('', views.login_view, name='login'),
]