var camera, controls, scene, renderer;
var material, light;

var inputSize = document.getElementById("size");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");

function init() {
    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);
    // scene
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera(60, document.body.clientWidth / document.body.clientHeight, 1, 1000);
    camera.position.z = 5;
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.body.clientWidth, document.body.clientHeight - 150);
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


    /* INVOCATIONS */
    drawCube(size, split, depth);


    // final rendering
    document.body.appendChild(renderer.domElement);
    render();
    animate();
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
}

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}

function setRandom() {
    inputSize.value = Math.floor((Math.random() * 20) + 1);
    inputSplit.value = Math.floor((Math.random() * 20) + 1);
    inputDepth.value = Math.floor((Math.random() * 6) + 1);

    init();
}