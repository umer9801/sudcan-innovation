import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogs = [
  {
    file: 'cabinet-refinishing-vs-replace.tsx',
    title: 'Cabinet Refinishing vs Replace: Cost Comparison 2026',
    description: 'Should you refinish or replace your kitchen cabinets? Complete cost breakdown, pros and cons, and decision guide for Kitchener-Waterloo homeowners.',
    date: '2026-03-20'
  },
  {
    file: 'best-exterior-paint-canadian-weather.tsx',
    title: 'Best Exterior Paint for Canadian Weather and Winters',
    description: 'Top exterior paint brands and types that withstand harsh Canadian winters. Expert recommendations for Kitchener-Waterloo climate.',
    date: '2026-03-22'
  },
];

for (const blog of blogs) {
  const filePath = join(__dirname, '..', 'src', 'routes', 'blog', blog.file);
  let content = readFileSync(filePath, 'utf8');

  // Check if BlogPosting schema already exists
  if (content.includes('"@type": "BlogPosting"')) {
    console.log(`⏭️  Skipped ${blog.file} (already has BlogPosting schema)`);
    continue;
  }

  const blogPostingSchema = `      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "${blog.title}",
          "description": "${blog.description}",
          "datePublished": "${blog.date}",
          "dateModified": "${blog.date}",
          "author": {
            "@type": "Organization",
            "name": "Sudcan Painting",
            "url": "https://www.sudcanpainting.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sudcan Painting",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sudcanpainting.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.sudcanpainting.com/blog/${blog.file.replace('.tsx', '')}"
          }
        })
      },
`;

  // Add BlogPosting schema before breadcrumb
  content = content.replace(
    /(\s+)({\s+type: "application\/ld\+json",\s+children: JSON\.stringify\(createBreadcrumbSchema)/,
    `$1${blogPostingSchema}$1$2`
  );

  writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added BlogPosting schema to ${blog.file}`);
}

console.log('\n🎉 All blog articles updated with BlogPosting schema!');
