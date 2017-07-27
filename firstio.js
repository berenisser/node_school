var fs = require('fs');
var archivo = process.argv[2],
contador = 0,
strBuffer;

strBuffer = fs.readFileSync(archivo, 'utf8');
strBuffer = strBuffer.replace(/\n+$/, '');
strBuffer = strBuffer.split('\n');
contador = strBuffer.length-1;

console.log(contador);