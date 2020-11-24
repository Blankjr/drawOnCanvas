var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var background = document.getElementById('background')

function drawBackground() {
    ctx.drawImage(background, 0, 0);
    drawBorder();
}
