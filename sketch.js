var groundImg,ground
function preload() {
    //load the images here
    groundImg=loadImage("backGround.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(width/2,height-400,width,2)
  ground.addImage(groundImg);
  ground.scale=0.5
  ground.x = ground.width /2;
  ground.velocityX=-3
 


}

function draw() {
    background(255);
    if (ground.x < 100){
        ground.x = 570
      }
    ground.display();
    drawSprites();
}


function keyPressed(){

 

}
