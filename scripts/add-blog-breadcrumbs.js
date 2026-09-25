import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogs = [
  { file: 'interior-painting-cost-kitchener-2026.tsx', title: 'Interior Painting Cost Kitchener 2026' },
  { file: 'how-to-choose-paint-colors.tsx', title: 'How to Choose Paint Colors' },
  { file: 'cabinet-refinishing-vs-replace.tsx', title: 'Cabinet Refinishing vs Replace' },
  { file: 'best-exterior-paint-canadian-weather.tsx', title: 'Best Exterior Paint for Canadian Weather' },
];

for (const blog of blogs) {
  const filePath = join(__dirname, '..', 'src', 'routes', 'blog', blog.file);
  let content = readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('createBreadcrumbSchema')) {
    content = content.replace(
      /import { Reveal } from "@\/components\/Reveal";/,
      `import { Reveal } from "@/components/Reveal";\nimport { createBreadcrumbSchema } from "@/lib/schema";`
    );
  }

  // Add breadcrumb schema scripts
  if (!content.includes('scripts:') || !content.includes('BreadcrumbList')) {
    const url = `https://www.sudcanpainting.com/blog/${blog.file.replace('.tsx', '')}`;
    const breadcrumbScript = `    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Blog", url: "https://www.sudcanpainting.com/blog" },
          { name: "${blog.title}", url: "${url}" },
        ])),
      },
    ],`;

    content = content.replace(/    \],\s*\}\),/, breadcrumbScript + '\n  }),');
  }

  writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added breadcrumb to ${blog.file}`);
}

console.log('\n🎉 All blog pages updated with breadcrumb schema!');
