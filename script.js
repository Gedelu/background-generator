var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
console.log(ul);

function inputLength() {
	return input.value.length;
}

function createListElement() {
	modifiedInput = input.value + " ";
	var lineBreak = document.createElement("br");
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.innerText = "Delete";
	li.appendChild(document.createTextNode(modifiedInput));
	li.classList.add("done");
	li.appendChild(button);
	ul.appendChild(li);
	ul.appendChild(lineBreak);
	input.value = "";
}

function lineThrough(){
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

console.log("umamahesh");
console.log("changing the git account");