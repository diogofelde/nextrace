nivel_atual = perfil.nivel_atual()

nivel_proximo = Nivel.objects.filter(
    xp_minimo__gt=nivel_atual.xp_minimo
).order_by('xp_minimo').first()

if nivel_proximo:
    faixa_xp = nivel_proximo.xp_minimo - nivel_atual.xp_minimo
    progresso_xp = perfil.xp_total - nivel_atual.xp_minimo
    percentual = int((progresso_xp / faixa_xp) * 100)
else:
    percentual = 100  # Usuário já está no nível máximo