import logging
from django.db import transaction
from .models import PerfilUsuario, Conquista, ConquistaUsuario

logger = logging.getLogger(__name__)

def verificar_conquistas(usuario):
    """
    Verifica e atribui automaticamente todas as conquistas elegíveis
    ao usuário, de forma atômica e otimizada.
    Retorna a lista de novas ConquistaUsuario criadas.
    """
    perfil = PerfilUsuario.objects.select_for_update().get(usuario=usuario)
    xp_atual = perfil.xp_total

    # Busca conquistas elegíveis não atribuídas
    conquistas_elegiveis = (
        Conquista.objects
        .filter(xp_necessario__lte=xp_atual)
        .exclude(
            id__in=ConquistaUsuario.objects
            .filter(usuario=usuario)
            .values_list('conquista_id', flat=True)
        )
    )

    novas_conquistas = []
    try:
        with transaction.atomic():
            for conquista in conquistas_elegiveis:
                novas_conquistas.append(
                    ConquistaUsuario(usuario=usuario, conquista=conquista)
                )
            if novas_conquistas:
                ConquistaUsuario.objects.bulk_create(novas_conquistas)
                nomes = [c.conquista.nome for c in novas_conquistas]
                logger.info(
                    "Usuário %s ganhou novas conquistas: %s",
                    usuario.username,
                    ", ".join(nomes)
                )
    except Exception as e:
        logger.error(
            "Erro ao atribuir conquistas para %s: %s",
            usuario.username,
            str(e),
            exc_info=True
        )
        # Opcional: propagar, notificar ou silenciar conforme necessidade

    return novas_conquistas