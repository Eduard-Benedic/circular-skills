import html5 from '../images/html.png'
import javascript from '../images/javascript.png';
import jquery from '../images/jquery.png';
import modx from '../images/modx.png';
import vue from '../images/vue.png';
import webpack from '../images/webpack.png'


var technologies = [html5, jquery, javascript, modx, vue, webpack];
// var technologies = ['html5', 'jquery', 'javascript', 'modx', 'vue', 'webpack'];





const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;




for (var i = 0; i < technologies.length; i++) {
  (function (j) {
    var imgObj = new Image();
    imgObj.src = technologies[i];

    imgObj.addEventListener('load', () => {
      var coordinates = {
        x: canvas.width / 6 * j,
        y: canvas.height / 2 - 150
      }
      c.drawImage(imgObj, coordinates.x, coordinates.y, 150, 150);
      var imgPosition = {
        x: imgObj.offsetLeft + imgObj.width / 2,
        y: imgObj.offsetTop + imgObj.height / 2
      }


    }, false)

  }(i))

}

function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
  return (Math.min((maxW / imgW), (maxH / imgH)));
}


// // ===================== UTILITIES COLORS ===========================
// function intRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomColor(palette) {
//   return palette[Math.ceil(Math.random() * palette.length)]
// }


// // =============== COLOR PALETTE
// const autumnPalette = ['#F28705', '#D96704', '#A63F03', '#8C1C03', '#590202'];


// function Circle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.speed = 0.05;
//   this.radians = Math.random() * Math.PI * 2;
//   var distanceTo = intRange(70, 140);
//   this.distanceToCenter = {
//     x: distanceTo,
//     get y() {
//       return this.x
//     }
//   }
// }

// Circle.prototype.draw = function (lastPoint) {
//   c.beginPath();
//   c.lineWidth = this.radius;
//   c.strokeStyle = this.color;
//   c.moveTo(lastPoint.x, lastPoint.y);
//   c.lineTo(this.x, this.y)
//   c.stroke();
//   c.closePath();
// }

// Circle.prototype.update = function () {
//   const lastPoint = { x: this.x, y: this.y }

//   this.radians += this.speed;

//   this.x = window.innerWidth / 2 + Math.cos(this.radians) * this.distanceToCenter.x;
//   this.y = window.innerHeight / 2 + Math.sin(this.radians) * this.distanceToCenter.y;
//   this.draw(lastPoint);

// }


// let circles = []
// for (let i = 0; i < 10; i++) {
//   const radius = (Math.random() * 3) + 1;
//   const color = randomColor(autumnPalette);
//   circles.push(new Circle(canvas.width / 2, canvas.height / 2, radius, color));
// }

// function animate() {
//   requestAnimationFrame(animate);
//   c.fillStyle = 'rgba(255,255,255,0.08)';
//   c.fillRect(0, 0, canvas.width, canvas.height);
//   circles.forEach(circle => {
//     circle.update();
//   })
// }


// animate()

