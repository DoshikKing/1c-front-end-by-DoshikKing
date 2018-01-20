var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");

var circle = new Path2D();
var R1 = 150;
circle.arc(R1, R1, R1, 0, 2 * Math.PI);
context.stroke(circle);

function Stripes() {
    var R = R1, d, angle, pX, pY, qX, qY
    var d, angle, pX, pY, qX, qY
    for(d = 0; d < 60; ++d) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pY += R;
        qX += R; qY += R;  

        var canvas = document.getElementById("sandbox");
        var context = canvas.getContext("2d");

        var line = new Path2D();

        line.moveTo(pX, pY);
        line.lineTo(qX, qY);

        context.lineWidth = ((d % 5) == 0) ? 3 : 1; 
        context.stroke(line);
    }
}

Stripes();

