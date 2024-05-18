# !/bin/bash
nvm list
nvm use 18.17.1
npm run build
rm -rf docs
mv build docs
cp overrides/.nojekyll docs/.nojekyll
ls -l docs

