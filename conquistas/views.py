# mascote/views.py

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from .models import PerfilUsuario, ConquistaUsuario, Nivel

@login_required
def painel(request):
    """
    Exibe o painel do usuário com XP, nível, progresso percentual e conquistas.
    """
    # Busca o perfil do usuário e garante 404 caso não exista
    perfil = get_object_or_404(PerfilUsuario, usuario=request.user)

    # Prepara o contexto para o template
    contexto = {
        'user_name': request.user.first_name or request.user.username,
        'xp_total': perfil.xp_total,
        'nivel': perfil.nivel_atual(),
        'percentual': perfil.progresso_percentual(),
        'conquistas': (
            ConquistaUsuario.objects
            .filter(usuario=request.user)
            .select_related('conquista')
        ),
    }

    return render(request, 'mascote/painel.html', contexto)