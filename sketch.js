var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50); 
  movingrect=createSprite(400,400,100,40);
  fixedrect.velocityY=4;
  movingrect.velocityY=-4;

  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
//movingrect.x=World.mouseX
//movingrect.y=World.mouseY


if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
  fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2
   && movingrect.y-fixedrect.y < fixedrect.width/2 + movingrect.width/2 
   && fixedrect.y-movingrect.y < fixedrect.width/2 + movingrect.width/2) 
   
   { 
     fixedrect.velocityY=fixedrect.velocityY*(-1);
     movingrect.velocityY=movingrect.velocityY*(-1);
     //fixedrect.shapeColor ="red"; 
     //movingrect.shapeColor = "red";
     } 
   else{ //fixedrect.shapeColor = "blue";
   // movingrect.shapeColor = "blue";
  }
  drawSprites();

}