function show(vItem) { 
	document.getElementById("result").value+=vItem;
}

function erase() {
	document.getElementById("result").value = "";
}

function equals() {
	let x = document.getElementById("result").value;
	let y = eval(x);
	document.getElementById("result").value = y;
}
	