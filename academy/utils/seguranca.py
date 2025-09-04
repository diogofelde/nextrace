import os
from django.http import HttpResponseForbidden

def verificar_chave(request):
 chave_enviada = request.headers.get('X-CHAVE-ACESSO')
 chave_correta = os.getenv('CHAVE_MESTRA')

 if chave_enviada != chave_correta:
 return HttpResponseForbidden("Acesso negado.")