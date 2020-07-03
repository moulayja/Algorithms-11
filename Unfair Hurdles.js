
/*
Unfair hurdles are hurdles which are either too high, or way too close together.

Create a function which takes in an array of strings, representing hurdles, and returns whether 
or not they are unfair. For the purposes of this challenge, unfair hurdles are:

At least 4 characters tall.
Strictly less than 4 spaces apart.

*/


function isUnfairHurdle(hurdles) {
	let hurdleFreq = {
		"#": 0,
		" ": 0
	}
	let firstRow = hurdles[0].split("")
	
	if (hurdles.length >= 4) {
		return true
	} 
	
	firstRow.forEach(el => {
		if(el === '#') hurdleFreq['#'] += 1
		if(el === ' ') hurdleFreq[' '] += 1
	})
	
	console.log(hurdleFreq)
	
	if(hurdleFreq[' '] / hurdleFreq['#'] <= 1.5) return true
	
	return false
}