module.exports = {
  '*.{vue,ts,js,jsx,cjs,mjs,tsx,cts,mts}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,json,html}': 'prettier --write',
  '*.svg': 'svgo --multipass',
};
