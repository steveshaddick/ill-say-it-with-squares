import '../scss/app.scss';

import randomColor from 'randomcolor';
import { quintIn } from 'eases-jsnext';

let canvasWidth = 1500;
let canvasHeight = 1500;
let aspectRatio = canvasWidth / canvasHeight;

let halfCanvasWidth = canvasWidth / 2;
let halfCanvasHeight = canvasHeight / 2;

let last = 0;

let currentTime = 0;
let endSize = 0;
let endTime = 0;
let colour = 0;

function tick(timestamp) {
  const elapsed = timestamp - last;
  if (elapsed < 16) {
    window.requestAnimationFrame(tick);
    return;
  }
  last = timestamp;

  currentTime += elapsed;
  const elapsedAdjust = (elapsed > 24) ? elapsed / 16 : 1;

  const currentSize = quintIn(currentTime / endTime) * endSize;
  
  ctx.beginPath();
  ctx.moveTo(halfCanvasWidth, halfCanvasHeight);
  ctx.rect( halfCanvasWidth-currentSize/2, halfCanvasHeight-currentSize/2, currentSize,currentSize);
  ctx.fillStyle = `#${colour}`;
  ctx.fill();

  if (currentTime > endTime) {
    createSquare();
  }
  
  window.requestAnimationFrame(tick);

}

function createSquare() {
  const degrees = Math.random() * 360;
  ctx.translate(halfCanvasWidth, halfCanvasHeight);
  ctx.rotate(degrees*Math.PI/180);
  ctx.translate(-halfCanvasWidth, -halfCanvasHeight);
  currentTime = 0;
  endSize = Math.round(Math.random() * canvasWidth);
  endTime = (Math.random() * 1000) + 1000;
  colour = Date.now().toString(16);
  colour = colour.substr(colour.length - 6);
}

const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext('2d');
const main = (function() {
  // run!
  createSquare();
  window.requestAnimationFrame(tick);

})();
