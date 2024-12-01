from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .products import products
from .models import Products
from .serializer import ProductsSerializers


@api_view(["GET"])
def home(request):
    return Response("Heck yeah")

@api_view(["GET"])
def getProducts(request):
    products = Products.objects.all()
    serializer = ProductsSerializers(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    product = Products.objects.get(_id=pk)
    serialzer = ProductsSerializers(product,many=False)
    return Response(serialzer.data)
