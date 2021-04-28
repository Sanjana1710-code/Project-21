var canvas;
var music;

var s1,s2,s3,s4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1=createSprite(100,600,190,30);
    s1.shapeColor="red";
    s2=createSprite(300,600,190,30);
    s2.shapeColor="green";
    s3=createSprite(500,600,190,30);
    s3.shapeColor="yellow";
    s4=createSprite(700,600,190,30);
    s4.shapeColor="blue";


    //create box sprite and give velocity
    box=createSprite(random(20,750),50,20,20);
    box.shapeColor="white";
    box.velocityX=2;
    box.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));


    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor="red";
    }
    if(s2.isTouching(box) && box.bounceOff(s2)){
        box.shapeColor="green";
    }
    if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor="yellow";
    }
    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor="blue";
    }

    //create edgeSprite
   createEdgeSprites();
   box.bounceOff(edges);
   box.bounceOff(s1);
   box.bounceOff(s2);
   box.bounceOff(s3);
   box.bounceOff(s4);

    drawSprites();
}
