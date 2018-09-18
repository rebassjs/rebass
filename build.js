const fs = require('fs');
const util = require('util');
const del = require('del');
const makeDir = require('make-dir');
const babel = require('@babel/core');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const transform = util.promisify(babel.transform);

(async () => {
  const pkg = JSON.parse(await readFile('package.json', 'utf-8'));
  const emotionPkg = JSON.stringify({
    name: pkg.name + '/emotion',
    main: '../dist/emotion.cjs.js',
    module: '../dist/emotion.esm.js'
  }, null, 2);
  const filename = 'src/index.js';
  const content = await readFile(filename, 'utf-8');

  const writeTransform = async ({ file, modules, replacements }) => {
    const { code } = await transform(content, {
      filename,
      babelrc: false,
      presets: [ ['@babel/env', { loose: true, modules }], '@babel/react' ],
      plugins: [ [ 'transform-rename-import', { replacements } ] ]
    });
    await writeFile(file, code)
  };

  const emotionReplacement = {
    original: '^styled-components$',
    replacement: 'react-emotion'
  };

  await del('emotion');
  await makeDir('emotion');
  await writeFile('emotion/package.json', emotionPkg);

  await del('dist');
  await makeDir('dist');
  await writeTransform({
    file: 'dist/index.cjs.js',
    modules: 'commonjs',
    replacements: []
  });
  await writeTransform({
    file: 'dist/index.esm.js',
    modules: false,
    replacements: []
  });
  await writeTransform({
    file: 'dist/emotion.cjs.js',
    modules: 'commonjs',
    replacements: [emotionReplacement]
  });
  await writeTransform({
    file: 'dist/emotion.esm.js',
    modules: false,
    replacements: [emotionReplacement]
  });
})();
