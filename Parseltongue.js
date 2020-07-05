
/*
Hermione has come up with a precise formula for determining whether or not a phrase was
ssspoken by a parssseltongue (a reference from the Harry Potter universe; the language of 
ssserpents and those who can converse with them).

Each word in a sssentence must contain either:

At least 2 instances of the letter "s" (i.e. must be together ss), or...
Zero instances of the letter "s".
*/ 

function isParselTongue(sentence) {
	return /^(\b\w*s{2,}\w*\b|\b[^s]*\b)+\.?$/i.test(sentence)
}