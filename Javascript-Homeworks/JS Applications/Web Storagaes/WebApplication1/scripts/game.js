/// <reference path="libs/underscore.js" />

function newGame() {

    generateNumber();

}

function checkInput() {

    var inputNumber = document.getElementById('user-input').value;
    var isValidInput = checkValidInput(inputNumber);
    if (isValidInput) {
        var bulls = 0;
        var cows = 0;
        var currentNumber = sessionStorage['digit'];
        sessionStorage['moves'] = parseInt(sessionStorage['moves']) + 1;

        for (var i = 0; i < currentNumber.length; i++) {

            if (currentNumber[i] === inputNumber[i]) {

                bulls++;
                continue;
            }
            else if (currentNumber.indexOf(inputNumber[i]) > -1) {
                cows++;
            }
        }

        if (bulls === 4) {
            processEndGame();
        }
        else {

            document.getElementById('display').innerHTML += "<br>" + "<a>" + inputNumber + "</a>" + " --> Cows = " + "<span>" + cows + "</span>" + " Bulls = " + "<span>" + bulls + "</span>";
            bulls = 0;
            cows = 0;
            document.getElementById('user-input').value = "";
        }
    }
    else {
        document.getElementById('user-input').value = "";
        alert('Invalid input. You must enter exactly four positive digits from 0 to 9 (no 0 at first position)');
    }
}

function processEndGame() {

    document.getElementById('display').innerHTML += "<br>" + "<span id='end-game'>Congratulations you found the number!!!</span>";
    document.getElementById('display').innerHTML += "<br>" + "<span>Click on the 'New number' button to generate new number</span>";
    var username = prompt("You won in " + sessionStorage['moves'] + " moves. Enter your username");
    localStorage[username] = sessionStorage['moves'];
    updateLeaderboard();
    bulls = 0;
    cows = 0;
    document.getElementById('user-input').value = "";

}
function checkValidInput(input) {

    if (input.length !== 4) {
        return false;
    }

    for (var i = 0; i < input.length; i++) {

        if (isNaN(input[i])) {
            return false;
        }
    }

    return true;
}


function showAnswer() {

    document.getElementById('display').innerHTML += "<br>" + "ANSWER ==> " + "<a>" + sessionStorage['digit'] + "</a>";
}

function generateNumber() {
    var NUMBER_OF_DIGITS = 4,
    i,
    generatedDigits = "",
    currentDigit,
    moves = 0;

    for (i = 0; i < NUMBER_OF_DIGITS; i += 1) {
        if (i === 0) {
            currentDigit = Math.round(Math.random() * (9 - 1) + 1);
            generatedDigits += "" + currentDigit;
            continue;
        }

        currentDigit = Math.round(Math.random() * 9);

        while (generatedDigits.indexOf(currentDigit) > -1) {
            currentDigit = Math.round(Math.random() * 9);
        }

        generatedDigits += "" + currentDigit;
    }

    sessionStorage['digit'] = generatedDigits;
    sessionStorage['moves'] = moves;
    updateLeaderboard();
}

function updateLeaderboard() {

    document.getElementById('scoreboard').innerHTML = "";

    var player,
        score,
        container = [];

    for (var i = 0; i < localStorage.length; i++) {
        player = localStorage.key(i);
        score = parseInt(localStorage[player]);
        container.push({
            name: player,
            score: score
        });
    }

    var sortedPlayers = _.sortBy(container, 'score');
    _.each(sortedPlayers, function (player) { document.getElementById('scoreboard').innerHTML += "<br>" + player.name + "  moves - " + player.score; })

}

generateNumber();
