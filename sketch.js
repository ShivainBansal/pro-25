
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,580,800,20);

	paperBall = new Paper(100,480,20);

	dustbin = new Dustbin(600,510);

	Engine.run(engine);

}


function draw() {

	 
  background(225,225,225);
  
  



  ground.display();
  dustbin.display();
  paperBall.display();

}
function keyPressed() {

 if (keyCode === UP_ARROW){
 Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:40,y:-100});
 }

}



