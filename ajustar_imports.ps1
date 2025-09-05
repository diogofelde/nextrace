# Ir para a raiz do projeto
Set-Location "E:\Projeto\NexTraceFinal"

# Lista de substituições: caminho antigo → caminho novo
$replacements = @{
    "from\s+['""]\./monitoramento"        = "from './modules/monitoring/pages"
    "from\s+['""]\./pentest-monitoring"   = "from './modules/red-team/services"
    "from\s+['""]\./auditoria"            = "from './modules/blue-team/pages"
    "from\s+['""]\./scanner"              = "from './modules/osint/services"
    "from\s+['""]\./scout"                = "from './modules/osint/components"
}

# Extensões de arquivos a processar
$extensions = "*.js","*.jsx","*.ts","*.tsx"

# Procurar e substituir
foreach ($ext in $extensions) {
    Get-ChildItem -Path "frontend" -Recurse -Include $ext -File | ForEach-Object {
        try {
            $content = Get-Content $_.FullName -Raw -ErrorAction Stop
            if (![string]::IsNullOrWhiteSpace($content)) {
                $originalContent = $content
                foreach ($pattern in $replacements.Keys) {
                    $content = [regex]::Replace($content, $pattern, $replacements[$pattern])
                }
                if ($content -ne $originalContent) {
                    Set-Content -Path $_.FullName -Value $content -Encoding UTF8
                    Write-Host "✅ Imports atualizados em:" $_.FullName
                }
            } else {
                Write-Host "⏩ Pulando (vazio):" $_.FullName
            }
        }
        catch {
            Write-Host "⚠️ Pulando (erro de leitura):" $_.FullName
        }
    }
}

Write-Host "🏁 Ajuste de imports concluído!"