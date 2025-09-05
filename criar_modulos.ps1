# Ir para a raiz do projeto
Set-Location "E:\Projeto\NexTraceFinal"

# Caminho base dos módulos
$basePath = "frontend\src\modules"

# Lista de módulos
$modules = @("red-team", "blue-team", "forensics", "osint", "monitoring")

# Criar estrutura de pastas para cada módulo
foreach ($m in $modules) {
    $modulePath = Join-Path $basePath $m
    New-Item -ItemType Directory -Path (Join-Path $modulePath "components") -Force | Out-Null
    New-Item -ItemType Directory -Path (Join-Path $modulePath "pages") -Force | Out-Null
    New-Item -ItemType Directory -Path (Join-Path $modulePath "services") -Force | Out-Null
    Write-Host "✅ Criado módulo: $m"
}

Write-Host "🏁 Estrutura de módulos criada com sucesso!"
