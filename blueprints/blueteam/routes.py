@blue_bp.route('/logs')
def logs():
    logs = [
        {"data": "2025-09-02 23:45", "evento": "Login suspeito detectado"},
        {"data": "2025-09-02 22:10", "evento": "Tentativa de acesso não autorizado"},
        {"data": "2025-09-02 21:30", "evento": "Backup restaurado com sucesso"},
    ]
    return render_template('blueteam/logs.html', logs=logs)