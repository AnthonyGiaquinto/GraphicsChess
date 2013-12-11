/*
/
/  chesspieces.js
/
/  main source for the project
/
/  renders chess pieces on the board
/  contains the dat.GUI user controls and functions implemented with these controls
/
*/

const PIECESCALE = 10;

const A_X = 14.75;
const B_X = 10.50;
const C_X = 6.25;
const D_X = 2.00;    // x positions of each file
const E_X = -2.25;
const F_X = -6.50;
const G_X = -10.75;
const H_X = -15.00;

const EIGHT_Z = 15.00;
const SEVEN_Z = 10.75;
const SIX_Z = 6.50;
const FIVE_Z = 2.25;   // z positions of each rank
const FOUR_Z = -2.00;
const THREE_Z = -6.25;
const TWO_Z = -10.5;
const ONE_Z = -14.75;

const INCR = 0.425;

var ChessPieces = function( loader ) {

    var self = this;
    
    this.position.x = 0;
    this.position.y = -20;
    this.scale.x = this.scale.y = this.scale.z = PIECESCALE;
    
    this.gameID = 'Enter Game ID';      // will be changed based on user input
    
    this.gameData = []; // Array containing the data parsed from the server
    this.gameState = {  // Object containing the state of the game
    'a1': null, 'b1': null, 'c1': null, 'd1': null, 'e1': null, 'f1': null, 'g1': null, 'h1': null,
    'a2': null, 'b2': null, 'c2': null, 'd2': null, 'e2': null, 'f2': null, 'g2': null, 'h2': null,
    'a3': null, 'b3': null, 'c3': null, 'd3': null, 'e3': null, 'f3': null, 'g3': null, 'h3': null,
    'a4': null, 'b4': null, 'c4': null, 'd4': null, 'e4': null, 'f4': null, 'g4': null, 'h4': null,
    'a5': null, 'b5': null, 'c5': null, 'd5': null, 'e5': null, 'f5': null, 'g5': null, 'h5': null,
    'a6': null, 'b6': null, 'c6': null, 'd6': null, 'e6': null, 'f6': null, 'g6': null, 'h6': null,
    'a7': null, 'b7': null, 'c7': null, 'd7': null, 'e7': null, 'f7': null, 'g7': null, 'h7': null,
    'a8': null, 'b8': null, 'c8': null, 'd8': null, 'e8': null, 'f8': null, 'g8': null, 'h8': null};
    
    this.currentZDistance = 0; // The z distance the piece must travel in the current animation
    this.currentXDistance = 0; // the x distance the piece must travel in the current animation
    this.currentStart = '';    // start position of the current animation
    this.currentEnd = '';      // end position of the current animation
    this.xIncr = 0; // the increment in the x direction during every animation frame
    this.zIncr = 0; // the increment in the z direction during every animation frame
	
	// White Pawns
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn1 ) {
    	self.wpawn1 = wpawn1;
        self.wpawn1.position.x = H_X;
        self.wpawn1.position.y = 0;
        self.wpawn1.position.z = TWO_Z;
        self.add( self.wpawn1 );
        self.gameState.h2 = self.wpawn1; // add to proper gameState position
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn2 ) {
    	self.wpawn2 = wpawn2;
        self.wpawn2.position.x = G_X;
        self.wpawn2.position.y = 0;
        self.wpawn2.position.z = TWO_Z;
        self.add( self.wpawn2 );
        self.gameState.g2 = self.wpawn2;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn3 ) {
    	self.wpawn3 = wpawn3;
        self.wpawn3.position.x = F_X;
        self.wpawn3.position.y = 0;
        self.wpawn3.position.z = TWO_Z;
        self.add( self.wpawn3 );
        self.gameState.f2 = self.wpawn3;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn4 ) {
    	self.wpawn4 = wpawn4;
        self.wpawn4.position.x = E_X;
        self.wpawn4.position.y = 0;
        self.wpawn4.position.z = TWO_Z;
        self.add( self.wpawn4 );
        self.gameState.e2 = self.wpawn4;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn5 ) {
    	self.wpawn5 = wpawn5;
        self.wpawn5.position.x = D_X;
        self.wpawn5.position.y = 0;
        self.wpawn5.position.z = TWO_Z;
        self.add( self.wpawn5 );
        self.gameState.d2 = self.wpawn5;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn6 ) {
    	self.wpawn6 = wpawn6;
        self.wpawn6.position.x = C_X;
        self.wpawn6.position.y = 0;
        self.wpawn6.position.z = TWO_Z;
        self.add( self.wpawn6 );
        self.gameState.c2 = self.wpawn6;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn7 ) {
    	self.wpawn7 = wpawn7;
        self.wpawn7.position.x = B_X;
        self.wpawn7.position.y = 0;
        self.wpawn7.position.z = TWO_Z;
        self.add( self.wpawn7 );
        self.gameState.b2 = self.wpawn7;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn8 ) {
    	self.wpawn8 = wpawn8;
        self.wpawn8.position.x = A_X;
        self.wpawn8.position.y = 0;
        self.wpawn8.position.z = TWO_Z;
        self.add( self.wpawn8 );
        self.gameState.a2 = self.wpawn8;
    } );
    
    // White Rooks
    loader.load( 'assets/models/rook.obj', 'assets/materials/wrook.mtl', function ( wrook1 ) {
    	self.wrook1 = wrook1;
        self.wrook1.position.x = H_X;
        self.wrook1.position.y = -0.75;
        self.wrook1.position.z = ONE_Z;
        self.add( self.wrook1 );
        self.gameState.h1 = self.wrook1;
    } );

    loader.load( 'assets/models/rook.obj', 'assets/materials/wrook.mtl', function ( wrook2 ) {
    	self.wrook2 = wrook2;
        self.wrook2.position.x = A_X;
        self.wrook2.position.y = -0.75;
        self.wrook2.position.z = ONE_Z;
        self.add( self.wrook2 );
        self.gameState.a1 = self.wrook2;
    } );
    
    // White Knights
    loader.load( 'assets/models/knight.obj', 'assets/materials/wknight.mtl', function ( wknight1 ) {
    	self.wknight1 = wknight1;
        self.wknight1.position.x = G_X;
        self.wknight1.position.y = 0;
        self.wknight1.position.z = ONE_Z;
        self.add( self.wknight1 );
        self.gameState.g1 = self.wknight1;
    } );
    
    loader.load( 'assets/models/knight.obj', 'assets/materials/wknight.mtl', function ( wknight2 ) {
    	self.wknight2 = wknight2;
        self.wknight2.position.x = B_X;
        self.wknight2.position.y = 0;
        self.wknight2.position.z = ONE_Z;
        self.add( self.wknight2 );
        self.gameState.b1 = self.wknight2;
    } );
    
    // White Bishops
    loader.load( 'assets/models/bishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop1 ) {
    	self.wbishop1 = wbishop1;
        self.wbishop1.position.x = F_X;
        self.wbishop1.position.y = -0.75;
        self.wbishop1.position.z = ONE_Z;
        self.add( self.wbishop1 );
        self.gameState.f1 = self.wbishop1;
    } );
    
    loader.load( 'assets/models/bishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop2 ) {
    	self.wbishop2 = wbishop2;
        self.wbishop2.position.x = C_X;
        self.wbishop2.position.y = -0.75;
        self.wbishop2.position.z = ONE_Z;
        self.add( self.wbishop2 );
        self.gameState.c1 = self.wbishop2;
    } );
    
    // White King
    loader.load( 'assets/models/king.obj', 'assets/materials/wking.mtl', function ( wking ) {
    	self.wking = wking;
        self.wking.position.x = E_X;
        self.wking.position.y = 4.5;
        self.wking.position.z = ONE_Z;
        self.add( self.wking );
        self.gameState.e1 = self.wking;
    } );
    
    // White Queen
    loader.load( 'assets/models/queen.obj', 'assets/materials/wqueen.mtl', function ( wqueen ) {
    	self.wqueen = wqueen;
        self.wqueen.position.x = D_X;
        self.wqueen.position.y = -1.5;
        self.wqueen.position.z = ONE_Z;
        self.add( self.wqueen );
        self.gameState.d1 = self.wqueen;
    } );
    
    // Black Pawns
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn1 ) {
    	self.bpawn1 = bpawn1;
        self.bpawn1.position.x = H_X;
        self.bpawn1.position.y = 0;
        self.bpawn1.position.z = SEVEN_Z;
        self.add( self.bpawn1 );
        self.gameState.h7 = self.bpawn1;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn2 ) {
    	self.bpawn2 = bpawn2;
        self.bpawn2.position.x = G_X;
        self.bpawn2.position.y = 0;
        self.bpawn2.position.z = SEVEN_Z;
        self.add( self.bpawn2 );
        self.gameState.g7 = self.bpawn2;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn3 ) {
    	self.bpawn3 = bpawn3;
        self.bpawn3.position.x = F_X;
        self.bpawn3.position.y = 0;
        self.bpawn3.position.z = SEVEN_Z;
        self.add( self.bpawn3 );
        self.gameState.f7 = self.bpawn3;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn4 ) {
    	self.bpawn4 = bpawn4;
        self.bpawn4.position.x = E_X;
        self.bpawn4.position.y = 0;
        self.bpawn4.position.z = SEVEN_Z;
        self.add( self.bpawn4 );
        self.gameState.e7 = self.bpawn4;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn5 ) {
    	self.bpawn5 = bpawn5;
        self.bpawn5.position.x = D_X;
        self.bpawn5.position.y = 0;
        self.bpawn5.position.z = SEVEN_Z;
        self.add( self.bpawn5 );
        self.gameState.d7 = self.bpawn5;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn6 ) {
    	self.bpawn6 = bpawn6;
        self.bpawn6.position.x = C_X;
        self.bpawn6.position.y = 0;
        self.bpawn6.position.z = SEVEN_Z;
        self.add( self.bpawn6 );
        self.gameState.c7 = self.bpawn6;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn7 ) {
    	self.bpawn7 = bpawn7;
        self.bpawn7.position.x = B_X;
        self.bpawn7.position.y = 0;
        self.bpawn7.position.z = SEVEN_Z;
        self.add( self.bpawn7 );
        self.gameState.b7 = self.bpawn7;
    } );
    
    loader.load( 'assets/models/pawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn8 ) {
    	self.bpawn8 = bpawn8;
        self.bpawn8.position.x = A_X;
        self.bpawn8.position.y = 0;
        self.bpawn8.position.z = SEVEN_Z;
        self.add( self.bpawn8 );
        self.gameState.a7 = self.bpawn8;
    } );
    
    // Black Rooks
    loader.load( 'assets/models/rook.obj', 'assets/materials/brook.mtl', function ( brook1 ) {
    	self.brook1 = brook1;
        self.brook1.position.x = H_X;
        self.brook1.position.y = -0.75;
        self.brook1.position.z = EIGHT_Z;
        self.add( self.brook1 );
        self.gameState.h8 = self.brook1;
    } );

    loader.load( 'assets/models/rook.obj', 'assets/materials/brook.mtl', function ( brook2 ) {
    	self.brook2 = brook2;
        self.brook2.position.x = A_X;
        self.brook2.position.y = -0.75;
        self.brook2.position.z = EIGHT_Z;
        self.add( self.brook2 );
        self.gameState.a8 = self.brook2;
    } );
    
    // Black Knights
    loader.load( 'assets/models/knight.obj', 'assets/materials/bknight.mtl', function ( bknight1 ) {
    	self.bknight1 = bknight1;
        self.bknight1.position.x = G_X;
        self.bknight1.position.y = 0;
        self.bknight1.position.z = EIGHT_Z;
        self.bknight1.rotation.y = Math.PI;
        self.add( self.bknight1 );
        self.gameState.g8 = self.bknight1;
    } );
    
    loader.load( 'assets/models/knight.obj', 'assets/materials/bknight.mtl', function ( bknight2 ) {
    	self.bknight2 = bknight2;
        self.bknight2.position.x = B_X;
        self.bknight2.position.y = 0;
        self.bknight2.position.z = EIGHT_Z;
        self.bknight2.rotation.y = Math.PI;
        self.add( self.bknight2 );
        self.gameState.b8 = self.bknight2;
    } );
    
    // Black Bishops
    loader.load( 'assets/models/bishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop1 ) {
    	self.bbishop1 = bbishop1;
        self.bbishop1.position.x = F_X;
        self.bbishop1.position.y = -0.75;
        self.bbishop1.position.z = EIGHT_Z;
        self.add( self.bbishop1 );
        self.gameState.f8 = self.bbishop1;
    } );
    
    loader.load( 'assets/models/bishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop2 ) {
    	self.bbishop2 = bbishop2;
        self.bbishop2.position.x = C_X;
        self.bbishop2.position.y = -0.75;
        self.bbishop2.position.z = EIGHT_Z;
        self.add( self.bbishop2 );
        self.gameState.c8 = self.bbishop2;
    } );
    
    // Black King
    loader.load( 'assets/models/king.obj', 'assets/materials/bking.mtl', function ( bking ) {
    	self.bking = bking;
        self.bking.position.x = E_X;
        self.bking.position.y = 4.5;
        self.bking.position.z = EIGHT_Z;
        self.add( self.bking );
        self.gameState.e8 = self.bking;
    } );
    
    // Black Queen
    loader.load( 'assets/models/queen.obj', 'assets/materials/bqueen.mtl', function ( bqueen ) {
    	self.bqueen = bqueen;
        self.bqueen.position.x = D_X;
        self.bqueen.position.y = -1.5;
        self.bqueen.position.z = EIGHT_Z;
        self.add( self.bqueen );
        self.gameState.d8 = self.bqueen;
    } );
    
    self.buildGUI();
}

