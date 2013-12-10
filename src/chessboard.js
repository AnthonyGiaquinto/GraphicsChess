var ChessBoard = function( x, z ){
    THREE.Mesh.call( this, this.geometry, this.material );
    this.position.x = x;
    this.position.y = -24;
    this.position.z = z;
};

ChessBoard.prototype = Object.create(THREE.Mesh.prototype);
ChessBoard.prototype.geometry = new THREE.CubeGeometry( 400, 0.1, 400, 1, 1, 1 );
ChessBoard.prototype.texture = new THREE.ImageUtils.loadTexture( 'assets/textures/chessboard.jpg' );
ChessBoard.prototype.texture.minFilter = THREE.LinearFilter;
ChessBoard.prototype.texture.magFilter = THREE.LinearFilter;
ChessBoard.prototype.material = new THREE.MeshLambertMaterial(
  { color: 0xFFFFFF, map: ChessBoard.prototype.texture }
); 