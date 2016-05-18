/**
 * @author Markus Reichl
 * @version 2016-05-13
 * @licence GPLv3
 *
 * Creates a cube fractal where every cube has another cube attached on each side.
 * Content is fetched from 3 input fields with a specific id:
 *  - Split     A new cubes size is equal to size/split
 *  - Depth     Number of iterations
 *  - Size      Size of the first cube
 */

var inputSize = document.getElementById("size");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");
/**
 * Initializes cube drawing
 */
function drawCube() {
    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);
    
    var material = new THREE.MeshBasicMaterial( { wireframe: true } );
    /**
     * Draws a cube on each side of a given cube with a split amount of its size
     * @param x
     * @param y
     * @param z
     * @param size
     * @param depth
     */
    function paint(x, y, z, size, depth) {
        var cube = new THREE.Mesh( new THREE.BoxGeometry( size, size, size ), material );
        x = cube.position.x = x;
        y = cube.position.y = y;
        z = cube.position.z = z;
        scene.add(cube);

        var movement = size/2 + size/2/split;
        size /= split;
        depth--;

        if (depth > 0) {
            paint(x + movement, y, z, size, depth);
            paint(x - movement, y, z, size, depth);
            paint(x, y + movement, z, size, depth);
            paint(x, y - movement, z, size, depth);
            paint(x, y, z + movement, size, depth);
            paint(x, y, z - movement, size, depth);
        }
    }

    paint(0, 0, 0, size, depth);
}
/**
 * Fills input fields with working random values
 */
function setRandom() {
    inputSize.value = Math.floor((Math.random() * 10) + 1);
    inputSplit.value = Math.floor((Math.random() * 5) + 1);
    inputDepth.value = Math.floor((Math.random() * 5) + 1);

    init();
}