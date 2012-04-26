#!/bin/sh

rm favorite-url-opener.zip

mkdir favorite-url-opener
cp background.js favorite-url-opener
cp manifest.json favorite-url-opener
cp options.html favorite-url-opener
cp options.js favorite-url-opener
cp -r images favorite-url-opener

zip -r favorite-url-opener.zip favorite-url-opener

rm -rf favorite-url-opener