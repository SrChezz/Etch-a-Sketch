
let grid = document.getElementById("grid");
let gridSize = document.getElementById("gridSize");
let displaySize = document.getElementById("displaySize");
let clearButton = document.getElementById("clear");
let colorInput = document.getElementById('colorPicker')
console.log(colorInput.value)


let input = 8
defineBoxes ("add", input**2)

gridSize.addEventListener("input", function (e) { 
    displaySize.innerText = `${gridSize.value} x ${gridSize.value}`
})

clearButton.addEventListener("click", function (event) {
    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].classList.remove("card-hover")  
        grid.children[i].style["background-color"] = "#fff"; 
    }
})

gridSize.addEventListener("change", function (e) {  
    grid.style["grid-template-columns"] = `repeat(${gridSize.value}, 1fr)`;

    console.log(e.target.value)
    let newInput = parseInt(e.target.value)
    let newQuantity = Math.abs((input**2) - (newInput**2))
    
    console.log(newQuantity, input, newInput)

    if (input > newInput) {       
        defineBoxes ("remove", newQuantity)
    } else {      
        defineBoxes ("add", newQuantity)
    }

    input = newInput

})

function defineBoxes (operation, quantity) {
    if (operation == "add") {
        // console.log("something was added")
        for (let i = 0; i < quantity; i++) {
            let gridItem = document.createElement("div")
            gridItem.classList.add("card");
            grid.appendChild(gridItem)

            gridItem.addEventListener("mouseover", function (event) {
                gridItem.classList.add("card-hover");
                gridItem.style["background-color"] = colorInput.value;
            })
            gridItem.addEventListener("touch", function (event) {
                gridItem.classList.add("card-hover");
                gridItem.style["background-color"] = colorInput.value;
            })
        }       
    } else if (operation == "remove") {
        // console.log("something was removed")
        for (let i = 0; i < quantity; i++) {
            grid.removeChild(grid.lastChild)
        }
    }
}


