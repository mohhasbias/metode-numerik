var jumlahSuku = 7;

console.log(jumlahSuku + ' suku pertama dari deret fibonaci adalah :');

var a = 1;
var b = 1;
var a_plus_b = a+b;
for(var i=0; i < jumlahSuku; i++){
	console.log(a);

	a = b;
	b = a_plus_b;
	a_plus_b = a+b;
}
