var canvas = document.getElementById("the-canvas");
var canvasCtx = canvas.getContext("2d");
var currentX = 10;
var currentY = 10;
var maxWidth = canvas.width;
var maxHeight = canvas.height;
var radius = 10;
var from = 0;
var to = 2 * Math.PI;
var isMovingDown = true;
var isMovingRight = true;
canvasCtx.fillStyle = "#04E0BC";

setInterval(function () {

    if (isMovingRight) {
        currentX++;
    } else {
        currentX--;
    }

    if (isMovingDown) {
        currentY++;
    } else {
        currentY--;
    }

    if (currentX >= maxWidth) {
        isMovingRight = !isMovingRight;
        currentX = maxWidth - 1;
    } else if (currentX <= 0) {
        isMovingRight = !isMovingRight;
        currentX = 1;
    } else if (currentY >= maxHeight) {
        isMovingDown = !isMovingDown;
        currentY = maxHeight - 1;
    } else if (currentY <= 0) {
        isMovingDown = !isMovingDown;
        currentY = 1;
    }

    canvasCtx.clearRect(0, 0, maxWidth, maxHeight);
    canvasCtx.beginPath();
    canvasCtx.arc(currentX, currentY, radius, from, to);
    canvasCtx.fill();

}, 1);