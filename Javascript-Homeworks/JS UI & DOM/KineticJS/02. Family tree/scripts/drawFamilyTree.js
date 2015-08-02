var startPosition = findRootPosition();
var family = [];
var childrenToCheck = [];
var isFather = false;
var isMother = false;
 

for (var item in familyMembers) {
    family.push(familyMembers[item]);
}

var height = 150 * family.length;
var width = screen.width;

var startWidth = width / 2;
var startHeight = 0;
var rectWidth = 150;

var stage = new Kinetic.Stage({
    container: 'canvas-container',
    width: width,
    height: height
});
var layer = new Kinetic.Layer();

for (var i = 0; i < family.length; i++) {

    var fatherLineX;
    var fatherLineY;
    var motherLineX;
    var motherLineY;

    checkIfChildrenIsParent();

    fatherLineX = startWidth + (rectWidth / 2);
    fatherLineY = startHeight + 20;

    drawFather()
   
    motherLineX = startWidth - (rectWidth / 2);
    motherLineY = startHeight + 20;

    drawMother();

    isFather = false;
    isMother = false;

    var allChildren = family[i]['children'];
    startHeight += 50;

    drawChildren()
   
    stage.add(layer);

    startHeight += 50;
}

function checkIfChildrenIsParent() {

    if (childrenToCheck.indexOf(family[i]['father']) != -1 || childrenToCheck.indexOf(family[i]['mother']) != -1) {

        startHeight -= 50;
        if (childrenToCheck.indexOf(family[i]['father']) != -1) {

            isFather = true;
        }
        if (childrenToCheck.indexOf(family[i]['mother']) != -1) {
            isMother = true;
        }
    }

}

function drawFather() {

    if (!isFather) {

        var rectFather = new Kinetic.Rect({
            x: startWidth + 5,
            y: startHeight,
            width: rectWidth,
            height: 20,
            stroke: '#CCCCCC',
            cornerRadius: 10
        });

        var textFather = new Kinetic.Text({
            x: startWidth + 10,
            y: startHeight + 5,
            text: family[i]['father'],
            fill: 'black'
        });

        layer.add(rectFather, textFather);
    }
}

function drawMother() {

    if (!isMother) {
        if (isFather) {
            startWidth += 50;
        }

        motherLineX = startWidth - (rectWidth / 2);

        var rectMother = new Kinetic.Rect({
            x: startWidth - rectWidth - 5,
            y: startHeight,
            width: rectWidth,
            height: 20,
            stroke: '#CCCCCC',
            cornerRadius: 10
        });

        var textMother = new Kinetic.Text({
            x: startWidth - rectWidth,
            y: startHeight + 5,
            text: family[i]['mother'],
            fill: 'black'
        });

        if (isFather) {
            startWidth -= 50;
        }

        layer.add(rectMother, textMother);
    }
}
function drawChildren() {

    for (var j = 0; j < allChildren.length; j++) {

        childrenToCheck.push(allChildren[j]);
        var tempStart = startWidth - (rectWidth * (allChildren.length - j));


        if (j != 0) {
            tempStart += 200;
        }

        var childX = tempStart + rectWidth / 2;
        var childY = startHeight;

        var child = new Kinetic.Rect({
            x: tempStart,
            y: startHeight,
            width: rectWidth,
            height: 20,
            stroke: '#CCCCCC',
            cornerRadius: 10
        });

        var textChild = new Kinetic.Text({
            x: tempStart + 10,
            y: startHeight + 5,
            text: allChildren[j],
            fill: 'black'
        });

        var line = new Kinetic.Line({
            points: [fatherLineX, fatherLineY, childX, childY, motherLineX, motherLineY],
            stroke: 'red'
        });

        layer.add(child, textChild, line);
    }
}