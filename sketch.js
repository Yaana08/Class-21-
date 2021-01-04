var fixedRect, movingRect;
var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  //sprite1 = createSprite(0,400,50,50);
  //sprite2 = createSprite(800,400,100,50);

  //sprite1.velocityX = 3;
  //sprite2.velocityX = -3;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  //bounceOff(sprite1,sprite2); 
  drawSprites();
}
