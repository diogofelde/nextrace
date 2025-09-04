from django.shortcuts import render

def dashboard(request):
 user_name = request.user.first_name
 return render(request, 'dashboard.html', {'user_name': user_name})