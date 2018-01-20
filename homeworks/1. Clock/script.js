var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");

var R = 150;

function Stripes() {
    var d, angle, pX, pY, qX, qY;

    var circle = new Path2D();
    circle.arc(R, R, R, 0, 2 * Math.PI);
    context.stroke(circle);
        
    var circle = new Path2D();
    circle.arc(R, R, R * 0.02, 0, 2 * Math.PI);
    context.stroke(circle);

    for(d = 0; d < 60; ++d) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pY += R;
        qX += R; qY += R;  

        var line = new Path2D();

        line.moveTo(pX, pY);
        line.lineTo(qX, qY);

        context.lineWidth = ((d % 5) == 0) ? 3 : 1; 
        context.stroke(line);
    }
}

function drawSticks() {
    var d, angle, pX, pY, qX = R, qY = R;

    // get current date
    var date = new Date(), hours, minutes, seconds;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    console.log(hours, minutes, seconds);

    // calc angles
    secondsAngle = Math.PI / 2 - (seconds / 60) * (2 * Math.PI);
    minutesAngle = Math.PI / 2 - (minutes / 60) * (2 * Math.PI);
    hoursAngle = Math.PI / 2 - ((hours % 12) / 12) *(2 * Math.PI);

    var secondspX = Math.cos(secondsAngle) * (R / 3 * 2.9) + R;
    var secondspY = -Math.sin(secondsAngle) * (R / 3 * 2.9) + R;

    var minutespX = Math.cos(minutesAngle) * (R / 3 * 2) + R;
    var minutespY = -Math.sin(minutesAngle) * (R / 3 * 2) + R;
    
    var hourspX = Math.cos(hoursAngle) * R / 2 + R;
    var hourspY = -Math.sin(hoursAngle) * R / 2 + R;

    // draw sticks
    var line = new Path2D();

    // draw seconds
    line.moveTo(qX, qY);
    line.lineTo(secondspX, secondspY);

    context.lineWidth = 1; 
    context.stroke(line);

    // draw minutes
    var line = new Path2D();
    line.moveTo(qX, qY);
    line.lineTo(minutespX, minutespY);

    context.lineWidth = 2; 
    context.stroke(line);

    // draw hours
    var line = new Path2D();
    line.moveTo(qX, qY);
    line.lineTo(hourspX, hourspY);

    context.lineWidth = 3; 
    context.stroke(line);   
}

function drawWatch()
{
    context.clearRect(0, 0, R * 2 + 1, R * 2 + 1);

    Stripes();

    drawSticks();

    setTimeout(drawWatch, 1000);
}

drawWatch();

