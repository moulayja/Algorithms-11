
/*
Create a function that takes in n, a, b and returns the number of values raised 
to the nth power that lie in
the range [a, b], inclusive.
*/

function powerRanger(power, min, max) {
	var c = 0;
	for (var i = 1; ; i++) {
		var n = Math.pow(i, power);
		if (n > max) break;
		if (n >= min) c++;
	}
	return c;
}