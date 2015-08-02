//Added a few modules in order to cover the requirements
//Didn't make the whole game in modules, because it will take more time
//The idea with the modules for the other parts will be with the same logic

var snake = function (x, y) {
    var headObject = { currentX: x, currentY: y };
    var bodyObject = [];

    function head() {
        return headObject;
    };

    function body() {
        return bodyObject;
    }

    function addToBody(element) {
        bodyObject.push(element);
    }

    function removeFromBody(element) {
        bodyObject.pop(element);
    }

    return {
        head: head,
        body: body,
        addToBody: addToBody,
        removeFromBody: removeFromBody
    };
}(10, 10);

var food = function (x, y) {

    var currentCoordinates = { x: x, y: y }

    function position() {
        return currentCoordinates;
    }

    function changeCoordinates(newCoordinates) {
        currentCoordinates = newCoordinates;
    }

    return {
        position: position,
        changeCoordinates : changeCoordinates
    }

}();

var canvas = document.getElementById("the-canvas");

var gameConstants = function (sRadius, fdius, gameSpeed) {

    var snakeRadius = sRadius;
    var foodRadius = fdius;
    var speed = gameSpeed;
    var maxWidth = canvas.width;
    var maxHeight = canvas.height;

    function snakeRadius() {
        return snakeRadius;
    }

    function foodRadius() {
        return foodRadius;
    }

    function speed() {
        return speed;
    }

    function maxWidth() {
        return maxWidth;
    }

    function maxHeight() {
        return maxHeight;
    }

    return {
        snakeRadius: snakeRadius,
        foodRadius: foodRadius,
        speed: speed,
        maxWidth: maxWidth,
        maxHeight : maxHeight
    }

}(10, 5, 200);


var canvasCtx = canvas.getContext("2d");
var scoreCanvas = document.getElementById("score-canvas");
var scoreCtx = scoreCanvas.getContext("2d");
var highestScoreCanvas = document.getElementById('highest-score-canvas');
var highestScoreCtx = highestScoreCanvas.getContext('2d');
var segment = {};
var from = 0;
var to = 2 * Math.PI;
var direction = 'right';
var isEaten = false;
food.changeCoordinates(generateFood());
var score = 0;
var currentHighestScore = localStorage.getItem("currentHighestScore");

scoreCtx.font = "20pt Arial";

displayHighScore();

var game = setInterval(function () {

    checkIsEaten();
    
    if (isEaten) {
        food.changeCoordinates(generateFood());
        isEaten = false;
        segment = { posX: snake.head().currentX, posY: snake.head().currentY }; //generate and add new part to the snake
        snake.addToBody(segment);
        score++;
    }

    calculateMovementSnake();
    checkCollision();
    drawCurrentScore();
    drawSnake();
    drawFood();

}, gameConstants.speed);



function displayHighScore() {
    console.log(currentHighestScore);
    if (currentHighestScore != "undefined" || currentHighestScore != null) {

        var scoreText = "Highest score " + currentHighestScore;
        highestScoreCtx.font = 'italic 15pt Calibri';
        highestScoreCtx.fillText(scoreText, 10, scoreCanvas.height / 2 + 1);
    }
}

function drawFood() {

    canvasCtx.beginPath();
    canvasCtx.fillStyle = '#E04834';
    canvasCtx.arc(food.position().x, food.position().y, gameConstants.foodRadius, from, to);
    canvasCtx.fill();

}

function drawSnake() {
    
    //draw the head
    canvasCtx.clearRect(0, 0, gameConstants.maxWidth, gameConstants.maxHeight);
    canvasCtx.beginPath();
    canvasCtx.fillStyle = '#3487E0';
    canvasCtx.arc(snake.head().currentX, snake.head().currentY, gameConstants.snakeRadius, from, to);
    canvasCtx.fill();

    //draw each other of the snake parts
    for (var item in snake.body()) {
        canvasCtx.beginPath();
        canvasCtx.arc(snake.body()[item].posX, snake.body()[item].posY, gameConstants.snakeRadius,
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
        snake.head().currentX += gameConstants.snakeRadius * 2;
    } else if (direction == 'left') {
        snake.head().currentX -= gameConstants.snakeRadius * 2;
    }

    if (direction == 'up') {
        snake.head().currentY += gameConstants.snakeRadius * 2;
    } else if (direction == 'down') {
        snake.head().currentY -= gameConstants.snakeRadius * 2;
    }

    addNewElementToSnake()
}

function checkCollision() {

    //check if the snake hit a wall
    if (snake.head().currentX >= gameConstants.maxWidth || snake.head().currentX <= 0 || snake.head().currentY >= gameConstants.maxHeight || snake.head().currentY <= 0) {

        endGame()
    }

    //check if the snake hit itself
    if (snake.body().length > 0) {
        for (var i = 1; i < snake.body().length; i++) {

            var isCollisionBody = (snake.head().currentX == snake.body()[i].posX && snake.body()[i].posY == snake.head().currentY);

            if (isCollisionBody) {

                endGame();
            }
        }
    }
}

function endGame() {

    //check if the score is better than the best score in local storage
    if (localStorage.getItem("currentHighestScore") == 'undefined' || score > parseInt(localStorage.getItem("currentHighestScore"))
        || currentHighestScore === null) {
        var resultScore = "" + score;
        localStorage.setItem("currentHighestScore", resultScore);
    }

    //stop set interval function to end the game
    clearInterval(game);
}

function checkIsEaten() {

    var isFoodEaten = Math.pow((snake.head().currentX - food.position().x), 2) +
    Math.pow((food.position().y - snake.head().currentY), 2) <= Math.pow((gameConstants.snakeRadius +
    gameConstants.foodRadius), 2);

    if (isFoodEaten) {
        isEaten = true;
    }
}

function generateFood() {

    //doesnt work with variable foodRadius for some reason, so I had just to use 5 instead
    //the code is made this way so the food is not generated on canva' walls, howeve still doesn't work properly for some reason
    var x = Math.floor((Math.random() * (gameConstants.maxWidth - 5 + 1)) + 5);
    var y = Math.floor((Math.random() * (gameConstants.maxHeight - 5 + 1)) + 5);

    var food = { x: x, y: y };

    //check if new food is generated within snake body
    //if so a new food will be generated at new position
    for (var item in snake.body()) {
        if (Math.pow((snake.body()[item].posX - food.x), 2) + Math.pow((food.y - snake.body()[item].posY), 2) <= Math.pow((gameConstants.snakeRadius + gameConstants.foodRadius), 2)) {
            food = generateFood();
        }
    }
    return food;
}

function addNewElementToSnake() {

    var removedElement = snake.removeFromBody();
    var newElement = {};
    newElement.posX = snake.head().currentX;
    newElement.posY = snake.head().currentY;
    snake.body().unshift(newElement);
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