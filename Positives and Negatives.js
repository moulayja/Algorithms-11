
/*
Create a function which validates whether a given array alternates
between positive and negative numbers.
*/

function alternatePosNeg(arr) {
	if (arr.includes(0)) {
		return false
	}
	return arr.slice(1)
		.every((v,i) => (v > 0 && arr[i] < 0) || (v < 0 && arr[i] > 0))
}