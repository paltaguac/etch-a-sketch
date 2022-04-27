const wrapper = document.querySelector(".wrapper");
const grid = document.querySelector(".grid");
function makeRows(size) { // this function will create our grid dynamically.
  grid.style.setProperty("--grid-rows", size);
  grid.style.setProperty("--grid-cols", size);
  for (i = 0; i < size**2; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "gridItem";
  }
}

makeRows(16); // here we are calling the function to create our grid with 16 rows and 16 columns

const gridItem = document.querySelector(".gridItem")// each grid item is a square
const squares = document.querySelectorAll(".gridItem")// selecting all of the squares inside the grid
function changeColor(color){// we are creating a function to change color on hover.
    squares.forEach(gridItem => {
        gridItem.addEventListener("mouseenter",function(event){
            event.target.style.backgroundColor = color;
    });
})};

const clear = document.querySelector("#clear")//Here we are selecting the clear button
clear.addEventListener("click",function(){
    squares.forEach(gridItem=>{gridItem.setAttribute("style","backgroundColor:none")})
})//here we are adding the function to the clear button, so that on click it will go thhrough each square in the grid and change its background color.
changeColor("black")
// eraser pen
const eraser = document.querySelector("#eraser") 
eraser.addEventListener("click",function(){
    changeColor("pink")
})
// black pen
const blackPen = document.querySelector("#blackPen")
blackPen.addEventListener("click",function(){
    changeColor("Black")
})