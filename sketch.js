
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var roof,rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);
	bobObject1 = new Bob(200,200,30)
	bobObject2 = new Bob(230,200,30)
	bobObject3 = new Bob(260,200,30)
	bobObject4 = new Bob(290,200,30)
	bobObject5 = new Bob(320,200,30)
	engine = Engine.create();
	rope1 = new Rope(bobObject1.body,roof,bobDiametre*2,0)
	rope2 = new Rope(bobObject2.body,roof,bobDiametre*2,0)
	rope3 = new Rope(bobObject3.body,roof,bobDiametre*2,0)
	rope4 = new Rope(bobObject4.body,roof,bobDiametre*2,0)
	rope5 = new Rope(bobObject5.body,roof,bobDiametre*2,0)
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	  
  
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-90,y:-105})

  }

  drawSprites();
 
}



