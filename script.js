var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
	return input.value.length;
}
del();
deleteButton();

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	input.value = "";
	del();
	deleteButton();
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


function del(){
/*var queryli=document.querySelectorAll("li");*/
for (i=0; i<listItems.length; i++){
	listItems[i].addEventListener("click", changeClass);
}
}
function changeClass(){
	this.classList.toggle("done");
}
function deleteButton(){
	var button = document.querySelectorAll("li button");
	for(i=0; i<button.length; i++){
		button[i].addEventListener("click", clearElement)
	}
}
function clearElement(){
	for(i=0; i<listItems.length; i++){
		this.parentNode.remove()
	}
}
