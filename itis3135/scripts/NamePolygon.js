window.alert("The Deadly Dangerous Cougar would like to know your favorite number between 1-10")

function getShape() {
	let x = document.forms["polygon"]["num"].value;
	if (x == 1) {
		alert("That is a henagon");
	}
	else if (x == 2) {
		alert("That is a digon");			
	}
	else if (x == 3) {
		alert("That is a trigon");			
	}
	else if (x == 4) {
		alert("That is a trentagon");			
	}
	else if (x == 5) {
		alert("That is a pentagon");			
	}
	else if (x == 6) {
		alert("That is a hexagon");			
	}
	else if (x == 7) {
		alert("That is a heptagon");			
	}
	else if (x == 8) {
		alert("That is a octagon");			
	}
	else if (x == 9) {
		alert("That is a enneagon");			
	}
	else if (x == 10) {
		alert("That is a decagon");			
	}
}

function validateEntry() {
  let x = document.forms["polygon"]["num"].value;
  if (x < 1 || x > 10 ) {
    alert("Number must be between 1-10");
    return false;
  }
}

