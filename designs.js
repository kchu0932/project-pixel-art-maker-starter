const dimension = document.querySelector("#sizePicker");
const submit = dimension[2];
const table = document.querySelector("#pixelCanvas");

function makeGrid(event) {

    table.innerHTML = "";

    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;

    for (i = 0; i < height; i++) {
        let row = document.createElement("tr");
        for (j = 0; j < width; j++) {
            let newCell = document.createElement("td");
            row.appendChild(newCell);
            newCell.addEventListener("click", function () {
                const color = document.querySelector("#colorPicker").value;
                newCell.style.backgroundColor = color;
            })
        }
        table.appendChild(row);
    }

    event.preventDefault();
}

const refresh = submit.addEventListener("click", makeGrid);