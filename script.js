var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function rad(n) { return n * Math.PI / 180.0; }

function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

function drawTree (angle, split, depth, size) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    context.fillStyle = "#FF0";

    var x1 = canvas.width / 2;
    var y1 = 0;

    function paint (x1, y1, angle, depth) {
        if (depth != 0){
            var x2 = x1 + (Math.cos(rad(angle)) * depth * size);
            var y2 = y1 + (Math.sin(rad(angle)) * depth * size);
            drawLine(x1, y1, x2, y2, depth);
            paint(x2, y2, angle - split, depth - 1);
            paint(x2, y2, angle + split, depth - 1);
        }
    }

    paint(x1, y1, angle, depth);
}

function init() {
    drawTree(90, 30, 20, 10);
    context.stroke();
}