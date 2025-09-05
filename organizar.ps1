# Ir para a raiz do projeto
Set-Location "E:\Projeto\NexTraceFinal"

# Criar estrutura base
$dirs = @(
    "frontend/src/modules",
    "frontend/src/shared",
    "frontend/public",
    "backend/src",
    "infra",
    "docs",
    "tests",
    "legacy"
)
foreach ($d in $dirs) { New-Item -ItemType Directory -Path $d -Force | Out-Null }

function Move-Safe {
    param($source, $dest)
    if (Test-Path $source) {
        if ($source -eq $dest -or $dest.StartsWith($source)) {
            Write-Host "⏩ Pulando $source (destino é subpasta da origem)"
        }
        elseif (Test-Path (Join-Path $dest (Split-Path $source -Leaf))) {
            Write-Host "⚠️  Pulando $source (já existe no destino)"
        }
        else {
            Move-Item $source $dest -Force
            Write-Host "✅ Movido: $source → $dest"
        }
    }
}

# FRONTEND
$frontendItems = @(
    "src", "shared", "public", "assets", "styles",
    "nextrance-dashboard", "vite-project", "web", "webapp"
)
foreach ($item in $frontendItems) { Move-Safe $item "frontend" }

# BACKEND
$backendItems = @(
    "backend", "api", "functions", "django", "firestore",
    "manage.py", "requirements.txt", "requirements-dev.txt",
    "main.py", "run.py", "server.js"
)
foreach ($item in $backendItems) { Move-Safe $item "backend" }

# INFRA
$infraItems = @(
    "nginx", "deploydocker", ".firebase", ".vercel",
    "docker-compose.prod.yml", "firebase.json", "render.yaml"
)
foreach ($item in $infraItems) { Move-Safe $item "infra" }

# DOCS
Move-Safe "README.md" "docs"

# TESTES
$testItems = @("tests", "tests_legacy", "coverage", ".pytest_cache")
foreach ($item in $testItems) { Move-Safe $item "tests" }

# LEGACY
$legacyItems = @(
    "nextrance", "Flash", "form", "forms", "mascote", "ranking",
    "relatorio_diagnostico", "respostaaluno", "static", "staticfiles",
    "window.onload"
)
foreach ($item in $legacyItems) { Move-Safe $item "legacy" }

Write-Host "🏁 Organização concluída!"