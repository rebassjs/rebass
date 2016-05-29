#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi
echo 'Deploying to gh-pages...'
rm -rf build || exit 0
mkdir -p build
npm run build
cd build
git init
git config user.name "Travis-CI"
git config user.email "travis@jxnblk.com"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
