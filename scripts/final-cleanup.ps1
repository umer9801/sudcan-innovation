# Final comprehensive cleanup script for all converted Next.js pages
# This removes ALL TanStack Router artifacts and fixes common issues

Write-Host "Starting final cleanup of all pages..." -ForegroundColor Cyan

$allPages = Get-ChildItem -Recurse -Path "app" -Filter "page.tsx"
$fixed = 0
$errors = 0

foreach ($page in $allPages) {
    try {
        $file = $page.FullName
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Skip if already clean (has export default function)
        if ($content -match 'export default function' -and $content -notmatch 'head:\s*\(') {
            Write-Host "✓ Already clean: $($page.Directory.Name)\$($page.Name)" -ForegroundColor Green
            continue
        }
        
        Write-Host "Fixing: $($page.Directory.Name)\$($page.Name)..." -ForegroundColor Yellow
        
        # Step 1: Remove ALL TanStack Router imports
        $content = $content -replace 'import\s*\{[^}]*createFileRoute[^}]*\}\s*from\s*"@tanstack/react-router";\s*', ''
        $content = $content -replace 'import\s*\{[^}]*Outlet[^}]*\}\s*from\s*"@tanstack/react-router";\s*', ''
        
        # Step 2: Replace TanStack Link with Next.js Link
        if ($content -match 'from\s*"@tanstack/react-router"') {
            $content = $content -replace 'import\s*\{([^}]*),?\s*Link[^}]*\}\s*from\s*"@tanstack/react-router";', 'import { $1 } from "lucide-react";'
            $content = "import Link from 'next/link';`n" + $content
        }
        
        # Step 3: Remove entire Route export block (with head, loader, beforeLoad)
        # This regex finds "export const Route = createFileRoute..." and removes everything until the closing });
        $content = $content -replace '(?s)export\s+const\s+Route\s*=\s*createFileRoute\([^\)]+\)\(\{.*?\}\);', ''
        
        # Step 4: Change <Link to= to <Link href=
        $content = $content -replace '<Link\s+to=', '<Link href='
        
        # Step 5: Find main component and add export default
        if ($content -match 'function\s+(\w+Page|\w+)\s*\(\s*\)') {
            $funcName = $matches[1]
            if ($content -notmatch "export\s+default\s+function\s+$funcName") {
                $content = $content -replace "function\s+$funcName\s*\(", "export default function $funcName("
            }
        }
        
        # Step 6: Add use client directive if needed
        $needsUseClient = $false
        if ($content -match '(useState|useEffect|useRef|useRouter|useSearchParams|usePathname|motion\.)') {
            $needsUseClient = $true
        }
        if ($content -match '(onClick|onChange|onSubmit|onMouseEnter|onFocus|toast)') {
            $needsUseClient = $true  
        }
        
        if ($needsUseClient -and $content -notmatch 'use client') {
            $directive = '"use client";'
            $content = $directive + "`n`n" + $content
        }
        
        # Step 7: Fix image imports - ensure .src is used
        # This is a careful replacement to avoid breaking already correct code
        $content = $content -replace '(?<=src=\{)(\w+)(?!\.)(?=\})', '$1.src'
        $content = $content -replace 'backgroundImage:\s*`[^`]*url\((\$\{[^}]+\})\)','backgroundImage: `url(${$1.src})`'
        
        # Step 8: Remove any orphaned metadata blocks that start with just {
        # Look for standalone { after imports that don't belong to any function
        $lines = $content -split "`n"
        $cleanedLines = @()
        $skipDepth = 0
        $inOrphanBlock = $false
        
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            
            # Detect orphaned metadata block start
            if ($line -match '^\s*\{\s*$' -and $i -gt 5 -and $lines[$i-1] -match '(lucide-react|@/lib|@/components)') {
                $inOrphanBlock = $true
                $skipDepth = 1
                continue
            }
            
            if ($inOrphanBlock) {
                $skipDepth += ($line -split '\{').Count - 1
                $skipDepth -= ($line -split '\}').Count - 1
                
                if ($skipDepth -le 0) {
                    $inOrphanBlock = $false
                }
                continue
            }
            
            # Skip orphaned lines
            if ($line -match '^\s*(,|component:|loader:|beforeLoad:|head:)\s*$') {
                continue
            }
            
            $cleanedLines += $line
        }
        
        $content = $cleanedLines -join "`n"
        
        # Step 9: Fix useRouter imports (TanStack -> Next.js)
        if ($content -match 'useNavigate') {
            $content = $content -replace 'const\s+navigate\s*=\s*useNavigate\(\);', 'const router = useRouter();'
            $content = $content -replace 'navigate\(([^)]+)\)', 'router.push($1)'
            
            # Add Next.js useRouter import
            if ($content -notmatch 'import.*useRouter.*from.*next/navigation') {
                $content = 'import { useRouter } from "next/navigation";' + "`n" + $content
            }
        }
        
        # Step 10: Clean up multiple blank lines
        $content = $content -replace '(\r?\n){4,}', "`n`n`n"
        
        # Step 11: Remove any remaining references to Route.useLoaderData()
        $content = $content -replace 'const\s+\{[^}]+\}\s*=\s*Route\.useLoaderData\(\);', ''
        $content = $content -replace 'Route\.useLoaderData\(\)', '{}'
        
        # Save cleaned content
        $content | Out-File $file -Encoding UTF8 -NoNewline
        
        $fixed++
        Write-Host "  ✓ Fixed successfully" -ForegroundColor Green
        
    } catch {
        Write-Host "  ✗ Error: $_" -ForegroundColor Red
        $errors++
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Cleanup Complete!" -ForegroundColor Green
Write-Host "  Fixed: $fixed pages" -ForegroundColor Green
Write-Host "  Errors: $errors pages" -ForegroundColor $(if ($errors -gt 0) { 'Red' } else { 'Green' })
Write-Host "========================================`n" -ForegroundColor Cyan

if ($fixed -gt 0) {
    Write-Host "Next step: Run 'npm run build' to test" -ForegroundColor Yellow
}
