function drawRect(x, y, width, height, fill, id) {
    
    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y',y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fill);
    rect.setAttribute('id', id);
    return rect
}

function drawText( x, y, value, fill, family) {

    var text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', x);
    text.setAttribute('y',y);
    text.textContent = value;
    text.setAttribute('fill', fill);
    text.setAttribute('class', family);
    return text
}

function drawImage(x, y, width, height, href) {

    var image = document.createElementNS(svgNS, 'image');
    image.setAttribute('x', x);
    image.setAttribute('y', y);
    image.setAttribute('width', width);
    image.setAttribute('height', height);
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
    return image;
}

function drawPath(d, fill) {

    var path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', fill);
    console.log(path.fill);
    return path;
}

function drawCircle(cx, cy, r, fill) {

    var circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', fill);
    return circle;
}