ChessPieces.prototype = new THREE.Object3D();

//
//
// ANIMATION FUNCTIONS
//
//

// if the current move isnt ahead of the game, animate the move
ChessPieces.prototype.animate = function(){
	if (ready === true) {
		currentMove++;
		ready = false;
	}
	if (currentMove <= this.gameData[0]) {
		var moveString = this.getMove();
		this.doMove(moveString);
	}
}

// Retrieves the move string from the game data
ChessPieces.prototype.getMove = function(){
	return this.gameData[4][currentMove - 1];
}

// Delegates the movement of the turn
ChessPieces.prototype.doMove = function(move){
	if (move.length === 5) { // a non-promotion move
		if (!currentPointsInitialized) {
			this.currentStart = move.substring(1, 3);
			this.currentEnd = move.substring(3);
			currentPointsInitialized = true;
		}
		var startPiece = this.gameState[this.currentStart];
		var endPiece = this.gameState[this.currentEnd];
		
		if (endPiece === null) {
			this.animateFreely(startPiece, this.currentEnd);
		}
	}
}

// There's no piece to take at the endpoint so just move
ChessPieces.prototype.animateFreely = function(piece, endpoint) {
	var x = this.findX(endpoint);
	var z = this.findZ(endpoint);
	
	// initialize the distance the piece must travel
	// if the animation has just started
	if (ready === false && distanceInitialized === false) {
		this.currentXDistance = x - piece.position.x;
		this.currentZDistance = z - piece.position.z;
		
		if (this.currentZDistance < 0){ // set the increment based on the sign of the distance
			this.zIncr = INCR * -1;
		}
		
		else {
			this.zIncr = INCR;
		}
		
		if (this.currentXDistance < 0){
			this.xIncr = INCR * -1;
		}
		
		else {
			this.xIncr = INCR;
		}
		distanceInitialized = true;
	}
	
	// move if we haven't reached the destination
	if ((piece.position.z !== z || Math.abs(z - piece.position.z) >= INCR) && this.currentZDistance !== 0){
		piece.position.z += this.zIncr;
	}
	
	if ((piece.position.x !== x || Math.abs(x - piece.position.x) >= INCR) && this.currentXDistance !== 0){
		piece.position.x += this.xIncr;
	}
	
	// once we reach the destination the animation is over
	if ((piece.position.z === z || Math.abs(z - piece.position.z) < INCR)  && 
		(piece.position.x === x || Math.abs(x - piece.position.x) < INCR)) {
		piece.position.z = z;
		piece.position.x = x;
		this.animationOver();
	}
}

