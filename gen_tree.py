import json

tree = [
    {
        "title": "Dashboard",
        "subtitles": ["Visão Geral", "Indicadores"],
        "description": "Mostra KPIs em tempo real e gráficos principais"
    },
    {
        "title": "Configurações",
        "subtitles": ["Perfis", "Permissões", "Logs"],
        "description": "Gerencia acessos e auditoria do sistema"
    }
]

print(json.dumps(tree, ensure_ascii=False, indent=2))