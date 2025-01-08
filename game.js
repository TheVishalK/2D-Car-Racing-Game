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

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
      moveLeft = false;
    }
    if (event.key === "ArrowRight") {
      moveRight = false;
    }
  });

function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(carX, carY, carWidth, carHeight);
}
function drawRoad() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Draw dashed line in the middle of the road
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 15]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
  }

  function moveCar() {
    if (moveLeft) {
      carX -= carSpeed;
    }
    if (moveRight) {
      carX += carSpeed;
    }
  }

function gameLoop() {
    drawRoad();
    drawCar();
    moveCar();
    requestAnimationFrame(gameLoop); // Continue the game loop
  }
  gameLoop();