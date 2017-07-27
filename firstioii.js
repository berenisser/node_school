var fs = require('fs');
var archivo = process.argv[2];

fs.readFile(archivo, 'utf8', function(err, data){
	var spaces = data.split('\n');
	console.log(spaces.length-1);
});