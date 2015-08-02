var canvas = document.getElementById("the-canvas");
var canvasCtx = canvas.getContext("2d");
var scoreCanvas = document.getElementById("score-canvas");
var scoreCtx = scoreCanvas.getContext("2d");
var highestScoreCanvas = document.getElementById('highest-score-canvas');
var highestScoreCtx = highestScoreCanvas.getContext('2d');
var snake = [];
var segment = {};
var head = { currentX: 10, currentY: 10 };
var maxWidth = canvas.width;
var maxHeight = canvas.height;
var radius = 10;
var from = 0;
var to = 2 * Math.PI;
var direction = 'right';
var isEaten = false;
var currentFood = generateFood();
var foodRadius = 5;
var speed = 200;
var score = 0;
var bestScore = localStorage.getItem("bestScore");

scoreCtx.font = "20pt Arial";

displayHighScore()

var game = setInterval(function () {

    checkIsEaten();

    if (isEaten) {
        currentFood = generateFood();
        isEaten = false;
        segment = { posX: head.currentX, posY: head.currentY }; //generate and add new part to the snake
        snake.push(segment);
        score++;
    }

    calculateMovementSnake();
    checkCollision();
    drawCurrentScore();
    drawSnake();
    drawFood();

}, speed);



function displayHighScore() {

    if (bestScore != "undefined") {

        var scoreText = "Highest score " + bestScore;
        highestScoreCtx.font = 'italic 15pt Calibri';
        highestScoreCtx.fillText(scoreText, 10, scoreCanvas.height / 2 + 1);
    }
}

function drawFood() {

    canvasCtx.beginPath();
    canvasCtx.fillStyle = '#E04834';
    canvasCtx.arc(currentFood.x, currentFood.y, foodRadius, from, to);
    canvasCtx.fill();

}

function drawSnake() {
    
    //draw the head
    canvasCtx.clearRect(0, 0, maxWidth, maxHeight);
    canvasCtx.beginPath();
    canvasCtx.fillStyle = '#3487E0';
    canvasCtx.arc(head.currentX, head.currentY, radius, from, to);
    canvasCtx.fill();

    //draw each other of the snake parts
    for (var item in snake) {
        canvasCtx.beginPath();
        canvasCtx.arc(snake[item].posX, snake[item].posY, radius,
        from, to);
        canvasCtx.fill();
    }
}

function drawCurrentScore() {

    scoreCtx.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height / 2 - 1);
    scoreCtx.fillText(score, 10, 70);
}

function calculateMovementSnake() {

    if (direction == 'right') {
        head.currentX += radius * 2;
    } else if (direction == 'left') {
        head.currentX -= radius * 2;
    }

    if (direction == 'up') {
        head.currentY += radius * 2;
    } else if (direction == 'down') {
        head.currentY -= radius * 2;
    }

    addNewElementToSnake()
}

function checkCollision() {

    //check if the snake hit a wall
    if (head.currentX >= maxWidth || head.currentX <= 0 || head.currentY >= maxHeight || head.currentY <= 0) {

        endGame()
    }

    //check if the snake hit itself
    if (snake.length > 0) {
        for (var i = 1; i < snake.length; i++) {

            var isCollisionBody = (head.currentX == snake[i].posX && snake[i].posY == head.currentY);

            if (isCollisionBody) {

                endGame();
            }
        }
    }
}

function endGame() {

    //check if the score is better than the best score in local storage
    if (localStorage.getItem("bestScore") == 'undefined' || score > parseInt(localStorage.getItem("bestScore"))) {
        var resultScore = "" + score;
        localStorage.setItem("bestScore", resultScore);
    }

    //stop set interval function to end the game
    clearInterval(game);
}

function checkIsEaten() {

    var isFoodEaten = Math.pow((head.currentX - currentFood.x), 2) +
    Math.pow((currentFood.y - head.currentY), 2) <= Math.pow((radius +
    foodRadius), 2);

    if (isFoodEaten) {
        isEaten = true;
    }
}

function generateFood() {

    //doesnt work with variable foodRadius for some reason, so I had just to use 5 instead
    //the code is made this way so the food is not generated on canva' walls, howeve still doesn't work properly for some reason
    var x = Math.floor((Math.random() * (maxWidth - 5 + 1)) + 5);
    var y = Math.floor((Math.random() * (maxHeight - 5 + 1)) + 5);

    var food = { x: x, y: y };

    //check if new food is generated within snake body
    //if so a new food will be generated at new position
    for (var item in snake) {
        if (Math.pow((snake[item].posX - food.x), 2) + Math.pow((food.y - snake[item].posY), 2) <= Math.pow((radius + foodRadius), 2)) {
            food = generateFood();
        }
    }
    return food;
}

function addNewElementToSnake() {

    var removedElement = snake.pop();
    var newElement = {};
    newElement.posX = head.currentX;
    newElement.posY = head.currentY;
    snake.unshift(newElement);
}

function moveSnake(e) {
    if (e.keyCode == 39 && direction != 'left') {
        direction = 'right';
    } else if (e.keyCode == 37 && direction != 'right') {
        direction = 'left';
    } else if (e.keyCode == 38 && direction != 'up') {
        direction = 'down';
    } else if (e.keyCode == 40 && direction != 'down') {
        direction = 'up';
    }
}