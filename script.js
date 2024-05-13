function makeid(l) {
  // write your code here
	const uuid = crypto.randomUUID()
return uuid.slice(0, l)
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
