from ecombackend import views
from django.urls import path

urlpatterns = [
    path("",views.home,name='home'),
    path('products/', views.getProducts, name='getProducts'),
]