// Find the x position of the destination
ChessPieces.prototype.findX = function(position) {
	var file = position[0];
	switch (file)
	{
		case 'a':
			return A_X;
			break;
		case 'b':
			return B_X;
			break;
		case 'c':
			return C_X;
			break;
		case 'd':
			return D_X;
			break;
		case 'e':
			return E_X;
			break;
		case 'f':
			return F_X;
			break;
		case 'g':
			return G_X;
			break;
		case 'h':
			return H_X;
			break;
	}
}

// find the z position of the desitination
ChessPieces.prototype.findZ = function(position) {
	var rank = position[1];
	switch (rank)
	{
		case '1':
			return ONE_Z;
			break;
		case '2':
			return TWO_Z;
			break;
		case '3':
			return THREE_Z;
			break;
		case '4':
			return FOUR_Z;
			break;
		case '5':
			return FIVE_Z;
			break;
		case '6':
			return SIX_Z;
			break;
		case '7':
			return SEVEN_Z;
			break;
		case '8':
			return EIGHT_Z;
			break;
	}
}

// The animation for the piece is done
ChessPieces.prototype.animationOver = function(){
	this.zIncr = 0;
	this.xIncr = 0;
	this.currentXDistance = 0;
	this.currentZDistance = 0;
	distanceInitialized = false;
	this.gameState[this.currentEnd] = this.gameState[this.currentStart];
	this.gameState[this.currentStart] = null;
	this.currentStart = '';
	this.currentEnd = '';
	currentPointsInitialized = false;
	ready = true;
}

