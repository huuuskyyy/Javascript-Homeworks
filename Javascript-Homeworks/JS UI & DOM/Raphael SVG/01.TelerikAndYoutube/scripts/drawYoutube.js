function drawYoutube() {

    var paper = Raphael(10, 170, 300, 150);

    var rect = paper.rect(0, 0, 300, 150);
    rect.attr({
        stroke: '#DAEDF2',
        'stroke-width': 8
    });

    var backgroundRect = paper.rect(110, 10, 180, 130);
    backgroundRect.attr({
        fill: "#EF2929",
        r: 30
    });

    var whiteText = paper.text(200, 70, 'Tube');
    whiteText.attr({
        'font-size': 60,
        fill: 'white'
    });

    var grayText = paper.text(57, 70, 'You');
    grayText.attr({
        'font-size': 60,
        fill: '#4B4B4B',
    });
}