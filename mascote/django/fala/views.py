def dashboard(request):
 user_name = request.user.first_name if request.user.is_authenticated else "Explorador"
 dica = f"Ol, {user_name}! Pronto para desbloquear o prximo nvel?"
 return render(request, 'mascote/dashboard.html', {'user_name': user_name, 'dica': dica})