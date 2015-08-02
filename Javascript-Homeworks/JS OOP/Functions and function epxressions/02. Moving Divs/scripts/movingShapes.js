/// <reference path="reference.js" />
var movingShapes = (function () {

    function moveRectangleDivs() {

        var divs = document.getElementsByTagName('div');

        var width = 250;
        var height = 250;
        var direction = 'left';
        var x = -1;
        var y = 0;

        var rectangularMove = setInterval(function () {

            if (direction == 'left') {
                width--;
            } else if (direction == 'up') {
                height--;
            } else if (direction == 'right') {
                width++;
            } else if (direction == 'down') {
                height++;
            }

            for (var i = 0; i < divs.length; i++) {
                var strLeftPixels = divs[i].style.left;
                var lengthNumber = parseInt(strLeftPixels.substring(0, strLeftPixels.length - 2));
                var strTopPixels = divs[i].style.top;
                var heightNumber = parseInt(strTopPixels.substring(0, strTopPixels.length - 2));

                divs[i].style.left = (lengthNumber + x) + 'px';
                divs[i].style.top = (heightNumber + y) + 'px';;
            }

            if (width < 0 && direction == 'left') {
                direction = 'up';
                x = 0;
                y = -1;
            } else if (height < 0 && direction == 'up') {
                direction = 'right';
                x = 1;
                y = 0;
            } else if (width > 250 && direction == 'right') {
                direction = 'down';
                x = 0;
                y = 1;
            } else if (height > 250 && direction == 'down') {
                direction = 'left';
                x = -1;
                y = 0;
            }

        }, 1);
    }

    function moveCircularDivs() {

        var divs = document.getElementsByTagName('div');

        var angle = 0;
        var centerX = 700;
        var centerY = 300;
        var radius = 70;

        var circularMove = setInterval(function () {

            angle += 0.05;

            for (var i = 0; i < divs.length; i++) {
                angle += (i * 36);
                divs[i].style.left = ((centerX + (radius * (i + 1)) * Math.cos(angle)) + 'px');
                divs[i].style.top = ((centerY + (radius * (i + 1)) * Math.sin(angle)) + 'px');
                angle -= (i * 36);
            }

        }, 100);

    }

    function createDiv() {

        var div = document.createElement('div');
        var innerStrong = document.createElement('strong');
        innerStrong.innerHTML = 'div';
        div.appendChild(innerStrong);

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.backgroundColor = randomColor();
        div.style.color = randomColor();
        div.style.display = 'inline-block';
        div.style.position = 'absolute';
        div.style.top = getRandomPixelsInRange(200, 400);
        div.style.left = getRandomPixelsInRange(200, 800);
        div.style.borderColor = randomColor();
        div.style.borderWidth = '5px';
        div.style.borderStyle = 'solid';

        document.body.appendChild(div);
    }

    function getRandomPixelsInRange(min, max) {

        var pixels = Math.floor(Math.random() * (max - min + 1)) + min;
        pixels += "px";

        return pixels;
    }

    function randomColor() {

        var colors = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
            var pos = Math.floor(Math.random() * 16);
            color += colors[pos];
        }

        return color
    }

    return {

        createDiv: createDiv,
        moveCircularDivs: moveCircularDivs,
        moveRectangleDivs: moveRectangleDivs
    };

})();