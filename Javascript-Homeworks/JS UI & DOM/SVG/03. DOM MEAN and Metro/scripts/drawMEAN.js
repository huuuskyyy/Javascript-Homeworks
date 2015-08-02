function drawMEAN() {
    var circle,
        path,
        text;

    circle = drawCircle('180', '100', '75', '#4F4D46');
    svg.appendChild(circle);
    path = drawPath('M 180 100 V 50 Q 150 85 155 108', '#3EC732')
    svg.appendChild(path);
    path = drawPath('M 180 100 V 50 Q 210 85 205 108', 'green')
    svg.appendChild(path);

    circle = drawCircle('180', '175', '75', '#000000');
    svg.appendChild(circle);
    text = drawText('120', '175', 'express', 'white', 'express');
    svg.appendChild(text);

    circle = drawCircle('180', '250', '75', '#D42629');
    svg.appendChild(circle);
    path = drawPath('M 155 270 L 180 210 L 180 230 L 165 270 Z', '#D5DBD5')
    svg.appendChild(path);
    path = drawPath('M 205 270 L 180 210 L 180 230 L 195 270 Z', 'A4A8A3')
    svg.appendChild(path);
    path = drawPath('M 145 270 L 140 220 L 180 200 L 220 220 L 215 270 L 210 270 L 215 222 L 180 205 L 145 223 L 150 270', 'A4A8A3')
    svg.appendChild(path);

    circle = drawCircle('180', '325', '75', '#84C944');
    svg.appendChild(circle);
    image = drawImage('115', '275', '130', '90', 'pics/node.png');
    svg.appendChild(image);

    text = drawText('35', '110', 'M', '#4F4D46', 'letter');
    svg.appendChild(text);
    text = drawText('35', '185', 'E', '#000000', 'letter');
    svg.appendChild(text);
    text = drawText('35', '260', 'A', '#D42629', 'letter');
    svg.appendChild(text);
    text = drawText('35', '335', 'N', '#92D158', 'letter');
    svg.appendChild(text);

    //<circle cx="180" cy="100" r="75" fill="#4F4D46" />
    //    <path fill="#3EC732" d="M 180 100 V 50 Q 150 85 155 108" />
    //    <path fill="green" d="M 180 100 V 50 Q 210 85 205 108" />

    //    <circle cx="180" cy="175" r="75" fill="#000000" />
    //    <text x="180" y="175" font-size="37" font-family="Arial" text-anchor="middle" fill="white">express</text>

    //    <circle cx="180" cy="250" r="75" fill="#D42629" />
    //    <path d="M 155 270 L 180 210 L 180 230 L 165 270 Z " fill="#D5DBD5" />
    //    <path d="M 205 270 L 180 210 L 180 230 L 195 270 Z " fill="#A4A8A3" />
    //    <path d="M 145 270 L 140 220 L 180 200 L 220 220 L 215 270 L 210 270 L 215 222 L 180 205 L 145 223 L 150 270" fill="#A4A8A3" stroke="none" />

    //    <circle cx="180" cy="325" r="75" fill="#84C944" />
    //    <image xlink:href="node.png" x="115" y="275" width="130" height="90" />

    //    <text class="letter" x="35" y="110"  fill="#4F4D46">M</text>
    //    <text class="letter" x="35" y="185"  fill="#000000">E</text>
    //    <text class="letter" x="35" y="260"  fill="#D42629">A</text>
    //    <text class="letter" x="35" y="335"  fill="#92D158">N</text>
}