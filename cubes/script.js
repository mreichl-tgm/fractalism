var camera, controls, scene, renderer;
var material;

function init() {
    // scene
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera(60, document.body.clientWidth / document.body.clientHeight, 1, 1000);
    camera.position.z = 5;
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    // camera control
    controls = new THREE.TrackballControls( camera );
    controls.rotateSpeed = 2;
    controls.zoomSpeed = 2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [ 65, 83, 68 ];
    controls.addEventListener( 'change', render );
    // material
    material = new THREE.MeshBasicMaterial( { wireframe: true } );


    /* INVOCATIONS */
    drawCube(3, 2, 4);


    // final rendering
    document.body.appendChild(renderer.domElement);
    render();
}

function animate() {

    requestAnimationFrame( animate );
    controls.update();

}

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}

function drawCube(size, split, depth) {
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

init();
animate();