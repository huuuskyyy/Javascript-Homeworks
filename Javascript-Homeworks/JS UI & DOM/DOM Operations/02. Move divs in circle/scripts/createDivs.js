function createDivs() {

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 5; i++) {

        var div = document.createElement('div');
        var innerStrong = document.createElement('strong');
        innerStrong.innerHTML = 'div';
        div.appendChild(innerStrong);
        div.style.width = getRandomPixelsInRange(20, 100);
        div.style.height = getRandomPixelsInRange(20, 100);
        div.style.backgroundColor = randomColor();
        div.style.color = randomColor();
        div.style.display = 'inline-block';
        div.style.position = 'absolute';
        div.style.top = getRandomPixelsInRange(200, 400);
        div.style.left = getRandomPixelsInRange(200, 800);
        div.style.borderRadius = getRandomPixelsInRange(1, 20);
        div.style.borderColor = randomColor();
        div.style.borderWidth = getRandomPixelsInRange(1, 20);
        div.style.borderStyle = 'solid';
        fragment.appendChild(div);
    }

    document.body.appendChild(fragment);
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