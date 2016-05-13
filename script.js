var container = document.getElementById("container");

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function init() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;


    /* INVOCATIONS */
    drawTree();


    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#fff";
    context.stroke();
}