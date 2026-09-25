import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const services = [
  { file: 'kitchen-remodeling.tsx', name: 'Kitchen Remodeling' },
  { file: 'bathroom-renovation.tsx', name: 'Bathroom Renovation' },
  { file: 'hardwood-flooring.tsx', name: 'Hardwood Flooring' },
  { file: 'vinyl-flooring.tsx', name: 'Vinyl Flooring' },
  { file: 'tile-installation.tsx', name: 'Tile Installation' },
  { file: 'home-renovation.tsx', name: 'Home Renovation' },
];

for (const service of services) {
  const filePath = join(__dirname, '..', 'src', 'routes', 'services', service.file);
  let content = readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('createBreadcrumbSchema')) {
    content = content.replace(
      /import { Reveal } from "@\/components\/Reveal";/,
      `import { Reveal } from "@/components/Reveal";\nimport { createBreadcrumbSchema } from "@/lib/schema";`
    );
  }

  // Add breadcrumb schema scripts
  if (!content.includes('scripts:')) {
    const url = `https://www.sudcanpainting.com/services/${service.file.replace('.tsx', '')}`;
    const breadcrumbScript = `    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "${service.name}", url: "${url}" },
        ])),
      },
    ],`;

    content = content.replace(/    \],\s*\}\),/, breadcrumbScript + '\n  }),');
  }

  writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added breadcrumb to ${service.file}`);
}

console.log('\n🎉 All service pages updated with breadcrumb schema!');
