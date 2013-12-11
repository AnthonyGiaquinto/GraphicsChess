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

var ChessPieces = function( loader ) {

    var self = this;

    this.position.x = 0;
    this.position.y = -20;
    this.scale.x = this.scale.y = this.scale.z = PIECESCALE;
    this.gameID = 'Enter Game ID';      // will be changed based on user input
    
    this.incr = 0.25;   // Distance a piece will move in each frame for an animation
    this.vertical = 11.0 / 3; // Number to keep track of how far a piece must move to get to the next square
    this.count = 0;
	
	// White Pawns
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn1 ) {
    	self.wpawn1 = wpawn1;
        self.wpawn1.position.x = -15.5;
        self.wpawn1.position.y = 0;
        self.wpawn1.position.z = -11.0;
        self.add( self.wpawn1 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn2 ) {
    	self.wpawn2 = wpawn2;
        self.wpawn2.position.x = -11.0;
        self.wpawn2.position.y = 0;
        self.wpawn2.position.z = -11.0;
        self.add( self.wpawn2 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn3 ) {
    	self.wpawn3 = wpawn3;
        self.wpawn3.position.x = -6.5;
        self.wpawn3.position.y = 0;
        self.wpawn3.position.z = -11.0;
        self.add( self.wpawn3 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn4 ) {
    	self.wpawn4 = wpawn4;
        self.wpawn4.position.x = -2.0;
        self.wpawn4.position.y = 0;
        self.wpawn4.position.z = -11.0;
        self.add( self.wpawn4 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn5 ) {
    	self.wpawn5 = wpawn5;
        self.wpawn5.position.x = 2.0;
        self.wpawn5.position.y = 0;
        self.wpawn5.position.z = -11.0;
        self.add( self.wpawn5 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn6 ) {
    	self.wpawn6 = wpawn6;
        self.wpawn6.position.x = 6.25;
        self.wpawn6.position.y = 0;
        self.wpawn6.position.z = -11.0;
        self.add( self.wpawn6 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn7 ) {
    	self.wpawn7 = wpawn7;
        self.wpawn7.position.x = 10.75;
        self.wpawn7.position.y = 0;
        self.wpawn7.position.z = -11.0;
        self.add( self.wpawn7 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn8 ) {
    	self.wpawn8 = wpawn8;
        self.wpawn8.position.x = 15.25;
        self.wpawn8.position.y = 0;
        self.wpawn8.position.z = -11.0;
        self.add( self.wpawn8 );
    } );
    
    // White Rooks
    loader.load( 'assets/models/wrook.obj', 'assets/materials/wrook.mtl', function ( wrook1 ) {
    	self.wrook1 = wrook1;
        self.wrook1.position.x = -15.5;
        self.wrook1.position.y = -0.75;
        self.wrook1.position.z = -15.25;
        self.add( self.wrook1 );
    } );

    loader.load( 'assets/models/wrook.obj', 'assets/materials/wrook.mtl', function ( wrook2 ) {
    	self.wrook2 = wrook2;
        self.wrook2.position.x = 15.25;
        self.wrook2.position.y = -0.75;
        self.wrook2.position.z = -15.25;
        self.add( self.wrook2 );
    } );
    
    // White Knights
    loader.load( 'assets/models/wknight.obj', 'assets/materials/wknight.mtl', function ( wknight1 ) {
    	self.wknight1 = wknight1;
        self.wknight1.position.x = -11.0;
        self.wknight1.position.y = 0;
        self.wknight1.position.z = -15.25;
        self.add( self.wknight1 );
    } );
    
    loader.load( 'assets/models/wknight.obj', 'assets/materials/wknight.mtl', function ( wknight2 ) {
    	self.wknight2 = wknight2;
        self.wknight2.position.x = 10.75;
        self.wknight2.position.y = 0;
        self.wknight2.position.z = -15.25;
        self.add( self.wknight2 );
    } );
    
    // White Bishops
    loader.load( 'assets/models/wbishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop1 ) {
    	self.wbishop1 = wbishop1;
        self.wbishop1.position.x = -8.25;
        self.wbishop1.position.y = 0;
        self.wbishop1.position.z = -15.25;
        self.add( self.wbishop1 );
    } );
    
    loader.load( 'assets/models/wbishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop2 ) {
    	self.wbishop2 = wbishop2;
        self.wbishop2.position.x = 4.75;
        self.wbishop2.position.y = 0;
        self.wbishop2.position.z = -15.25;
        self.add( self.wbishop2 );
    } );
    
    // White King
    loader.load( 'assets/models/wking.obj', 'assets/materials/wking.mtl', function ( wking ) {
    	self.wking = wking;
        self.wking.position.x = -2;
        self.wking.position.y = 4.5;
        self.wking.position.z = -15.25;
        self.add( self.wking );
    } );
    
    // White Queen
    loader.load( 'assets/models/wqueen.obj', 'assets/materials/wqueen.mtl', function ( wqueen ) {
    	self.wqueen = wqueen;
        self.wqueen.position.x = 2.0;
        self.wqueen.position.y = -1.5;
        self.wqueen.position.z = -15.25;
        self.add( self.wqueen );
    } );
    
    // Black Pawns
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn1 ) {
    	self.bpawn1 = bpawn1;
        self.bpawn1.position.x = -15.5;
        self.bpawn1.position.y = 0;
        self.bpawn1.position.z = 11.0;
        self.add( self.bpawn1 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn2 ) {
    	self.bpawn2 = bpawn2;
        self.bpawn2.position.x = -11.0;
        self.bpawn2.position.y = 0;
        self.bpawn2.position.z = 11.0;
        self.add( self.bpawn2 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn3 ) {
    	self.bpawn3 = bpawn3;
        self.bpawn3.position.x = -6.5;
        self.bpawn3.position.y = 0;
        self.bpawn3.position.z = 11.0;
        self.add( self.bpawn3 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn4 ) {
    	self.bpawn4 = bpawn4;
        self.bpawn4.position.x = -2.0;
        self.bpawn4.position.y = 0;
        self.bpawn4.position.z = 11.0;
        self.add( self.bpawn4 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn5 ) {
    	self.bpawn5 = bpawn5;
        self.bpawn5.position.x = 2.0;
        self.bpawn5.position.y = 0;
        self.bpawn5.position.z = 11.0;
        self.add( self.bpawn5 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn6 ) {
    	self.bpawn6 = bpawn6;
        self.bpawn6.position.x = 6.25;
        self.bpawn6.position.y = 0;
        self.bpawn6.position.z = 11.0;
        self.add( self.bpawn6 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn7 ) {
    	self.bpawn7 = bpawn7;
        self.bpawn7.position.x = 10.75;
        self.bpawn7.position.y = 0;
        self.bpawn7.position.z = 11.0;
        self.add( self.bpawn7 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn8 ) {
    	self.bpawn8 = bpawn8;
        self.bpawn8.position.x = 15.25;
        self.bpawn8.position.y = 0;
        self.bpawn8.position.z = 11.0;
        self.add( self.bpawn8 );
    } );
    
    // Black Rooks
    loader.load( 'assets/models/brook.obj', 'assets/materials/brook.mtl', function ( brook1 ) {
    	self.brook1 = brook1;
        self.brook1.position.x = -15.5;
        self.brook1.position.y = -0.75;
        self.brook1.position.z = 15.25;
        self.add( self.brook1 );
    } );

    loader.load( 'assets/models/brook.obj', 'assets/materials/brook.mtl', function ( brook2 ) {
    	self.brook2 = brook2;
        self.brook2.position.x = 15.25;
        self.brook2.position.y = -0.75;
        self.brook2.position.z = 15.25;
        self.add( self.brook2 );
    } );
    
    // Black Knights
    loader.load( 'assets/models/bknight.obj', 'assets/materials/bknight.mtl', function ( bknight1 ) {
    	self.bknight1 = bknight1;
        self.bknight1.position.x = -11.0;
        self.bknight1.position.y = 0;
        self.bknight1.position.z = 15.25;
        self.add( self.bknight1 );
    } );
    
    loader.load( 'assets/models/bknight.obj', 'assets/materials/bknight.mtl', function ( bknight2 ) {
    	self.bknight2 = bknight2;
        self.bknight2.position.x = 10.75;
        self.bknight2.position.y = 0;
        self.bknight2.position.z = 15.25;
        self.add( self.bknight2 );
    } );
    
    // Black Bishops
    loader.load( 'assets/models/bbishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop1 ) {
    	self.bbishop1 = bbishop1;
        self.bbishop1.position.x = -8.25;
        self.bbishop1.position.y = 0;
        self.bbishop1.position.z = 15.25;
        self.add( self.bbishop1 );
    } );
    
    loader.load( 'assets/models/bbishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop2 ) {
    	self.bbishop2 = bbishop2;
        self.bbishop2.position.x = 4.75;
        self.bbishop2.position.y = 0;
        self.bbishop2.position.z = 15.25;
        self.add( self.bbishop2 );
    } );
    
    // Black King
    loader.load( 'assets/models/bking.obj', 'assets/materials/bking.mtl', function ( bking ) {
    	self.bking = bking;
        self.bking.position.x = -2;
        self.bking.position.y = 4.5;
        self.bking.position.z = 15.25;
        self.add( self.bking );
    } );
    
    // Black Queen
    loader.load( 'assets/models/bqueen.obj', 'assets/materials/bqueen.mtl', function ( bqueen ) {
    	self.bqueen = bqueen;
        self.bqueen.position.x = 2.0;
        self.bqueen.position.y = -1.5;
        self.bqueen.position.z = 15.25;
        self.add( self.bqueen );
    } );
    
    self.buildGUI();
}

ChessPieces.prototype = new THREE.Object3D();

ChessPieces.prototype.animate = function(){
	
	//if (this.count !== 70) {
	//	this.bpawn1.position.z -= (this.vertical / 10);
		//bpawnMove(this.bpawn1);
	//	this.count++;
	//}
	/*
    this.incr = -WHEELRAD * this.rearWheel.incr;
    this.frontWheel.incr = this.rearWheel.incr / Math.cos( this.handlebar.rotation.y );
    this.frontWheel.rotation.z -= this.frontWheel.incr;
    this.rearWheel.rotation.z -= this.rearWheel.incr;
    this.rotation.y += Math.atan(1.25 * this.frontWheel.incr * Math.sin( this.handlebar.rotation.y ) / 3.6);
    this.position.x -= this.incr * Math.cos( this.rotation.y );
    this.position.z += this.incr * Math.sin( this.rotation.y );
    */
}

ChessPieces.prototype.bpawnMove = function(bpawn){
	bpawn.position.z -= this.incr;
}

//
// GUI FUNCTIONS
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
	camera.position.y = TOP_DOWN_Y;
	camera.position.z = TOP_DOWN_Z;
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