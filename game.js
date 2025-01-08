const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
// Car variables
const carWidth = 50;
const carHeight = 100;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight - 10;
let carSpeed = 5;

// Other cars variables
const otherCars = [];
const otherCarWidth = 50;
const otherCarHeight = 100;

// Key press detection
let moveLeft = false;
let moveRight = false;

// Event listeners for moving the car
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      moveLeft = true;
      console.log("Moving Left");
    }
    if (event.key === "ArrowRight") {
      moveRight = true;
      console.log("Moving Right");
    }
});

function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(carX, carY, carWidth, carHeight);
}
drawCar();