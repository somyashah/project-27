
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
sx=width/2;
sy=height/4+500;
  bobObject1=new bob(sx-80,sy,40);
  bobObject2=new bob(sx-40,sy,40);
  bobObject3=new bob(sx,sy,40);
  bobObject4=new bob(sx+40,sy,40);
  bobObject5=new bob(sx+80,sy,40);
  roof1=new roof(410,180,390,30);
  rope1=new rope(bobObject1.body,roof1.body,-40, 0);
  rope2=new rope(bobObject2.body,roof1.body,0, 0);
  rope3=new rope(bobObject3.body,roof1.body,40, 0);
  rope4=new rope(bobObject4.body,roof1.body,80, 0);
  rope5=new rope(bobObject5.body,roof1.body,120, 0);
 // roof.shapeColor=color("orange");
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed() 
{ if (keyCode === UP_ARROW) { 
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } 
}

