const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 40, 100);
}
drawCar();