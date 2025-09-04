perfil = PerfilUsuario.objects.get(usuario=request.user)
nivel = perfil.nivel_atual()
dica = f"Voc est no {nivel.nome}! Continue acumulando XP para desbloquear novos desafios."