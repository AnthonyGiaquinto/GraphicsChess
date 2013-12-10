const PIECESCALE = 10;

var ChessPiece = function( loader ) {

    var self = this;

    this.scale.x = this.scale.y = this.scale.z = PIECESCALE;
    this.position.x = -20;
    this.position.y = -15;
    //this.incr = 0;

    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn1 ) {
        wpawn1.position.x = -20;
        wpawn1.position.y = 0;
        wpawn1.position.z = 0;
        self.add( wpawn1 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn2 ) {
        wpawn2.position.x = -15;
        wpawn2.position.y = 0;
        wpawn2.position.z = 0;
        self.add( wpawn2 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn3 ) {
        wpawn3.position.x = -10;
        wpawn3.position.y = 0;
        wpawn3.position.z = 0;
        self.add( wpawn3 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn4 ) {
        wpawn4.position.x = -5;
        wpawn4.position.y = 0;
        wpawn4.position.z = 0;
        self.add( wpawn4 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn5 ) {
        wpawn5.position.x = 0;
        wpawn5.position.y = 0;
        wpawn5.position.z = 0;
        self.add( wpawn5 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn6 ) {
        wpawn6.position.x = 5;
        wpawn6.position.y = 0;
        wpawn6.position.z = 0;
        self.add( wpawn6 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn7 ) {
        wpawn7.position.x = 10;
        wpawn7.position.y = 0;
        wpawn7.position.z = 0;
        self.add( wpawn7 );
    } );
    
    loader.load( 'assets/models/wpawn.obj', 'assets/materials/wpawn.mtl', function ( wpawn8 ) {
        wpawn8.position.x = 15;
        wpawn8.position.y = 0;
        wpawn8.position.z = 0;
        self.add( wpawn8 );
    } );
    
    loader.load( 'assets/models/wrook.obj', 'assets/materials/wrook.mtl', function ( wrook1 ) {
        wrook1.position.x = -20;
        wrook1.position.y = -0.75;
        wrook1.position.z = -5;
        self.add( wrook1 );
    } );

    loader.load( 'assets/models/wrook.obj', 'assets/materials/wrook.mtl', function ( wrook2 ) {
        wrook2.position.x = 15;
        wrook2.position.y = -0.75;
        wrook2.position.z = -5;;
        self.add( wrook2 );
    } );
    
    loader.load( 'assets/models/wknight.obj', 'assets/materials/wknight.mtl', function ( wknight1 ) {
        wknight1.position.x = -15;
        wknight1.position.y = 0;
        wknight1.position.z = -5;
        self.add( wknight1 );
    } );
    
    loader.load( 'assets/models/wknight.obj', 'assets/materials/wknight.mtl', function ( wknight2 ) {
        wknight2.position.x = 10;
        wknight2.position.y = 0;
        wknight2.position.z = -5;
        self.add( wknight2 );
    } );
    
    loader.load( 'assets/models/wbishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop1 ) {
        wbishop1.position.x = -11.6;
        wbishop1.position.y = 0;
        wbishop1.position.z = -5;
        self.add( wbishop1 );
    } );
    
    loader.load( 'assets/models/wbishop.obj', 'assets/materials/wbishop.mtl', function ( wbishop2 ) {
        wbishop2.position.x = 3.4;
        wbishop2.position.y = 0;
        wbishop2.position.z = -5;
        self.add( wbishop2 );
    } );
    
    loader.load( 'assets/models/wking.obj', 'assets/materials/wking.mtl', function ( wking ) {
        wking.position.x = -5;
        wking.position.y = 4.5;
        wking.position.z = -5;
        self.add( wking );
    } );
    
    loader.load( 'assets/models/wqueen.obj', 'assets/materials/wqueen.mtl', function ( wqueen ) {
        wqueen.position.x = 0;
        wqueen.position.y = -1.2;
        wqueen.position.z = -5;
        self.add( wqueen );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn1 ) {
        bpawn1.position.x = -20;
        bpawn1.position.y = 0;
        bpawn1.position.z = 5;
        self.add( bpawn1 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn2 ) {
        bpawn2.position.x = -15;
        bpawn2.position.y = 0;
        bpawn2.position.z = 5;
        self.add( bpawn2 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn3 ) {
        bpawn3.position.x = -10;
        bpawn3.position.y = 0;
        bpawn3.position.z = 5;
        self.add( bpawn3 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn4 ) {
        bpawn4.position.x = -5;
        bpawn4.position.y = 0;
        bpawn4.position.z = 5;
        self.add( bpawn4 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn5 ) {
        bpawn5.position.x = 0;
        bpawn5.position.y = 0;
        bpawn5.position.z = 5;
        self.add( bpawn5 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn6 ) {
        bpawn6.position.x = 5;
        bpawn6.position.y = 0;
        bpawn6.position.z = 5;
        self.add( bpawn6 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn7 ) {
        bpawn7.position.x = 10;
        bpawn7.position.y = 0;
        bpawn7.position.z = 5;
        self.add( bpawn7 );
    } );
    
    loader.load( 'assets/models/bpawn.obj', 'assets/materials/bpawn.mtl', function ( bpawn8 ) {
        bpawn8.position.x = 15;
        bpawn8.position.y = 0;
        bpawn8.position.z = 5;
        self.add( bpawn8 );
    } );
    
    loader.load( 'assets/models/brook.obj', 'assets/materials/brook.mtl', function ( brook1 ) {
        brook1.position.x = -20;
        brook1.position.y = -0.75;
        brook1.position.z = 10;
        self.add( brook1 );
    } );

    loader.load( 'assets/models/brook.obj', 'assets/materials/brook.mtl', function ( brook2 ) {
        brook2.position.x = 15;
        brook2.position.y = -0.75;
        brook2.position.z = 10;
        self.add( brook2 );
    } );
    
    loader.load( 'assets/models/bknight.obj', 'assets/materials/bknight.mtl', function ( bknight1 ) {
        bknight1.position.x = -15;
        bknight1.position.y = 0;
        bknight1.position.z = 10;
        self.add( bknight1 );
    } );
    
    loader.load( 'assets/models/bknight.obj', 'assets/materials/bknight.mtl', function ( bknight2 ) {
        bknight2.position.x = 10;
        bknight2.position.y = 0;
        bknight2.position.z = 10;
        self.add( bknight2 );
    } );
    
    loader.load( 'assets/models/bbishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop1 ) {
        bbishop1.position.x = -11.6;
        bbishop1.position.y = 0;
        bbishop1.position.z = 10;
        self.add( bbishop1 );
    } );
    
    loader.load( 'assets/models/bbishop.obj', 'assets/materials/bbishop.mtl', function ( bbishop2 ) {
        bbishop2.position.x = 3.4;
        bbishop2.position.y = 0;
        bbishop2.position.z = 10;
        self.add( bbishop2 );
    } );
    
    loader.load( 'assets/models/bking.obj', 'assets/materials/bking.mtl', function ( bking ) {
        bking.position.x = -5;
        bking.position.y = 4.5;
        bking.position.z = 10;
        self.add( bking );
    } );
    
    loader.load( 'assets/models/bqueen.obj', 'assets/materials/bqueen.mtl', function ( bqueen ) {
        bqueen.position.x = 0;
        bqueen.position.y = -1.2;
        bqueen.position.z = 10;
        self.add( bqueen );
    } );
}

ChessPiece.prototype = new THREE.Object3D();
/*
Bicycle.prototype.animate = function(){
    this.incr = -WHEELRAD * this.rearWheel.incr;
    this.frontWheel.incr = this.rearWheel.incr / Math.cos( this.handlebar.rotation.y );
    this.frontWheel.rotation.z -= this.frontWheel.incr;
    this.rearWheel.rotation.z -= this.rearWheel.incr;
    this.rotation.y += Math.atan(1.25 * this.frontWheel.incr * Math.sin( this.handlebar.rotation.y ) / 3.6);
    this.position.x -= this.incr * Math.cos( this.rotation.y );
    this.position.z += this.incr * Math.sin( this.rotation.y );
}

Bicycle.prototype.pedalFwd = function(){
    this.rearWheel.incr += ONEDEGREE;
}

Bicycle.prototype.pedalRev = function(){
    this.rearWheel.incr -= ONEDEGREE;
}

Bicycle.prototype.turnRight = function(){
    if (this.handlebar.rotation.y < MAXTURN) {
        this.handlebar.rotation.y += ONEDEGREE;
        //this.rotateX(-ONEDEGREE);
    }
}

Bicycle.prototype.turnLeft = function(){
    if (this.handlebar.rotation.y > MINTURN) {
        this.handlebar.rotation.y -= ONEDEGREE;
        //this.rotateX(ONEDEGREE);
    }
}

Bicycle.prototype.buildGUI = function(){
    var gui = new dat.GUI();
    var bikeFolder = gui.addFolder('Bicycle');
    bikeFolder.add(this.rearWheel, 'incr', MINTURN / 4, MAXTURN / 4).listen();
    bikeFolder.add(this.handlebar.rotation, 'y', MINTURN, MAXTURN).listen();
    bikeFolder.open();
}*/