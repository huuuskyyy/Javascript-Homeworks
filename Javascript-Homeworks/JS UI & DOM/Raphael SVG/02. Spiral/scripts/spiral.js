function spiral() {

    var paper = Raphael(10, 10, 200, 200);
    var degrees = 600;

    drawSpiral(100, 100, 0, 1.5);

    function drawSpiral(centerX, centerY, a, b) {

        for (var i = 0; i < degrees; i += 0.1) {

            var angle = 0.1 * i,
                x = centerX + (a + b * angle) * Math.cos(angle),
                y = centerY + (a + b * angle) * Math.sin(angle);

            var circle = paper.circle(x, y, 1);
        }
    }
}


