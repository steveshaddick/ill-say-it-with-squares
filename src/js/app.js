import '../scss/app.scss';

import randomColor from 'randomcolor';
import { cubicInOut, sineIn } from 'eases-jsnext';

let canvasWidth = 1500;
let canvasHeight = 600;
let aspectRatio = canvasWidth / canvasHeight;

let halfCanvasWidth = canvasWidth / 2;
let halfCanvasHeight = canvasHeight / 2;

let last = 0;

function tick(timestamp) {
  const elapsed = timestamp - last;
  if (elapsed < 16) {
    window.requestAnimationFrame(tick);
    return;
  }
  last = timestamp;
  const elapsedAdjust = (elapsed > 24) ? elapsed / 16 : 1;

  let gradColour = colour.replace(')', `,${_opacity})`);
  gradient.addColorStop(0, gradColour);
  gradient.addColorStop(1, colour2);
  
  ctx.beginPath();
  ctx.moveTo(_point1.x, _point1.y);
  ctx.lineTo(_point2.x, _point2.y);
  ctx.lineTo(_point3.x, _point3.y);
  ctx.lineTo(_point4.x, _point4.y);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  }
  
  window.requestAnimationFrame(tick);

}

function convertToDecimalTime(str) {
  const timeParts = str.split(':');
  return parseInt(timeParts[0]) + (parseInt(timeParts[1]) / 60);
}

const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext('2d');
const main = (function() {
  // run!
  window.requestAnimationFrame(tick);

})();
