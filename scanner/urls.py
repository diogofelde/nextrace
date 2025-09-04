from django.urls import path
from . import views

urlpatterns = [
 path('scanner/', views.diagnostico_rede, name='scanner'),
]