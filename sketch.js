var ship, ship_running;
var sea, sea_running;
//To load images
function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_running = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  //create a ship sprite
  sea = createSprite(200,200,200,150);
  sea.addImage("sea",sea_running);
  ship = createSprite(270,200,10,100)
  ship.addAnimation("flowing",ship_running);
  ship.scale = 0.40
  //create a sea sprite
  
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if (sea.x<0)
  {
    sea.x=sea.width/2
  }
 drawSprites();
}