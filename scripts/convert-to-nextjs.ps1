# PowerShell script to convert TanStack Router pages to Next.js pages
# This handles all remaining pages in bulk

$sourceDir = "src\routes"
$appDir = "app"

# Map of source files to destination directories
$pageMap = @{
    # Services pages
    "services\interior-painting.tsx" = "services\interior-painting"
    "services\exterior-painting.tsx" = "services\exterior-painting"
    "services\cabinet-refinishing.tsx" = "services\cabinet-refinishing"
    "services\hardwood-flooring.tsx" = "services\hardwood-flooring"
    "services\vinyl-flooring.tsx" = "services\vinyl-flooring"
    "services\tile-installation.tsx" = "services\tile-installation"
    "services\home-renovation.tsx" = "services\home-renovation"
    "services\kitchen-remodeling.tsx" = "services\kitchen-remodeling"
    "services\bathroom-renovation.tsx" = "services\bathroom-renovation"
    
    # Locations pages
    "locations\kitchener.tsx" = "locations\kitchener"
    "locations\waterloo.tsx" = "locations\waterloo"
    "locations\cambridge.tsx" = "locations\cambridge"
    "locations\guelph.tsx" = "locations\guelph"
    
    # Blog pages
    "blog\index.tsx" = "blog"
    "blog\interior-painting-cost-kitchener-2026.tsx" = "blog\interior-painting-cost-kitchener-2026"
    "blog\how-to-choose-paint-colors.tsx" = "blog\how-to-choose-paint-colors"
    "blog\cabinet-refinishing-vs-replace.tsx" = "blog\cabinet-refinishing-vs-replace"
    "blog\best-exterior-paint-canadian-weather.tsx" = "blog\best-exterior-paint-canadian-weather"
    
    # Admin pages
    "admin\index.tsx" = "admin"
    "admin\login.tsx" = "admin\login"
    "admin\contacts.tsx" = "admin\contacts"
    "admin\quotes.tsx" = "admin\quotes"
}

function Convert-PageToNextJS {
    param (
        [string]$sourcePath,
        [string]$destDir
    )
    
    Write-Host "Converting $sourcePath to $destDir/page.tsx..." -ForegroundColor Cyan
    
    # Create destination directory
    $fullDestDir = Join-Path $appDir $destDir
    New-Item -ItemType Directory -Path $fullDestDir -Force | Out-Null
    
    # Read source content
    $content = Get-Content -Path $sourcePath -Raw -Encoding UTF8
    
    # Conversion operations
    
    # 1. Remove TanStack Router imports
    $content = $content -replace 'import\s*{[^}]*createFileRoute[^}]*}\s*from\s*[''"]@tanstack/react-router[''"];?\s*', ''
    $content = $content -replace 'import\s*{[^}]*Link[^}]*}\s*from\s*[''"]@tanstack/react-router[''"];?\s*', ''
    
    # 2. Add Next.js Link import at top if Link is used in the file
    if ($content -match '<Link\s') {
        $content = "import Link from 'next/link';`n" + $content
    }
    
    # 3. Remove export const Route = createFileRoute...
    $content = $content -replace 'export\s+const\s+Route\s*=\s*createFileRoute\([^)]+\)\([^;]+\);?\s*', ''
    
    # 4. Replace Link to= with Link href=
    $content = $content -replace '<Link\s+to=', '<Link href='
    
    # 5. Find the main component function and add export default if missing
    if ($content -notmatch 'export\s+default\s+function') {
        # Find function name
        if ($content -match 'function\s+(\w+Page)\s*\(') {
            $funcName = $matches[1]
            # Add export default before the function
            $content = $content -replace "function\s+$funcName\s*\(", "export default function $funcName("
        }
    }
    
    # 6. Add "use client" at the very top if file uses client-side features
    $needsUseClient = $false
    if ($content -match '(useState|useEffect|useRef|useContext|useReducer|useCallback|useMemo|motion\.)') {
        $needsUseClient = $true
    }
    if ($content -match '(onClick|onChange|onSubmit|onMouseEnter|onMouseLeave)=') {
        $needsUseClient = $true
    }
    
    if ($needsUseClient -and $content -notmatch '"use client"') {
        $content = '"use client";' + "`n`n" + $content
    }
    
    # 7. Fix image imports - change .src when using imported images
    # This is a simple replacement; manual review may be needed
    $content = $content -replace 'src=\{(\w+)\}', 'src={$1.src}'
    $content = $content -replace 'url\(([^)]+)\)', 'url(${$1.src})'
    
    # 8. Write to destination
    $destFile = Join-Path $fullDestDir "page.tsx"
    $content | Out-File -FilePath $destFile -Encoding UTF8 -NoNewline
    
    Write-Host "  ✓ Created $destFile" -ForegroundColor Green
}

# Convert all pages
foreach ($entry in $pageMap.GetEnumerator()) {
    $srcFile = Join-Path $sourceDir $entry.Key
    if (Test-Path $srcFile) {
        Convert-PageToNextJS -sourcePath $srcFile -destDir $entry.Value
    } else {
        Write-Host "  ✗ Source file not found: $srcFile" -ForegroundColor Yellow
    }
}

Write-Host "`n✅ Conversion complete! Please review the generated files." -ForegroundColor Green
Write-Host "Note: You may need to manually fix:" -ForegroundColor Yellow
Write-Host "  - Complex metadata (head function)" -ForegroundColor Yellow
Write-Host "  - Image src attributes" -ForegroundColor Yellow
Write-Host "  - Dynamic route parameters" -ForegroundColor Yellow
