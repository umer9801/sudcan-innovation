import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SEO-friendly naming mapping
const imageNameMapping = {
  '1.jpeg': 'interior-painting-living-room-kitchener.webp',
  '2.jpeg': 'exterior-house-painting-waterloo.webp',
  '3.jpeg': 'kitchen-cabinet-refinishing-before-after.webp',
  '4.jpeg': 'bathroom-renovation-tile-work-cambridge.webp',
  '5.jpeg': 'modern-interior-paint-bedroom-kitchener.webp',
  '6.jpeg': 'commercial-painting-office-space-waterloo.webp',
  '7.jpeg': 'exterior-siding-painting-residential-ontario.webp',
  '8.jpeg': 'hardwood-floor-installation-living-room.webp',
  '9.jpeg': 'kitchen-remodeling-countertop-backsplash.webp',
  '10.jpeg': 'bathroom-vanity-renovation-modern-design.webp',
  '11.jpeg': 'interior-trim-painting-detail-work.webp',
  '12.jpeg': 'exterior-deck-staining-refinishing.webp',
  '13.jpeg': 'home-renovation-complete-transformation.webp',
  '14.jpeg': 'vinyl-flooring-installation-basement.webp',
  '15.jpeg': 'tile-installation-shower-bathroom.webp',
  '16.jpeg': 'cabinet-painting-kitchen-white-finish.webp',
  '17.jpeg': 'exterior-painting-brick-home-kitchener.webp',
  '18.jpeg': 'interior-wall-painting-neutral-colors.webp',
  '19.jpeg': 'commercial-space-painting-contractors.webp',
  '20.jpeg': 'hardwood-floor-refinishing-natural-oak.webp',
  '21.jpeg': 'home-improvement-painting-services-ontario.webp',
  'craftsman.jpg': 'professional-painter-craftsman-sudcan.webp',
  'log.jpeg': 'sudcan-painting-logo.webp'
};

const assetsPath = join(__dirname, '..', 'src', 'assets');

async function convertImages() {
  console.log('🎨 Starting image conversion to WebP...\n');
  
  const files = await readdir(assetsPath);
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.jpeg', '.jpg', '.png'].includes(ext);
  });

  let converted = 0;
  let errors = 0;

  for (const file of imageFiles) {
    const inputPath = join(assetsPath, file);
    const newName = imageNameMapping[file] || file.replace(/\.(jpeg|jpg|png)$/i, '.webp');
    const outputPath = join(assetsPath, newName);

    try {
      const info = await sharp(inputPath)
        .webp({ quality: 85, effort: 6 }) // High quality, good compression
        .toFile(outputPath);

      const originalSize = (await sharp(inputPath).metadata()).size / 1024;
      const newSize = info.size / 1024;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(`✅ ${file} → ${newName}`);
      console.log(`   ${originalSize.toFixed(1)}KB → ${newSize.toFixed(1)}KB (${savings}% smaller)\n`);
      
      converted++;
    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err.message);
      errors++;
    }
  }

  console.log(`\n🎉 Conversion complete!`);
  console.log(`   ✅ Converted: ${converted} images`);
  console.log(`   ❌ Errors: ${errors} images`);
}

convertImages().catch(console.error);
