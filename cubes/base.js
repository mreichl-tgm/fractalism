var camera, controls, scene, renderer;
var material, light;

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

init();
animate();