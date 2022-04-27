const wrapper = document.querySelector(".wrapper");
const grid = document.querySelector(".grid");
const defaultSize=16
const defaultColor="white"
// FUNCTION TO CREATE OUR GRID:
function makeGrid(size) {
  grid.style.setProperty("--grid-rows", size);
  grid.style.setProperty("--grid-cols", size);
  for (i = 0; i < size**2; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "gridItem";
  }
}
// CREATING OUR GRID, THE DEFAULT SIZE IS 16
window.onload = makeGrid(defaultSize)
// here we add a function to clear the grid when we resize it
function clearGrid(){
    grid.innerHTML=""
}
function resizeGrid(){
    clearGrid()
    makeGrid(size)
}
// The grid items are each square(div) of the grid
const gridItem = document.querySelector(".gridItem")
// The squares will be a selection of ALL the gridItems
const squares = document.querySelectorAll(".gridItem")
// Everytime the mouse enters a square(gridItem) it will change its color (background color)
function changeColor(color){
    squares.forEach(gridItem => {
        gridItem.addEventListener("mouseenter",function(event){
            event.target.style.backgroundColor = color;
    });
})};
//calling the changecolor function
window.onload=changeColor(defaultColor)
//defining the clear button
const clear = document.querySelector("#clear")
clear.addEventListener("click",function(){
    squares.forEach(gridItem=>{gridItem.setAttribute("style","backgroundColor:none")})
})
// eraser pen
const eraser = document.querySelector("#eraser") 
eraser.addEventListener("click",function(){
    changeColor("transparent")
})
// black pen
const blackPen = document.querySelector("#blackPen")
blackPen.addEventListener("click",function(){
    changeColor("Black")
})