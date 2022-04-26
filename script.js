const wrapper = document.querySelector(".wrapper");
const gridContainer = document.querySelector(".gridContainer");
function makeRows(rows, cols) { // this function will create our grid dynamically.
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "gridItem";
  }
}

makeRows(16, 16); // here we are calling the function to create our grid with 16 rows and 16 columns
const gridItem = document.querySelector(".gridItem")
const squares = document.querySelectorAll(".gridItem")
function changeColor(color){
    squares.forEach(gridItem => {
        gridItem.addEventListener("mouseenter",function(event){
            event.target.style.backgroundColor = color;
    });
})};
const clear = document.querySelector("#clear")
clear.addEventListener("click",function(){
    squares.forEach(gridItem=>{gridItem.setAttribute("style","backgroundColor:none")})
})
changeColor("black")