
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 
	ground1 = new GROUND(400,650,800,5);
	paperBall = new PAPER(50,600,50,45);
	wall1 = new DUSTBIN(650,645,150,15);
	wall2 = new DUSTBIN(575,540,15,200);
	wall3 = new DUSTBIN(725,535,15,225);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  paperBall.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}
function keyPressed(){ 
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:100 , y:-150});
	}
}


