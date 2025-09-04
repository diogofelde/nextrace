def responder_ia(pergunta):
    termo = pergunta.lower()

    respostas = {
        'firewall': 'Um firewall protege sua rede contra acessos não autorizados.',
        'phishing': 'Phishing é uma técnica de fraude usada para roubar dados pessoais, geralmente por meio de e-mails falsos ou sites fraudulentos.'
    }

    for chave, resposta in respostas.items():
        if chave in termo:
            return resposta

    return 'Ainda estou aprendendo sobre isso. Reformule ou tente outro termo.'