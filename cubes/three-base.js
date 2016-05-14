var camera, controls, scene, renderer;
var material, light;

var container = document.getElementById("container");

var firstInit = true;

function init() {
    if (!firstInit) container.removeChild(renderer.domElement);
    else firstInit = false;
    // scene
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 5;
    // renderer
    renderer = new THREE.WebGLRenderer( {antialias: false } );
    renderer.setSize(container.clientWidth, container.clientHeight);
    // camera control
    controls = new THREE.TrackballControls( camera, container );
    controls.rotateSpeed = 1;
    controls.zoomSpeed = 2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [ 65, 83, 68 ];


    /* INVOCATIONS */
    drawCube();


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