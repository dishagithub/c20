var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue"
  movingRect.velocityX=-3
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green"
  fixedRect.velocityX=3
}

function draw() {
  background(255,255,255);  
  if(fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX * -1
      fixedRect.velocityX=fixedRect.velocityX * -1

  }
  if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
    movingRect.x-fixedRect.x<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY=movingRect.velocityY*-1
      fixedRect.velocityY=fixedRect.velocityY*-1
    }
  drawSprites();
}