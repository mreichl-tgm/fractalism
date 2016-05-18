/**
 * @author Markus Reichl
 * @version 2016-05-13
 * @licence GPLv3
 *
 * Creates a tree fractal where 1 branch splits into 2 new branches
 * Content is fetched from 4 input fields with a specific id:
 *  - Angle     Angle between 2 branches
 *  - Split     Number of branches
 *  - Depth     Number of iterations
 *  - Size      Size of the first branch
 */

var inputAngle = document.getElementById("angle");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");
var inputSize = document.getElementById("size");
/**
 * Returns given number in radians
 * @param n
 * @return {number}
 */
function rad(n) { return n * Math.PI / 180.0; }
/**
 * Draws a line from [x1|y1] to [x2|y2]
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}
/**
 * Initializes tree painting
 */
function drawTree () {
    var angle = parseInt(inputAngle.value);
    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);

    var x1 = canvas.width / 2;
    var y1 = 0;
    var rotation = 90;

    if (split * depth > 31 && split > 2) if (!confirm("Site may crash!")) return;
    split += 1;
    /**
     * Paints our tree using 2 starting points and the current angle as rotation
     * @param x1
     * @param y1
     * @param rotation
     * @param depth
     */
    function paint (x1, y1, rotation, depth) {
        if (depth != 0) {
            var x2 = x1 + (Math.cos(rad(rotation)) * depth * size);
            var y2 = y1 + (Math.sin(rad(rotation)) * depth * size);
            drawLine(x1, y1, x2, y2, depth);

            for (var i = 1; i < split; i++) {
                paint(x2, y2, rotation - angle * split / 2 + angle * i, depth - 1);
            }
        }
    }

    paint(x1, y1, rotation, depth);
}
/**
 * Sets random values to input fields and redraws tree
 */
function setRandom() {
    inputAngle.value = Math.floor((Math.random() * 360));

    do {
        inputSplit.value = Math.floor((Math.random() * 6) + 2);
        inputDepth.value = Math.floor((Math.random() * 15) + 2);
    } while (inputDepth.value * inputSplit.value > 30);

    inputSize.value = Math.floor((Math.random() * inputDepth.value * inputSplit.value) + Math.random() * 20);

    init();
}