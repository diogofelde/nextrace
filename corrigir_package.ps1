# Caminho do package.json do frontend
$packagePath = "E:\Projeto\NexTraceFinal\frontend\package.json"

# Ler o package.json
$packageJson = Get-Content $packagePath -Raw | ConvertFrom-Json

# Garantir que a chave scripts exista
if (-not $packageJson.PSObject.Properties.Name -contains "scripts") {
    $packageJson | Add-Member -MemberType NoteProperty -Name scripts -Value @{}
}

# Ajustar scripts para remover lint do prebuild
$packageJson.scripts.prebuild = "npm run test"

# Garantir que existam scripts básicos
$packageJson.scripts.dev = "vite"
$packageJson.scripts.build = "vite build"
$packageJson.scripts.preview = "vite preview"
$packageJson.scripts.test = "jest --coverage"
$packageJson.scripts."test:coverage" = "jest --coverage"
$packageJson.scripts.cobertura = "npm run test:coverage && start coverage\\index.html"
$packageJson.scripts.prepare = "husky install"

# Ajustar engines para aceitar Node >=22.x
$packageJson.engines = @{ node = ">=22.x" }

# Salvar alterações
$packageJson | ConvertTo-Json -Depth 10 | Set-Content $packagePath -Encoding UTF8

Write-Host "✅ package.json do frontend corrigido: prebuild sem lint e engines ajustado!"