# Simple cleanup - remove TanStack artifacts from all pages

$allPages = Get-ChildItem -Recurse -Path "app" -Filter "page.tsx"
$useClientDirective = [char]34 + "use client" + [char]34 + ";"

foreach ($page in $allPages) {
    $file = $page.FullName
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Remove TanStack Router imports
    $content = $content -replace 'import[^;]+createFileRoute[^;]+;', ''
    $content = $content -replace 'import\s*\{[^}]*Outlet[^}]*\}[^;]+;', ''
    
    # Replace TanStack Link
    if ($content -match '@tanstack/react-router') {
        $content = $content -replace 'import\s*\{[^}]*Link[^}]*\}[^;]+tanstack[^;]+;', ''
        $content = "import Link from 'next/link';`n" + $content
    }
    
    # Remove Route export (simple version)
    $content = $content -replace '(?s)export\s+const\s+Route[^;]+\);', ''
    
    # Change to= to href=
    $content = $content -replace '<Link\s+to=', '<Link href='
    
    # Add export default
    if ($content -match 'function\s+(\w+Page)' -and $content -notmatch 'export default') {
        $funcName = $matches[1]
        $content = $content -replace "function $funcName", "export default function $funcName"
    }
    
    # Add use client if has useState/onClick etc
    if (($content -match 'useState|onClick|toast|useRouter') -and ($content -notmatch 'use client')) {
        $content = $useClientDirective + "`n`n" + $content
    }
    
    # Fix image src
    $content = $content -replace 'src=\{(\w+)\}(?!\.)', 'src={$1.src}'
    
    # Remove orphan lines
    $content = $content -replace '(?m)^\s*,\s*$', ''
    $content = $content -replace '(?m)^\s*\}\);?\s*$\n(?=const|function|import)', ''
    
    # Clean blank lines
    $content = $content -replace '(\r?\n){4,}', "`n`n`n"
    
    $content | Out-File $file -Encoding UTF8 -NoNewline
    Write-Host "✓ $($page.Directory.Name)\$($page.Name)"
}

Write-Host "`nCleanup complete!"
