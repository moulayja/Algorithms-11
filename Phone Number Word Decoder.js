
/*

Create a program that converts a phone number with letters to one with only numbers.

Number	Letter
0	none
1	none
2	ABC
3	DEF
4	GHI
5	JKL
6	MNO
7	PQRS
8	TUV
9	WXYZ

*/

const textToNum=phone=> {
	let lttrs =["ABC","DEF","GHI","JKL","MNO","PQRS","TUW","XYZ"]
	return phone.replace(/[A-Z]/g, (match,i)=>
	lttrs.indexOf(lttrs.find(e=>e.includes(match)))+2)
}   