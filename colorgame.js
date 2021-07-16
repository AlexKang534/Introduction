//================================================
//Helper Functions
//================================================
const pickColor = () => {
    //get random number between 0 and 5 inclusive
    const random = Math.floor(Math.random() * colors.length)
    //return colors[random]
    return colors[random]
}

const generateRandomColor = () => {
    // pick r, g, b values  between 0 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
    //make an array
    let output = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        output.push(generateRandomColor())
    }
    return output
    // return that array
}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    RGB.textContent = pickedColor; 
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.backgroundColor = "black"; 
        }
    }
    RGB.style.backgroundColor = "steelblue"; 
    message.textContent = ""; 
}

//================================================
//Selecting Initializing Variables
//================================================
//State
let numSquares = 6; 
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor(); 

// Selecting Elements
const squares = document.querySelectorAll(".square");
const RGB = document.getElementById("RGB");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");


//================================================
//Main
//================================================
function main() {
RGB.textContent = pickedColor;
resetButton.addEventListener("click", reset);
modeButtons.forEach((button) => {
    button.addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy Button") {
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    });
});


// Setting up Square Colors 
for (let i = 0; i <squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
    const clickedColor = this.style.backgroundColor;
    //Compare that color to pickedColor
    if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColors(pickedColor);
        title.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = "black";
        message.textContent = "You Suck" 
    }
    })
};
}

main();
