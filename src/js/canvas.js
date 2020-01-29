import html5 from '../images/html.png'
import javascript from '../images/javascript.png';
import jquery from '../images/jquery.png';
import modx from '../images/modx.png';
import vue from '../images/vue.png';
import webpack from '../images/webpack.png'








const canvas = document.querySelector('canvas');


const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

// =============== COLOR PALETTE =============

const autumnPalette = ['#F28705', '#D96704', '#A63F03', '#8C1C03', '#590202', '#3391A6', '#25594A', '#3FA663', '#2D7345', '#2D7345', '#F2CA50', '#D98E04'];
var technologies = [html5, jquery, javascript, modx, vue, webpack];




// ===================== UTILITIES COLORS ===========================
function intRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(palette) {
  return palette[Math.ceil(Math.random() * palette.length)]
}

var loaded = false;
for (var i = 0; i < technologies.length; i++) {
  (function (j) {
    var imgObj = new Image();
    imgObj.src = technologies[i];
    imgObj.addEventListener('load', () => {
      imgObj.classList.add(`img${j}`);
      document.querySelector('.grid-img').appendChild(imgObj)
      const getPosition = imgObj.getBoundingClientRect();
      const topImg = getPosition.top;
      const leftImg = getPosition.left;

      console.log({ topImg, leftImg })

      let circles = [];
      for (var i = 0; i < 25; i++) {
        const radius = (Math.random() * 3) + 1;
        const color = randomColor(autumnPalette);
        circles.push(new Circle(leftImg + imgObj.clientWidth / 2, topImg + imgObj.clientHeight / 2, radius, color));
      }
      var animate = function () {
        requestAnimationFrame(animate);
        c.fillStyle = 'rgba(255,255,255,0.09)';
        c.fillRect(0, 0, canvas.width, canvas.height);

        circles.forEach(circle => {
          circle.update();
        });

      }
      animate();

    }, false)

  }(i))
}





function Circle(x, y, radius, color) {

  this.radius = radius;
  this.color = color;
  this.speed = 0.01;
  this.distanceFromCenter = intRange(50, 120);
  this.x = x;
  this.y = y;
  this.radians = Math.random() * Math.PI * 2;
  this.lastPoint = {
    x: this.x,
    y: this.y
  }
}

Circle.prototype.draw = function (lastPoint) {
  c.beginPath();
  c.lineWidth = this.radius * 1.3;
  c.strokeStyle = this.color;
  c.moveTo(lastPoint.x, lastPoint.y);
  c.lineTo(this.x, this.y)
  c.stroke();
  c.closePath();
}

Circle.prototype.update = function () {
  const lastPoint = { x: this.x, y: this.y }
  this.radians += this.speed;
  this.x = this.lastPoint.x + Math.cos(this.radians) * this.distanceFromCenter;
  this.y = this.lastPoint.y + Math.sin(this.radians) * this.distanceFromCenter;
  this.draw(lastPoint);
}





