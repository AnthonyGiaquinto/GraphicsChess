/*
/
/ chessboard.js
/ contains the chessboard object created similarly to the road
/ in the bicycle program
/
*/

var BOARDWIDTH = 400;

var ChessBoard = function( x, z ){
    THREE.Mesh.call( this, this.geometry, this.material );
    this.position.x = x;
    this.position.y = -35;
    this.position.z = z;
};

ChessBoard.prototype = Object.create(THREE.Mesh.prototype);
ChessBoard.prototype.geometry = new THREE.CubeGeometry( BOARDWIDTH, 10.0, BOARDWIDTH, 1, 1, 1 );
ChessBoard.prototype.texture = new THREE.ImageUtils.loadTexture( 'assets/textures/chessboard.jpg' );
ChessBoard.prototype.texture.minFilter = THREE.LinearFilter;
ChessBoard.prototype.texture.magFilter = THREE.LinearFilter;
ChessBoard.prototype.material = new THREE.MeshLambertMaterial(
  { map: ChessBoard.prototype.texture }
); 