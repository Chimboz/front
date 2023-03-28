module.exports = {
  '*.{vue,ts}': (files) => [
    `eslint --fix ${files.join(' ')}`,
    `prettier --write ${files.join(' ')}`,
    'npm run typecheck',
  ],
  '*.{js,jsx,cjs,mjs,tsx,cts,mts}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,json,html}': 'prettier --write',
  '*.svg': 'svgo --multipass',
};
