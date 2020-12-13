var movingRect , fixedRect ;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  movingRect = createSprite(20,20,70,90);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect = createSprite(200,200,40,100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  console.log(movingRect.x - fixedRect.x && fixedRect.x - movingRect.x);

  
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x -  movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red" ;
    fixedRect.shapeColor = "red";
  }

  else {
    movingRect.shapeColor = "green" ;
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}