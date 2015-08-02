function drawTelerik() {
    var paper = Raphael(10, 10, 350, 150);

    var rect = paper.rect(0, 0, paper.width, paper.height);
    rect.attr({
        stroke: '#E0FFA3',
        'stroke-width': 8
    });

    var headerTelerik = paper.text(180, 70, 'Telerik');
    headerTelerik.attr({
        'font-size': 60,
        fill: '#282828',
        'font-weight': 'bold'
    });

    var originalSymbol = paper.text(283, 65, '\u00ae');
    originalSymbol.attr({
        'font-size': 17,
        fill: '#282828'
    });

    var slogan = paper.text(200, 110, 'Develop experices');
    slogan.attr({
        'font-size': 25,
        fill: '#282828'
    });

    var logo = paper.path('M20, 50L35, 35L65, 75L45, 95L28, 75L60 35L75 50');
    logo.attr({
        stroke: '#5CE600',
        'stroke-width': 10

    });
}