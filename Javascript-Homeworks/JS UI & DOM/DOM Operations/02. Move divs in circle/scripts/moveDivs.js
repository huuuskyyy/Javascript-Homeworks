function moveDivs() {

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