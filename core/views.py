# core_app/views.py

from django.http import HttpResponse

def home(request):
    """
    Página inicial do site.
    Exibe uma saudação simples para o usuário.
    """
    return HttpResponse("Olá, Diogo! Django está funcionando")

def teste(request):
    """
    Rota de teste para verificar se o servidor está ativo.
    """
    return HttpResponse("Servidor Django está funcionando!")