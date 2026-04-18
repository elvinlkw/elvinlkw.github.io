const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'src/svg/icons');

function convertFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.jsx');

  // Extract component name from const declaration
  const componentMatch = content.match(/const\s+(\w+)\s*=/);
  const componentName = componentMatch ? componentMatch[1] : fileName;

  // Check which props are used
  const usesSize =
    content.includes('{size}') ||
    content.includes('{ size') ||
    content.includes(', size');
  const usesColor =
    content.includes('{color}') ||
    content.includes('{ color') ||
    content.includes(', color');
  const usesBackground =
    content.includes('{background}') ||
    content.includes('{ background') ||
    content.includes(', background');

  // Build the TypeScript interface
  let interfaceDef = '';
  if (usesSize || usesColor || usesBackground) {
    interfaceDef = 'interface IconProps {\n';
    if (usesSize) interfaceDef += '  size?: number;\n';
    if (usesColor) interfaceDef += '  color?: string;\n';
    if (usesBackground) interfaceDef += '  background?: string;\n';
    interfaceDef += '}\n\n';
  }

  // Remove React import
  let tsxContent = content.replace(/import React from 'react';\n\n?/, '');

  // Update function signature to include type
  if (interfaceDef) {
    // Extract current props from destructuring
    const destructMatch = tsxContent.match(
      /const\s+\w+\s*=\s*\(\s*{\s*([^}]*?)\s*}\s*\)\s*=>/
    );
    if (destructMatch) {
      const propsStr = destructMatch[1];
      const props = propsStr
        .split(',')
        .map((p) => p.trim().split('=')[0].trim())
        .filter((p) => p);

      // Replace function signature
      tsxContent = tsxContent.replace(
        /const\s+(\w+)\s*=\s*\(\s*{\s*([^}]*?)\s*}\s*\)\s*=>/,
        `const $1 = (props: IconProps) =>`
      );

      // Replace each prop reference with props.prop
      props.forEach((prop) => {
        tsxContent = tsxContent.replace(
          new RegExp(`\\b${prop}\\b`, 'g'),
          `props.${prop}`
        );
      });
    }
  }

  tsxContent = interfaceDef + tsxContent;

  const tsxPath = filePath.replace('.jsx', '.tsx');
  fs.writeFileSync(tsxPath, tsxContent);
  console.log(`✓ ${tsxPath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.jsx')) {
      convertFile(fullPath);
    }
  });
}

walkDir(iconsDir);
console.log('\nConversion complete!');
