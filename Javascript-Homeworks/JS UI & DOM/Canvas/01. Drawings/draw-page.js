var canvas = document.getElementById("the-canvas");
var canvasCtx = canvas.getContext("2d");

//HOUSE main part
canvasCtx.save();
canvasCtx.fillStyle = "#BA6359";
canvasCtx.fillRect(500, 200, 220, 180);
canvasCtx.lineWidth = 2;
canvasCtx.strokeRect(500, 200, 220, 180);
canvasCtx.restore();

//HOUSE windows
canvasCtx.fillStyle = "#000000";
canvasCtx.fillRect(520, 220, 40, 25);
canvasCtx.fillRect(562, 220, 40, 25);
canvasCtx.fillRect(520, 247, 40, 25);
canvasCtx.fillRect(562, 247, 40, 25);

canvasCtx.fillRect(618, 220, 40, 25);
canvasCtx.fillRect(660, 220, 40, 25);
canvasCtx.fillRect(618, 247, 40, 25);
canvasCtx.fillRect(660, 247, 40, 25);

canvasCtx.fillRect(618, 288, 40, 25);
canvasCtx.fillRect(660, 288, 40, 25);
canvasCtx.fillRect(618, 315, 40, 25);
canvasCtx.fillRect(660, 315, 40, 25);

//HOUSE door sides
canvasCtx.beginPath();
canvasCtx.lineWidth = 2;
canvasCtx.moveTo(525, 380);
canvasCtx.lineTo(525, 320);
canvasCtx.stroke();

canvasCtx.moveTo(600, 380);
canvasCtx.lineTo(600, 320);
canvasCtx.stroke();

//HOUSE door top curve
canvasCtx.beginPath();
canvasCtx.moveTo(525, 320);
canvasCtx.bezierCurveTo(525, 288, 600, 288, 600, 320);
canvasCtx.stroke();

//HOUSE door middle line
canvasCtx.beginPath();
canvasCtx.moveTo(562, 296);
canvasCtx.lineTo(562, 380);
canvasCtx.stroke();

//HOUSE door holders
canvasCtx.beginPath();
canvasCtx.arc(572, 360, 3, 0, 2 * Math.PI);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.arc(552, 360, 3, 0, 2 * Math.PI);
canvasCtx.stroke();

//HOUSE roof
canvasCtx.beginPath();
canvasCtx.moveTo(500, 200);
canvasCtx.lineTo(610, 90);
canvasCtx.lineTo(720, 200);
canvasCtx.closePath();
canvasCtx.fillStyle = "#BA6359";
canvasCtx.fill();
canvasCtx.stroke();

//HOUSE chimney sides
canvasCtx.beginPath();
canvasCtx.lineWidth = 3;
canvasCtx.moveTo(660, 170);
canvasCtx.lineTo(660, 100);
canvasCtx.lineTo(680, 100);
canvasCtx.lineTo(680, 170);
canvasCtx.stroke();
canvasCtx.moveTo(660, 170);
canvasCtx.fill();

//HOUSE chimney top
canvasCtx.save();
canvasCtx.lineWidth = 6;
canvasCtx.scale(1, 0.2);
canvasCtx.beginPath();
canvasCtx.arc(670, 500, 10, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();

canvasCtx.strokeStyle = "#56B1BF";
canvasCtx.fillStyle = "#90CAD7";

//BIKE back tyre
canvasCtx.beginPath();
canvasCtx.lineWidth = 2;
canvasCtx.arc(100, 500, 50, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();

//BIKE front tyre
canvasCtx.beginPath();
canvasCtx.arc(340, 500, 50, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();

//BIKE skeleton
canvasCtx.beginPath();
canvasCtx.moveTo(100, 500);
canvasCtx.lineTo(170, 430);
canvasCtx.lineTo(320, 430);
canvasCtx.lineTo(190, 500);
canvasCtx.closePath();
canvasCtx.stroke();

//BIKE pedal wheel
canvasCtx.beginPath();
canvasCtx.arc(190, 500, 15, 0, 2 * Math.PI);
canvasCtx.stroke();

//BIKE pedals to seat line
canvasCtx.beginPath();
canvasCtx.moveTo(190, 500);
canvasCtx.lineTo(155, 390);
canvasCtx.stroke();

//BIKE pedals
canvasCtx.beginPath();
canvasCtx.moveTo(182, 488);
canvasCtx.lineTo(172, 477);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.moveTo(198, 512);
canvasCtx.lineTo(208, 523);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.moveTo(135, 390);
canvasCtx.lineTo(175, 390);
canvasCtx.stroke();

//BIKE front line
canvasCtx.beginPath();
canvasCtx.moveTo(340, 500);
canvasCtx.lineTo(305, 370);
canvasCtx.lineTo(325, 335);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.moveTo(305, 370);
canvasCtx.lineTo(265, 380);
canvasCtx.stroke();

//MAN head
canvasCtx.beginPath();
canvasCtx.arc(175, 270, 50, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();

canvasCtx.strokeStyle = "#398D8F";
canvasCtx.fillStyle = "#398D8F";

//MAN eyes

//left eye
canvasCtx.save();
canvasCtx.scale(1, 0.6);
canvasCtx.beginPath();
canvasCtx.arc(150, 425, 10, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.restore();

//right eye
canvasCtx.save();
canvasCtx.scale(1, 0.6);
canvasCtx.beginPath();
canvasCtx.arc(190, 425, 10, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.restore();

//left iris
canvasCtx.save();
canvasCtx.scale(0.6, 1);
canvasCtx.beginPath();
canvasCtx.arc(245, 255, 5, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();

//right iris
canvasCtx.save();
canvasCtx.scale(0.6, 1);
canvasCtx.beginPath();
canvasCtx.arc(312, 255, 5, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();

//MAN nose
canvasCtx.beginPath();
canvasCtx.moveTo(170, 255);
canvasCtx.lineTo(160, 280);
canvasCtx.lineTo(170, 280);
canvasCtx.stroke();

//MAN mouth
canvasCtx.save();
canvasCtx.lineWidth = 3;
canvasCtx.rotate(10 * Math.PI / 180);
canvasCtx.scale(1, 0.3);
canvasCtx.beginPath();
canvasCtx.arc(210, 880, 20, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.restore();

canvasCtx.strokeStyle = "#000000";
canvasCtx.fillStyle = "#396693";

//MAN hat

//base
canvasCtx.save();
canvasCtx.lineWidth = 6;
canvasCtx.scale(1, 0.2);
canvasCtx.beginPath();
canvasCtx.arc(175, 1150, 60, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();

//cilinder sides
canvasCtx.beginPath();
canvasCtx.moveTo(150, 170);
canvasCtx.lineTo(150, 220);
canvasCtx.lineTo(210, 220);
canvasCtx.lineTo(210, 170);
canvasCtx.stroke();
canvasCtx.lineTo(150, 170);
canvasCtx.fill();

//top cilinder
canvasCtx.save();
canvasCtx.scale(1, 0.4);
canvasCtx.beginPath();
canvasCtx.arc(180, 420, 30, 0, 2 * Math.PI);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();

//bottom cilinder
canvasCtx.save();
canvasCtx.scale(1, 0.4);
canvasCtx.beginPath();
canvasCtx.arc(180, 550, 30, 0, 2 * Math.PI / 2);
canvasCtx.stroke();
canvasCtx.fill();
canvasCtx.restore();