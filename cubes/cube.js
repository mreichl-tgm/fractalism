function drawCube(size, split, depth) {
    var material = new THREE.MeshBasicMaterial( { wireframe: true } );

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