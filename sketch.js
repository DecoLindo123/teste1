var trex, trex_running, trex_collided;
var ground, ground_img;
var chao;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img = loadAnimation("ground2.png")

}
function setup(){
createCanvas(600,200);
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale= 0.5;
trex.x=50;
ground = createSprite(200,180,400,20);
ground.addAnimation("ground2.png",ground_img);
chao = createSprite(200,190,400,10);
chao.visible = false;
}
function draw(){
background("white");
if(keyDown("space") && trex.y>=100){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+0.8
ground.velocityX = -2;
trex.collide(chao);
if(ground.x < 0)
{
  ground.x = ground.width/2;
}
drawSprites();

}