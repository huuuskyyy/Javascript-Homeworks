
var Canvas = (function () {

    var cnv;
    var ctx

    function Canvas(selector) {
        this.selector = selector;
        cnv = document.querySelector(this.selector);
        ctx = cnv.getContext('2d');
    }
    
    Canvas.prototype = {
        drawRect: function drawRect(x, y, width, height) {

            ctx.beginPath();
            ctx.rect(x, y, width, height);
            ctx.closePath();
            ctx.stroke();
        },
        drawCircle: function drawCircle(x, y, radius) {

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        },
        drawLine: function drawLine(x1, y1, x2, y2) {

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    };

    return Canvas;
}());