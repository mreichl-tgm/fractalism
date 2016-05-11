var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function rad(n) { return n * Math.PI / 180.0; }

function calcSize(d, s) {
    var x = 0;
    for (var i = 0; i < d; i++) {
        x += (d-i);
    }
    return x * s / 2 * Math.PI;
}

function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

function drawTree (angle, split, depth, size) {
    canvas.width = calcSize(depth, size);
    canvas.height = calcSize(depth, size);

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
    context.stroke();
}

drawTree(90, 30, 20, 10);