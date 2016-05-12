var camera, controls, scene, renderer;
var material;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, document.body.clientWidth / document.body.clientHeight, 1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.body.clientWidth, document.body.clientHeight);

    controls = new THREE.TrackballControls( camera );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [ 65, 83, 68 ];

    controls.addEventListener( 'change', render );

    material = new THREE.MeshBasicMaterial( { wireframe: true } );
    drawCube(0, 0, 0, 4, 2, 4);

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


function drawCube(x, y, z, size, split, depth) {
    var geometry = new THREE.BoxGeometry( size, size, size );
    var cube = new THREE.Mesh( geometry, material );
    x = cube.position.x = x;
    y = cube.position.y = y;
    z = cube.position.z = z;
    scene.add(cube);
    depth-=1;
    if (depth > 0) {
        drawCube(x + 3*size/split/2, y, z, size/split, split, depth);
        drawCube(x - 3*size/split/2, y, z, size/split, split, depth);
        drawCube(x, y + 3*size/split/2, z, size/split, split, depth);
        drawCube(x, y - 3*size/split/2, z, size/split, split, depth);
        drawCube(x, y, z + 3*size/split/2, size/split, split, depth);
        drawCube(x, y, z - 3*size/split/2, size/split, split, depth);
    }
}

init();
animate();