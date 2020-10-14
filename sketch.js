const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var myEngine, myWorld, ground;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine = engine.create();
  myWorld = myEngine.world;
  var groundOptions = {
    isStatic: true
  }
  var ballOptions = {
    restitution: 1
  }
  ground = bodies.rectangle(200,390,400,20,groundOptions);
  world.add(myWorld,ground);
  console.log(ground);
  ball = bodies.circle(300,100,10,ballOptions);
  world.add(myWorld,ball);
}

function draw() {
  background(0);  
  engine.update(myEngine);
  rectMode(CENTER);
  rect(200,200,30,30);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,ball.position.radius);
}