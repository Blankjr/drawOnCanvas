var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function clearDrawing() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawBackground();
  drawBorder();
}
  function drawPolygon() {
       var canvas = document.getElementById('canvasbox');
       if (canvas.getContext) {
           var objctx = canvas.getContext('2d');
           //------first smiley-----------
           // draw the first circle
           objctx.arc(50, 50, 20, 0, 360, true);
           // create Linear gradient fill style
           var grd = objctx.createLinearGradient(40, 40, 50, 75);
           grd.addColorStop(0, '#F9FF00');
           grd.addColorStop(1, '#E0C000');
           // Set the fill style
           objctx.fillStyle = grd;
           objctx.fill();
           // Create others circles
           objctx.beginPath();
           objctx.arc(44, 45, 4, 0, 360, true);
           objctx.fillStyle = "#ffffff";
           objctx.fill();

           objctx.beginPath();
           objctx.arc(44, 45, 2, 0, 360, true);
           objctx.fillStyle = "#000000";
           objctx.fill();


           objctx.beginPath();
           objctx.arc(58, 45, 4, 0, 360, true);
           objctx.fillStyle = "#ffffff";
           objctx.fill();

           objctx.beginPath();
           objctx.arc(58, 45, 2, 0, 360, true);
           objctx.fillStyle = "#000000";
           objctx.fill();
           objctx.beginPath();
           objctx.arc(50, 55, 10, 0, Math.PI, false);
           objctx.stroke();

           //------second smiley-----------
           objctx.beginPath();
           objctx.arc(100, 50, 20, 0, 360, true);
           var grd = objctx.createLinearGradient(40, 40, 50, 75);
           grd.addColorStop(0, '#F9FF00');
           grd.addColorStop(1, '#E0C000');
           objctx.fillStyle = grd;
           objctx.fill();

           objctx.beginPath();
           objctx.arc(94, 45, 4, 0, 360, true);
           objctx.fillStyle = "#000000";
           objctx.fill();

           objctx.beginPath();
           objctx.arc(106, 45, 4, 0, 360, true);
           objctx.fillStyle = "#000000";
           objctx.fill();

           objctx.beginPath();
           objctx.arc(100, 62, 10, 0, Math.PI, true);
           objctx.stroke();
         }
}
