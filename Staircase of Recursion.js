
/*
Write a function that returns the number of ways a person can climb n stairs,
where the person may only climb 1 or 2 steps at a time.
*/ 

function waysToClimb(n) {
	if (n === 0 || n === 1) return 1;
	return waysToClimb(n - 1) + waysToClimb (n-2)
}