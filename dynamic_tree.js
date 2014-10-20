
var numLines = process.argv[2] || 7;

console.log();
for(var i=0; i<numLines; i++){
	var lines = '';
	var numSpaces = numLines-(i+1);
	for(var j=0; j<numSpaces; j++){
		lines += ' ';
	}
	var numStars = 2*i+1;
	for(var j=0; j<numStars; j++){
		lines += '*';
	}
	console.log(lines);
}

var lines = '';
for(var i=0; i<numLines-1; i++){
	lines += ' ';
}
lines += '|';
console.log(lines);
console.log();
