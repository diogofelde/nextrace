# app/views.py

from django.http import JsonResponse
from decouple import config

def rota_protegida(request):
    chave_recebida = request.headers.get('X-CHAVE-ACESSO')
    chave_mestra = config('CHAVE_MESTRA')

    if chave_recebida == chave_mestra:
        return JsonResponse({'mensagem': 'Acesso autorizado com chave mestra!'})
    return JsonResponse({'erro': 'Acesso negado'}, status=403)