//
//
// GUI FUNCTIONS
//
//

// Build the gui with a view folder containing buttons to change perspective
ChessPieces.prototype.buildGUI = function(){
    var gui = new dat.GUI();
    var gameFolder = gui.addFolder('Game');
    gameFolder.add(this, 'gameID');
    gameFolder.add(this, 'openConnection');
    gameFolder.add(this, 'closeConnection');
    gameFolder.add(this, 'quit');
    var viewFolder = gui.addFolder('View');
    viewFolder.add(this, 'topView');
    viewFolder.add(this, 'whiteTeamView');
    viewFolder.add(this, 'blackTeamView');
    gameFolder.open();
}

// opens connection to the server
ChessPieces.prototype.openConnection = function(){
	getGameData(); // index.html
}

// closes the connection to the server
ChessPieces.prototype.closeConnection = function(){
}

// quits the application
// seems that browsers don't normally let scripts close windows
// solution found at: http://productforums.google.com/forum/#!topic/chrome/GjsCrvPYGlA
ChessPieces.prototype.quit = function(){
	window.open('','_self',''); 
    window.close(); 
}

// changes perspective to top view
ChessPieces.prototype.topView = function(){
	camera.position.y = TOP_Y;
	camera.position.z = TOP_Z;
}

// changes perspective to the white team
ChessPieces.prototype.whiteTeamView = function(){
	camera.position.y = PERSPECTIVE_Y;
	camera.position.z = WHITE_Z;
}

// changes perspective to the black team
ChessPieces.prototype.blackTeamView = function(){
	camera.position.y = PERSPECTIVE_Y;
	camera.position.z = BLACK_Z;
}  