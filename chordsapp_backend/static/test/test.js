//UI
var mouseDown;
var temp = document.querySelector("#shareBoxTemplate");

document.addEventListener("mousedown", function () {
	var shareBox = document.querySelector("#shareBox");
	if (shareBox !== null && document.activeElement !== shareBox) {
		document.getSelection().removeAllRanges();
		shareBox.remove();
		console.log("removed");
	}
});

document.addEventListener("mouseup", mouseUpDetected);

function mouseUpDetected() {
	if (window.getSelection().toString() == "") {
		return;
	}
	let sel = window.getSelection();
	var range = sel.getRangeAt(0);

	console.log(sel);

	document.body.insertBefore(document.importNode(temp.content, true), temp);

	let input = document.querySelector("#TextBox");
	input.addEventListener("mousedown", () => {
		event.stopPropagation(); //stops js bubbling and prevents mousedown of sharebox from being called
	});
	input.addEventListener("keydown", (e) => {
		if (e.keyCode == 13) {
			wrapSelectedText(range, input.value);
			var shareBox = document.querySelector("#shareBox");
			shareBox.remove();
		}
	});
	var rect = range.getBoundingClientRect();
	var shareBox = document.querySelector("#shareBox");
	shareBox.style.top = `calc(${rect.top}px - 38px)`;
	shareBox.style.left = `calc(${rect.left}px + calc(${rect.width}px / 2) - 30px)`;
	input.focus();
}

//END OF UI

function wrapSelectedText(selection, color) {
	let selectedText = selection.extractContents();
	let span = document.createElement("span");
	span.style.backgroundColor = color;
	span.appendChild(selectedText);
	selection.insertNode(span);
}
