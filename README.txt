压缩JS：
ref: http://www.npmjs.com/package/uglify-js
cnpm install uglify-js -g
uglifyjs main.js --compress --mangle -o main.min.js

If you wish to pass your options before the input files, separate the two with a ‘double dash’ 
to prevent input files being used as option arguments:
uglifyjs --compress --mangle -- input.js


https://www.npmjs.com/package/serve
npm install -g serve
serve help
