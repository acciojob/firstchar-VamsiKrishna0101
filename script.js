function firstChar(text) {
  // your code here
	let index=''
	for(let i=0;i<text.length;i++){
		if(text[i]!=' ') {
			index=text[i]
			break
		}
	}
	return index
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
