import logging
from django.db import transaction
from django.db.models import F
from django.shortcuts import get_object_or_404
from .models import Progresso, PerfilUsuario
from .services import verificar_conquistas  # ou onde estiver a função

logger = logging.getLogger(__name__)

def concluir_atividade(usuario, atividade, xp_ganho=50):
    """
    Marca a atividade como concluída, atualiza pontuação e XP do usuário,
    e verifica conquistas. Retorna True se for a primeira conclusão, 
    False caso já estivesse concluída.
    """
    with transaction.atomic():
        progresso = get_object_or_404(
            Progresso.objects.select_for_update(), 
            usuario=usuario, 
            atividade=atividade
        )

        if progresso.concluido:
            logger.debug(
                "Atividade %s já concluída por %s",
                atividade.id, usuario.username
            )
            return False

        # Atualiza progresso
        progresso.concluido = True
        progresso.pontuacao = xp_ganho
        progresso.save(update_fields=['concluido', 'pontuacao'])

        # Atualiza XP total de forma atômica
        PerfilUsuario.objects.filter(usuario=usuario).update(
            xp_total=F('xp_total') + xp_ganho
        )

    # Verifica conquistas fora do bloco transacional
    novas = verificar_conquistas(usuario)
    if novas:
        nomes = [c.conquista.nome for c in novas]
        logger.info(
            "Novas conquistas para %s após concluir atividade %s: %s",
            usuario.username, atividade