const dimension = document.querySelector("#sizePicker");
const submit = dimension[2];
const table = document.querySelector("#pixelCanvas");

/**
 * The following function creates a grid within the table element using
 * inputs from the form for height and width.
 */

function makeGrid(event) {

	table.innerHTML = "";
	// This clears any existing grid

	const height = document.querySelector("#inputHeight").value;
	const width = document.querySelector("#inputWidth").value;

	for (i = 0; i < height; i++) {
		// For loop makes rows equal to the height input
		let row = document.createElement("tr");
		for (j = 0; j < width; j++) {
			// For loop makes cells in each row equal to width input
			let newCell = document.createElement("td");
			newCell.addEventListener("click", function() {
				// Allows each cell to be colored by the color picked
				const color = document.querySelector("#colorPicker").value;
				newCell.style.backgroundColor = color;
			})
			row.appendChild(newCell);
		}
		table.appendChild(row);
	}

	event.preventDefault();
	// Prevents the page from refreshing on click
}

const refresh = submit.addEventListener("click", makeGrid);