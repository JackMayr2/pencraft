/*
This is a guide to help you generate a favicon.ico file from your SVG logo.
Since we can't directly convert SVG to ICO in this text-based environment,
here are the steps to do it manually:

Option 1: Online Conversion
1. Visit a favicon generator website like https://realfavicongenerator.net/
2. Upload your pigeon_logo.svg file
3. Configure your favicon settings
4. Download the generated favicon package
5. Place the favicon.ico file in your project's public directory

Option 2: Using Sharp/ImageMagick (for developers)
If you have Node.js and npm installed:

1. Install Sharp or ImageMagick
   npm install sharp
   
2. Create a Node.js script like this:
   
   const sharp = require('sharp');
   
   async function createFavicon() {
     try {
       // Convert SVG to PNG first (at various sizes)
       await sharp('public/pigeon_logo.svg')
         .resize(16, 16)
         .toFile('public/favicon-16.png');
       
       await sharp('public/pigeon_logo.svg')
         .resize(32, 32)
         .toFile('public/favicon-32.png');
       
       await sharp('public/pigeon_logo.svg')
         .resize(48, 48)
         .toFile('public/favicon-48.png');
       
       // Then use ImageMagick command-line to convert PNGs to ICO
       // You'll need to install ImageMagick separately
       // exec('magick convert public/favicon-16.png public/favicon-32.png public/favicon-48.png public/favicon.ico');
       
       console.log('Favicon created successfully!');
     } catch (error) {
       console.error('Error creating favicon:', error);
     }
   }
   
   createFavicon();

3. Run the script:
   node create-favicon.js

Option 3: Simple Approach
1. Resize your SVG to a small square image (32x32 or 16x16)
2. Save as PNG
3. Convert to ICO using an online converter
4. Place in your public directory as favicon.ico

Once you have your favicon.ico file, place it in the public directory of your Next.js project.
The layout.tsx file is already configured to use it.
*/ 