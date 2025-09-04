import multiprocessing

# Bind e workers
bind = "0.0.0.0:8000"
workers = (multiprocessing.cpu_count() * 2) + 1

# Tempo de resposta e desligamento
timeout = 30            # encerra workers com requisições travadas
graceful_timeout = 30   # aguarda término das requisições ao reiniciar
keepalive = 2           # mantém conexões TCP inativas por 2s

# Preload e threads
preload_app = True
threads = 2             # habilita threads por worker para I/O intensivo

# Tipo de worker (sync / gevent / eventlet)
worker_class = "sync"

# Logs
accesslog = "-"
errorlog = "-"
loglevel = "info"
access_log_format = (
    '%({X-Forwarded-For}i)s %(l)s %(u)s %(t)s "%(r)s" '
    '%(s)s %(b)s "%(f)s" "%(a)s" %(L)s'
)