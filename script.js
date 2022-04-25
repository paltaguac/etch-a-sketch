const wrapper = document.querySelector(".wrapper")
const gridContainer = document.querySelector(".gridContainer")
function makeRows(rows, cols){
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols",cols);
    for (i=0; i<(rows*cols);i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className="grid-item";
    }
}

makeRows(16,16)