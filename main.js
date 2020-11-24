document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D contexte
var ctx = canvas.getContext('2d');


// last known position
var pos = { x: 0, y: 0 };

//window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function drawBorder() {
	var canvasWidth = ctx.canvas.width;
	var canvasHeight = ctx.canvas.height;
	ctx.beginPath();
	ctx.lineWidth ="10";
	ctx.strokeStyle = "brown";
	ctx.rect(0,0, canvasWidth, canvasHeight);
	ctx.stroke();
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;
  //Start
  ctx.beginPath(); 

  ctx.lineWidth = 5;
  //rounded ends of line for appearance
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to
  ctx.stroke(); // draw it NOW!
}
