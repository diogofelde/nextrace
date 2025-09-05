# Lista de arquivos de configuração que precisam ser CommonJS
$configFiles = @(
    "E:\Projeto\NexTraceFinal\jest.config.js",
    "E:\Projeto\NexTraceFinal\babel.config.js"
)

foreach ($file in $configFiles) {
    if (Test-Path $file) {
        $newName = [System.IO.Path]::ChangeExtension($file, ".cjs")
        Rename-Item -Path $file -NewName (Split-Path $newName -Leaf) -Force
        Write-Host "✅ Renomeado:" (Split-Path $file -Leaf) "→" (Split-Path $newName -Leaf)
    } else {
        Write-Host "⚠️ Arquivo não encontrado:" $file
    }
}

# Ir para a pasta do frontend
Set-Location "E:\Projeto\NexTraceFinal\frontend"

# Rodar instalação e build
npm install
npm run build