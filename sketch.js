const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
world=engine.world;
var option1 ={
  isStatic:true
}
var option2 ={
 restitution:1
}

ground=Bodies.rectangle(200,390,500,20,option1);
World.add(world,ground)
ball=Bodies.circle(300,100,25,option2)
World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,500,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  
  drawSprites();
}