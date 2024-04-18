// import { readdir, writeFile } from 'fs/promises';
// import { basename, extname } from 'path';

// // Caminho para a pasta de imagens
// const imagePath = './src/assets';

// async function generateImages() {
//   try {
//     // Ler os arquivos na pasta de imagens
//     const files = await readdir(imagePath);

//     // Filtrar apenas os arquivos de imagem (por exemplo: .jpg, .png, .gif)
//     const imageFiles = files.filter(file => /\.(jpg|png|gif)$/.test(file));

//     // Criar os imports para as imagens e renomear
//     let importsString = '';
//     imageFiles.forEach(file => {
//       const imageName = basename(file, extname(file)).replace(/[\W_]+/g, '');
//       const imagePathFull = `${imagePath}/${file}`; // Caminho completo para a imagem
//       importsString += `import ${imageName}Img from '${imagePathFull}';\n`;
//     });

//     // Criar o objeto de imagens e renomear
//     let exportString = `${importsString}\nconst Images = {\n`;
//     imageFiles.forEach(file => {
//       const imageName = basename(file, extname(file)).replace(/[\W_]+/g, '');
//       exportString += `  ${imageName}: ${imageName}Img,\n`;
//     });
//     exportString += '};\n\nexport default Images;\n';

//     // Escrever o arquivo de exportação
//     await writeFile('src/utils/images.ts', exportString);

//     console.log('Arquivo de exportação atualizado com sucesso.');
//   } catch (err) {
//     console.error('Erro ao gerar as imagens:', err);
//   }
// }

// generateImages();


import { readdir, writeFile } from 'fs/promises';
import { basename, extname } from 'path';

// Caminho para a pasta de imagens
const imagePath = './src/assets';

async function generateImages() {
  try {
    // Ler os arquivos na pasta de imagens
    const files = await readdir(imagePath);

    // Filtrar apenas os arquivos de imagem (por exemplo: .jpg, .png, .gif)
    const imageFiles = files.filter(file => /\.(jpg|png|gif)$/.test(file));

    // Criar os imports para as imagens e renomear
    let importsString = '';
    imageFiles.forEach(file => {
      const imageName = basename(file, extname(file)).replace(/[\W_]+/g, '');
      const imagePathFull = `${imagePath}/${file}`; // Caminho completo para a imagem
      importsString += `import ${imageName}Img from '${'../../' + imagePathFull}';\n`; // Ajuste aqui para adicionar '../../' ao caminho
    });

    // Criar o objeto de imagens e renomear
    let exportString = `${importsString}\nconst Images = {\n`;
    imageFiles.forEach(file => {
      const imageName = basename(file, extname(file)).replace(/[\W_]+/g, '');
      exportString += `  ${imageName}: ${imageName}Img,\n`;
    });
    exportString += '};\n\nexport default Images;\n';

    // Escrever o arquivo de exportação
    await writeFile('src/utils/images.ts', exportString);

    console.log('Arquivo de exportação atualizado com sucesso.');
  } catch (err) {
    console.error('Erro ao gerar as imagens:', err);
  }
}

generateImages();
