function drawRect(x, y, width, height, fill) {
    
    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y',y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill',fill); 
    return rect
}

function drawText( x, y, value, fill) {
    
    var text = document.createElementNS(svgNS, 'text');;
    text.setAttribute('x', x);
    text.setAttribute('y',y);
    text.setAttribute('value', value);
    text.setAttribute('fill',fill); 
    return text
}