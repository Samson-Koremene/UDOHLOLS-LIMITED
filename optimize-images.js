import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const assetsDir = './src/assets';
const outputDir = './src/assets/optimized';

async function optimizeImages() {
    try {
        const files = await readdir(assetsDir);

        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const inputPath = join(assetsDir, file);
                const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                const outputPath = join(outputDir, outputName);

                console.log(`Optimizing ${file}...`);

                await sharp(inputPath)
                    .resize(1920, 1080, {
                        fit: 'cover',
                        withoutEnlargement: true
                    })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`✓ Created ${outputName}`);
            }
        }

        console.log('\n✅ All images optimized!');
    } catch (error) {
        console.error('Error:', error);
    }
}

optimizeImages();
