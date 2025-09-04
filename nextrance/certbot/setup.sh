#!/bin/bash

# Instala Certbot
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Gera certificado SSL
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Renova automaticamente
sudo systemctl enable certbot.timer
