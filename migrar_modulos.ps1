# Ir para a raiz do projeto
Set-Location "E:\Projeto\NexTraceFinal"

# Função para mover com segurança
function Move-Safe {
    param($source, $dest)
    if (Test-Path $source) {
        $targetPath = Join-Path $dest (Split-Path $source -Leaf)
        if (Test-Path $targetPath) {
            Write-Host "⚠️ Pulando $source (já existe no destino)"
        } else {
            Move-Item $source $dest -Force
            Write-Host "✅ Movido: $source → $dest"
        }
    } else {
        Write-Host "⏩ Pulando $source (não encontrado)"
    }
}

# Caminho base dos módulos
$baseModules = "frontend\src\modules"

# Mapeamento: pasta atual → módulo de destino
$map = @{
    "monitoramento"       = "monitoring\pages"
    "pentest-monitoring"  = "red-team\services"
    "auditoria"           = "blue-team\pages"
    "scanner"             = "osint\services"
    "scout"               = "osint\components"
}

# Executar migração
foreach ($key in $map.Keys) {
    $destPath = Join-Path $baseModules $map[$key]
    Move-Safe $key $destPath
}

Write-Host "🏁 Migração para módulos concluída!"