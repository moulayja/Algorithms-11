
/*
Create a function that takes a number of a guitar string and 
the number of the fret and returns the corresponding frequency of the note.

Check the Resources Tab, for the correct frequencies per string.
The formula to calculate the frequency is: String Frequency * 2^(fret/12).
Round the frequency to the nearest hundreth.
For this challenge, we use "Standard Tuning".
So, one fret = a semitone = a half step. From D to D♯ for instance.
*/ 

const freqs = {
	1: 329.63,
	2: 246.94,
	3: 196.00,
	4: 146.83,
	5: 110.00,
	6: 82.41
};

function fretFreq(gStr, fret) {
	const freq = freqs[gStr] * Math.pow(2, (fret / 12));
	return Math.round(freq * 100) / 100;
};