var path,pathImg
var flower1,flower1Img
var flower2,flower2Img
var flower3,flower3Img
var flower4,flower4Img
var badflower,badflowerImg
var gameover,endImg
var score=0,flowers=0
var PLAY=1
var END=0
var gameState=1
function preload(){
    flower1Img=loadImage("flower1.PNG")
    flower2Img=loadImage("flower2.PNG")
    flower3Img=loadImage("flower3.PNG")
    flower4Img=loadImage("flower4.PNG")
    badflowerImg=loadImage("bad flower.PNG")
    pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  endImg=loadImage("gameOver copy.png")
}

function setup() {
  createCanvas(500,600)
  path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = +(4+2*score/100);
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
flower1G=new Group();
flower2G=new Group()
flower3G=new Group()
flower4G=new Group()
badflowerG=new Group()
}

function draw() {
 
 background("red")
 if(gameState===PLAY){
 boy.x = World.mouseX;
 edges= createEdgeSprites();
 boy.collide(edges);
 if(path.y > 400 ){
  path.y = height/2;
 }
 score = score + Math.round(frameCount/60);
 
if (flower1G.isTouching(boy)) {
  flower1G.destroyEach();
  flowers=flowers+1;
}
if (flower2G.isTouching(boy)) {
  flower2G.destroyEach();
  flowers=flowers+2;
}
 if (flower3G.isTouching(boy)) {
  flower3G.destroyEach();
  flowers=flowers+1;
}
if (flower4G.isTouching(boy)) {
  flower4G.destroyEach();
  flowers=flowers+4;
}
}
 
if(badflowerG.isTouching(boy)){
 
  gameState=END
 
  boy.addAnimation("SahilRunning",endImg)
  boy.scale=2
  score=0
  flowers=0
  path.velocityY=0
  flower1G.destroyEach();
  flower2G.destroyEach();
  flower3G.destroyEach();
  flower4G.destroyEach();
  
 flower1G.setVelocityYEach(0);
  flower2G.setVelocityYEach(0);
  flower3G.setVelocityYEach(0);
  flower4G.setVelocityYEach(0);
  badflowerG.setVelocityYEach(0);

}
createbadflowers()
createflowers1()
createflowers2()
createflowers3()
createflowers4()
 drawSprites()
 textSize(20);
 fill("yellow");
 text("score: "+ score,30,30);
 textSize(20);
 fill("yellow");
 text("flowers: "+ flowers,30,60);
}
function createflowers1() {
 if(World.frameCount%200==0){
  var flower1= createSprite(Math.round(random(50,350),40,10,10))
  flower1.addImage(flower1Img)
  flower1.scale=0.2
  flower1.velocityY = 3;
flower1.lifetime = 170;
  flower1G.add(flower1)
 }
}
function createflowers2() {
  if(World.frameCount%320==0){
   var flower2= createSprite(Math.round(random(50,350),40,10,10))
   flower2.addImage(flower2Img)
   flower2.scale=0.1
   flower2.velocityY = 3;
 flower2.lifetime = 170;
   flower2G.add(flower2)
  }
 }
 function createflowers3() {
  if(World.frameCount%410==0){
   var flower3= createSprite(Math.round(random(50,350),40,10,10))
   flower3.addImage(flower3Img)
   flower3.scale=0.2
   flower3.velocityY = 3;
 flower3.lifetime = 170;
   flower3G.add(flower3)
  }
 }
 function createflowers4() {
  if(World.frameCount%530==0){
   var flower4= createSprite(Math.round(random(50,350),40,10,10))
   flower4.addImage(flower4Img)
   flower4.scale=0.2
   flower4.velocityY = 3;
 flower4.lifetime = 170;
   flower4G.add(flower4)
  }
 }
 function createbadflowers() {
  if(World.frameCount%530==0){
   var badflower= createSprite(Math.round(random(50,350),40,10,10))
   badflower.addImage(badflowerImg)
   badflower.scale=0.3
   badflower.velocityY = 3;
 badflower.lifetime = 170;
   badflowerG.add(badflower)
  }
 }

