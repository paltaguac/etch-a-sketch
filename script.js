const wrapper = document.querySelector(".wrapper");
const grid = document.querySelector(".grid");
const defaultSize=16
let defaultColor="white"
// FUNCTION TO CREATE OUR GRID:
function makeGrid(size) {
  grid.style.setProperty("--grid-rows", size);
  grid.style.setProperty("--grid-cols", size);
  for (i = 0; i < size**2; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "gridItem";
    cell.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor=defaultColor
    })
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
// The squares will be a selection of ALL the gridItems
// Everytime the mouse enters a square(gridItem) it will change its color (background color)
function changeColor(color){
    squares=document.querySelectorAll(".gridItem")
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
    squares=document.querySelectorAll(".gridItem")
    squares.forEach(gridItem=>{gridItem.setAttribute("style","backgroundColor:none")})
})
// eraser pen
const eraser = document.querySelector("#eraser") 
eraser.addEventListener("click",function(){
    squares=document.querySelectorAll(".gridItem")
    changeColor("transparent")
})
// black pen
const colorWheel = document.querySelector("#colorWheel")
const blackPen = document.querySelector("#blackPen")
const colorContainer = document.querySelector(".colorContainer")
colorContainer.addEventListener("click",function(){
    colorWheel.click()
})
colorWheel.addEventListener("change",(e)=>{
    color=e.target.value
    defaultColor=e.target.value
    changeColor(color)
})
blackPen.addEventListener("click",function(){
    squares=document.querySelectorAll(".gridItem")
    changeColor("black")
})
// dropdown buttons for resizing.
const dropDownBtn = document.querySelector(".dropDownBtn")
const sizeButtons = document.querySelectorAll(".dropDownBtn")
sizeButtons.forEach(dropDownBtn=>{
    dropDownBtn.addEventListener("click",function(){
        if(dropDownBtn.getAttribute("id")=="button8"){
            size=8
        }
        if(dropDownBtn.getAttribute("id")=="button16"){
            size=16
        }
        if(dropDownBtn.getAttribute("id")=="button32"){
            size=32
        }
        if(dropDownBtn.getAttribute("id")=="button64"){
            size=64
        }
        resizeGrid()
    })
})