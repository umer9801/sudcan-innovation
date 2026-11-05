# PowerShell script to create all Next.js pages from TanStack routes

$ErrorActionPreference = "Continue"

# Function to convert a TanStack route to Next.js page
function Convert-Route {
    param($sourcePath, $destPath)
    
    Write-Host "Converting: $sourcePath -> $destPath"
    
    # Read source
    $content = Get-Content $sourcePath -Raw
    
    # Remove TanStack imports
    $content = $content -replace 'import.*from\s+[''"]@tanstack/react-router[''"];?\r?\n?', ''
    $content = $content -replace 'import.*from\s+[''"]@tanstack/react-start[^''"]*[''"];?\r?\n?', ''
    
    # Replace Link import
    $content = "import Link from 'next/link';`n" + $content
    
    # Remove Route definition completely
    $content = $content -replace 'export\s+const\s+Route\s+=\s+createFileRoute\([^)]+\)\(\{[\s\S]*?\}\);?\r?\n*', ''
    
    # Find main component function and add export default
    if ($content -match 'function\s+(\w+Page)\s*\(') {
        $funcName = $Matches[1]
        if ($content -notmatch "export default function $funcName") {
            $content = $content -replace "function $funcName\s*\(", "export default function $funcName("
        }
    }
    
    # Check if needs "use client"
    $needsClient = ($content -match 'useState|useEffect|useRef|useNavigate|motion\.|AnimatePresence')
    
    if ($needsClient -and $content -notmatch '"use client"') {
        $content = '"use client";' + "`n`n" + $content
    }
    
    # Clean up
    $content = $content -replace '\n{3,}', "`n`n"
    
    # Create directory
    $dir = Split-Path $destPath
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    # Write file
    Set-Content -Path $destPath -Value $content.Trim() -NoNewline
}

# Create About page
Convert-Route "src\routes\about.tsx" "app\about\page.tsx"

# Create Services pages
Convert-Route "src\routes\services\index.tsx" "app\services\page.tsx"
Convert-Route "src\routes\services\interior-painting.tsx" "app\services\interior-painting\page.tsx"
Convert-Route "src\routes\services\exterior-painting.tsx" "app\services\exterior-painting\page.tsx"
Convert-Route "src\routes\services\cabinet-refinishing.tsx" "app\services\cabinet-refinishing\page.tsx"
Convert-Route "src\routes\services\bathroom-renovation.tsx" "app\services\bathroom-renovation\page.tsx"
Convert-Route "src\routes\services\kitchen-remodeling.tsx" "app\services\kitchen-remodeling\page.tsx"
Convert-Route "src\routes\services\hardwood-flooring.tsx" "app\services\hardwood-flooring\page.tsx"
Convert-Route "src\routes\services\tile-installation.tsx" "app\services\tile-installation\page.tsx"
Convert-Route "src\routes\services\vinyl-flooring.tsx" "app\services\vinyl-flooring\page.tsx"
Convert-Route "src\routes\services\home-renovation.tsx" "app\services\home-renovation\page.tsx"

# Create Contact & Quote
Convert-Route "src\routes\contact.tsx" "app\contact\page.tsx"
Convert-Route "src\routes\quote.tsx" "app\quote\page.tsx"

# Create Portfolio
Convert-Route "src\routes\portfolio.tsx" "app\portfolio\page.tsx"

# Create Location pages
Convert-Route "src\routes\locations\kitchener.tsx" "app\locations\kitchener\page.tsx"
Convert-Route "src\routes\locations\waterloo.tsx" "app\locations\waterloo\page.tsx"
Convert-Route "src\routes\locations\cambridge.tsx" "app\locations\cambridge\page.tsx"
Convert-Route "src\routes\locations\guelph.tsx" "app\locations\guelph\page.tsx"

# Create Blog pages
Convert-Route "src\routes\blog\index.tsx" "app\blog\page.tsx"
Convert-Route "src\routes\blog\interior-painting-cost-kitchener-2026.tsx" "app\blog\interior-painting-cost-kitchener-2026\page.tsx"
Convert-Route "src\routes\blog\how-to-choose-paint-colors.tsx" "app\blog\how-to-choose-paint-colors\page.tsx"
Convert-Route "src\routes\blog\cabinet-refinishing-vs-replace.tsx" "app\blog\cabinet-refinishing-vs-replace\page.tsx"
Convert-Route "src\routes\blog\best-exterior-paint-canadian-weather.tsx" "app\blog\best-exterior-paint-canadian-weather\page.tsx"

Write-Host "`n✓ All pages created!"
