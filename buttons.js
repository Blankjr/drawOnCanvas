var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function clearDrawing() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawBackground();
  drawBorder();
}
