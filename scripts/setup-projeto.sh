#!/bin/bash

echo "🚀 Iniciando setup do projeto NexTrace..."

# Navega para a raiz do projeto
cd "$(dirname "$0")"

echo "📦 Instalando dependências essenciais..."
npm install react-chartjs-2 chart.js react-router-dom jsdom tailwindcss postcss autoprefixer

echo "🧼 Corrigindo arquivos com ESLint e Prettier..."
npx eslint src --fix
npx prettier --write .

echo "🧾 Atualizando .eslintignore para ignorar arquivos externos..."
cat <<EOL > .eslintignore
staticfiles/admin/js/vendor/**/*.js
grafana/plugins/**/*.js
**/*.min.js
EOL

echo "📁 Verificando e ajustando vite.config.js..."
cat <<EOL > vite.config.js
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
EOL

echo "🧪 Criando vitest.config.js com ambiente jsdom..."
cat <<EOL > vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
})
EOL

echo "📦 Atualizando package.json com type: module..."
jq '. + {type: "module"}' package.json > temp.json && mv temp.json package.json

echo "✅ Setup concluído com sucesso!"
