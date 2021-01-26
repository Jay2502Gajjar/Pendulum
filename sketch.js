
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var base;
var pillar1 , pillar2;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   


	ground = new Ground(400,200,400,40);

	bobObject1 = new ball(260, 400, 50);
	bobObject2 = new ball(310, 400, 50);
	bobObject3 = new ball(360, 400, 50);
	bobObject4 = new ball(410, 400, 50);
  bobObject5 = new ball(460, 400, 50);
  
  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	
   rope1 = new rope(bobObject1.body,ground.body,-100,0)
   rope2 = new rope(bobObject2.body,ground.body,-50,0)
   rope3 = new rope(bobObject3.body,ground.body,0,0)
   rope4 = new rope(bobObject4.body,ground.body,50,0)
   rope5 = new rope(bobObject5.body,ground.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 

  drawSprites();

 
}


function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {

      Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:4})
    }

    if(keyCode === LEFT_ARROW)
    {

      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-4})
    }


}


 