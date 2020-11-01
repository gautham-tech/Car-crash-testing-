var wall,car;
var speed,weight;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1000,200,60,height/2);
  car = createSprite(50,200,50,50);
  speed = random(55,90);
  weight = random(400,1500);
  wall.shapeColor = "gray";
  car.shapeColor = "white";
}

function draw() {
  background("black");  

  car.velocityX = speed;
  console.log(car.x - wall.x);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
    car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);
    }

    if(deformation<100){
    car.shapeColor = color(0,255,0);
    }
  }

  rectMode(CENTER);
  drawSprites();
}