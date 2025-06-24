#!/usr/bin/env bun
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { redirects } from './redirects.config'
// Base path for the site
const basePath = '/reth'

function generateRedirectHtml(targetPath: string): string {
  // Add base path if target doesn't already have it
  const finalPath = targetPath.startsWith(basePath) ? targetPath : `${basePath}${targetPath}`
  
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; URL=${finalPath}">
    <link rel="canonical" href="${finalPath}">
</head>
<body>
    <script>
        window.location.href = "${finalPath}";
    </script>
    <p>Reth mdbook has been migrated to new docs. If you are not redirected please <a href="${finalPath}">click here</a>.</p>
</body>
</html>`
}

// Generate redirect files
Object.entries(redirects).forEach(([from, to]) => {
  // Remove base path if present
  const fromPath = from.replace(/^\/reth\//, '')
  
  // Generate both with and without .html
  const paths = [fromPath]
  if (!fromPath.endsWith('.html')) {
    paths.push(`${fromPath}.html`)
  }
  
  paths.forEach(path => {
    const filePath = join('./docs/dist', path)
    if (!path.includes('.')) {
      // It's a directory path, create index.html
      const indexPath = join('./docs/dist', path, 'index.html')
      mkdirSync(dirname(indexPath), { recursive: true })
      writeFileSync(indexPath, generateRedirectHtml(to))
    } else {
      // It's a file path
      mkdirSync(dirname(filePath), { recursive: true })
      writeFileSync(filePath, generateRedirectHtml(to))
    }
  })
})

console.log('Redirects generated successfully!')