var ctx = document.getElementById('circularLoader').getContext('2d');
var al = 0;
var start = 4.72;
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;
var diff;
function progressSim(){


ctx.textAlign = "center";
ctx.font="28px monospace";
ctx.fillText(al+'%', canvasWidth*.52, canvasHeight*.5+5, canvasWidth+100);
ctx.beginPath();
ctx.arc(100, 100, 75, start, diff/10+start, false);
ctx.stroke();
if(al >= 100){
  clearTimeout(sim);
    // Add scripting here that will run when progress completes
}
al = al+1;
}
var sim = setInterval(progressSim, 50);
