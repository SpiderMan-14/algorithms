 var spidy,ironman;
 function draw(){
background("black");
spidy.shapeColor="red";
ironman.shapeColor="gold";
spidy.x=mouseX;
spidy.y=mouseY;
if(spidy.x-ironman.x<ironman.width/2+spidy.width/2
  &&ironman.x-spidy.x<ironman.width/2+spidy.width/2
  &&spidy.y-ironman.y<ironman.height/2+spidy.height/2
  &&ironman.x-spidy.x<ironman.height/2+spidy.height/2){
spidy.shapeColor="turquoise";
ironman.shapeColor="purple";
}
else{
  spidy.shapeColor="red";
ironman.shapeColor="gold";
}
drawSprites();
}

function setup(){
createCanvas(600,600);
spidy= createSprite(200,200,20,20);
ironman= createSprite(180,180,30,30);
}
