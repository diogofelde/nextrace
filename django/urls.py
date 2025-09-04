# app/urls.py

from django.urls import path
from .views import rota_protegida

urlpatterns = [
    path('rota_protegida/', rota_protegida),
]