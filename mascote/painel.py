{% load static %}
<!DOCTYPE html>
<html lang="pt-br">
<head>
 <meta charset="UTF-8">
 <title>Painel do Explorador</title>
 <link rel="stylesheet" href="{% static 'mascote/style.css' %}">
</head>
<body>
 <h1>Ol, {{ user_name }}!</h1>

 <div class="barra-xp">
 <div class="xp-preenchido" style="width: {{ percentual }}%;"></div>
 </div>
 <p>{{ xp_total }} XP  Nvel: {{ nivel.nome }}</p>

 <h2>Conquistas desbloqueadas</h2>
 <div class="conquistas">
 {% for conquista in conquistas %}
 <div class="medalha" onclick="mascoteReage('{{ conquista.nome }}')">
 <img src="{% static 'mascote/medalha'|add:forloop.counter|stringformat:'d'|add:'.png' %}" alt="{{ conquista.nome }}">
 <p>{{ conquista.nome }}</p>
 </div>
 {% endfor %}
 </div>

 <div id="mascote-container">
 <img src="{% static 'mascote/mascote-feliz.png' %}" id="mascote">
 </div>

 <script src="{% static 'mascote/script.js' %}"></script>
</body>
</html>