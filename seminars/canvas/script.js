var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");

context.fillRect(50, 25, 50, 20);

var circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);
context.stroke(circle);