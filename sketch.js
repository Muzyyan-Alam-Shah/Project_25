
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(750,680,1500,20);
   
  
paperObject=new Paper(150,100,70);

DustbinObj=new Dustbin(1350,650);
Engine.run(engine);
}



function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  paperObject.display();
  ground.display();
  DustbinObj.display();
  drawSprites();
  
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85});
  }
}



