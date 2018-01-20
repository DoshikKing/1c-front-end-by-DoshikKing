var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");

var circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);


function Stripes() {
    var R = 300 / 2, d, angle, pX, pY, qX, qY
    var d, angle, pX, pY, qX, qY
    for(d = 0; d < 60; ++d) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pY += R;
        qX += R; qY += R;  
    }
}

