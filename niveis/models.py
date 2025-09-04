class Nivel(models.Model):
 nome = models.CharField(max_length=100)
 xp_minimo = models.IntegerField()

class PerfilUsuario(models.Model):
 usuario = models.OneToOneField(User, on_delete=models.CASCADE)
 xp_total = models.IntegerField(default=0)

 def nivel_atual(self):
 return Nivel.objects.filter(xp_minimo__lte=self.xp_total).order_by('-xp_minimo').first()