
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //create monkey
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //create ground
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(monkey.y);
}


function draw() {
  background(255);

 if(ground.x<0){
   ground.x = ground.width/2;
 } 
   
 if(keyDown("SPACE") &&monkey.y>= 250){
  monkey.velocityY = -12;  
 } 
  
 monkey.velocityY = monkey.velocityY + 0.8; 
  
 monkey.collide(ground); 
  
  //banana function
  banana();
  
  //callobstacles
   stones();
  
  //addscore
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 500,50)
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50)
  
 drawSprites(); 
}

function banana(){
  
if(frameCount %60 === 0){
   
  var banana = createSprite(400,random(100,300), 20,20);
  banana.velocityX = -4
//banana image
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  
  banana.lifetime = 100;
   }  
 
}


function stones(){

  if(frameCount %100 === 0){
 var obstacle = createSprite(400,323,20,20);
  
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
 obstacle.velocityX = -4  
 obstacle.lifetime = 100;
  
  }
  
  
  
}