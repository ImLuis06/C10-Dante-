
var trex,trex_running;
var edges;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundfachero=loadImage ("ground2.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50;
  ground = createSprite(200,180,400,20)
  ground.addImage("ground", groundfachero)
  ground.width /2
}

function draw(){
  background(150);
  ground.velocityX = -7
  if(ground.x <0){
    ground.x = ground.width /2
  }

  //console.log(trex.y);
  if(keyDown("space")){
    trex.velocityY=-7
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(ground);
  drawSprites()
}

