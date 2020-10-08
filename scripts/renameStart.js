const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

try {
  const srcPath = path.resolve(__dirname, '../src');
  const componentsPath = path.resolve(__dirname, '../components');
  fs.renameSync(componentsPath, srcPath);

  const tsconfig = path.resolve(__dirname, '../tsconfig.json');
  const tsconfigFather = path.resolve(__dirname, '../tsconfig.father.json');
  const tsconfigNormal = path.resolve(__dirname, '../tsconfig.normal.json');
  fs.renameSync(tsconfig, tsconfigNormal);
  fs.renameSync(tsconfigFather, tsconfig);
  console.log('Successfully renamed the directory.');
} catch (err) {
  console.log(err);
}
