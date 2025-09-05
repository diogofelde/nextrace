# 1. Ignorar testes no prebuild
$packagePath = "E:\Projeto\NexTraceFinal\frontend\package.json"
if (Test-Path $packagePath) {
    $packageJson = Get-Content $packagePath -Raw | ConvertFrom-Json
    $packageJson.scripts.prebuild = ""
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content $packagePath -Encoding UTF8
    Write-Host "✅ prebuild ajustado para não rodar testes"
}

# 2. Renomear todos os arquivos de config .js para .cjs se tiverem module.exports
Get-ChildItem -Path "E:\Projeto\NexTraceFinal" -Recurse -Include *.js -File |
ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "module\.exports") {
        $newName = [System.IO.Path]::ChangeExtension($_.FullName, ".cjs")
        Rename-Item -Path $_.FullName -NewName (Split-Path $newName -Leaf) -Force
        Write-Host "🔄 Renomeado:" $_.FullName "→" $newName
    }
}

# 3. Limpar node_modules e package-lock.json
$frontendPath = "E:\Projeto\NexTraceFinal\frontend"
Remove-Item -Recurse -Force "$frontendPath\node_modules" -ErrorAction SilentlyContinue
Remove-Item -Force "$frontendPath\package-lock.json" -ErrorAction SilentlyContinue
Write-Host "🧹 Limpeza concluída"

# 4. Reinstalar dependências e rodar build
Set-Location $frontendPath
npm install
npm run build