var camera, controls, scene, renderer;
var material, light;

var container = document.getElementById("container");
var inputSize = document.getElementById("size");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");

var firstInit = true;

function init() {
    if (!firstInit) container.removeChild(renderer.domElement);
    else firstInit = false;

    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);
    // scene
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 5;
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    // camera control
    controls = new THREE.TrackballControls( camera, container );
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
    container.appendChild(renderer.domElement);
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