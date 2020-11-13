var aprochingMosquitos,fearedMosquitos,can,aprochingMosquitosImg,fearedMosquitosImg,canImg;
var spray,sprayImg;
var count=0;
var sprayGroup;
var aprochingMosquitosGroup;
var edges;
var visibility=255;


function preload(){
 aprochingMosquitosImg=loadImage('aproching mosquito.png');
 fearedMosquitosImg=loadImage('fearing mosquitoes.png');
 sprayImg=loadImage('spray1.png');
 canImg=loadImage('canimg.png');


}
function setup() {
  createCanvas(displayWidth,displayHeight-120);
  
  can=createSprite(200,200);
 can.addImage('c',canImg);
 can.scale=0.4;
 can.velocityY=0;
 sprayGroup=new Group();
 aprochingMosquitosGroup=new Group();



}

function draw() {
  background(0); 
 edges= createEdgeSprites();
 can.collide(edges);
  can.velocityY=0;
  if(keyWentDown('space')){
    var spray=createSprite(can.x+13,can.y-68);
    spray.x=can.x+13;
    spray.y=can.y-68;
   spray.addImage('s',sprayImg);
   spray.scale=0.7;
  sprayGroup.add(spray);
   }
    if(keyWentUp('space')){
      sprayGroup.destroyEach();
    }
   if(keyDown(UP_ARROW)){
    can.velocityY=-5;
    
  }
  if(keyDown(DOWN_ARROW)){
    can.velocityY=5;  
  }
 
   
  for(var i=0;i<aprochingMosquitosGroup.length;i++){
    
    if(aprochingMosquitosGroup.get(i)!==null && sprayGroup.isTouching(aprochingMosquitosGroup)){
      aprochingMosquitosGroup.get(i).changeImage('a',fearedMosquitosImg);
    //  aprochingMosquitosGroup.get(i).scale=0.5;
      push();
      visibility=visibility-5;
      tint(255,visibility);
     image(fearedMosquitosImg,aprochingMosquitosGroup.get(i).x,aprochingMosquitosGroup.get(i).y,10,20);
     pop();
    }
 } 
 
 
  textSize(36);
  fill('red');
  text('score:'+count,770,100);
  drawSprites();

  spawnMosquitos();

}

function spawnMosquitos(){
  if(frameCount%100===0){
  var aprochingMosquitos=createSprite(displayWidth,random(100,displayHeight));
  aprochingMosquitos.velocityX=- (6 + 3*count/100);
  aprochingMosquitos.addImage('m',aprochingMosquitosImg);
  aprochingMosquitos.addImage('a',fearedMosquitosImg);
  aprochingMosquitos.scale=0.3;
  aprochingMosquitos.lifetime=800/-5;
  aprochingMosquitos.depth=can.depth;
  can.depth = can.depth+1;
  aprochingMosquitosGroup.add(aprochingMosquitos);

  }
}

  
  

