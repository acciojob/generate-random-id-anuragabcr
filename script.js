function makeid(l) {
  // write your code here
	chars = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
id = ''
for(let i=0; i<l; i++) {
	id += chars.charAt(Math.floor(Math.random()*chars.length))
}
return id
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
