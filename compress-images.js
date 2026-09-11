const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'public', 'dokumentasi');
const OUTPUT_DIR = path.join(__dirname, 'public', 'dokumentasi');
const QUALITY = 80;

async function compressImages() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => 
    /\.(png|jpg|jpeg)$/i.test(f)
  );

  console.log(`Found ${files.length} images to compress:\n`);

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputFile);

    const inputSize = fs.statSync(inputPath).size;

    try {
      await sharp(inputPath)
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✓ ${file} → ${outputFile} (${savings}% smaller)`);
    } catch (err) {
      console.log(`✗ ${file} - Error: ${err.message}`);
    }
  }

  console.log('\nDone! Update image paths in components to use .webp extension.');
}

compressImages();
