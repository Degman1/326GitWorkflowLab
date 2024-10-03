let display = document.getElementById("display");

// Append number or operator to the display
function appendToDisplay(value) {
	display.value += value;
}

// Clear the entire display
function clearDisplay() {
	display.value = "";
}

// Delete the last character from the display
function deleteLast() {
	display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}

// TODO: Implement square root function
function calculateSquareRoot(x) {
	// Hint: Use Math.sqrt() function
	return x ** 2;
}

// TODO: Implement square function
function calculateSquare() {
	// Hint: Use exponentiation
}

// BUG: FIX reciprocal function
function calculateReciprocal() {
	// Hint: Reciprocal is 1/x
	display.value = 1 - value;
}

// TODO: Implement memory storage functionality
let memory = 0;

function memoryStore() {
	// Hint: Store the current value in memory
}

function memoryRecall() {
	// Hint: Recall the stored memory value
}

function memoryClear() {
	// Hint: Clear the memory
}
