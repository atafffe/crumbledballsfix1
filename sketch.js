const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper, paperImg;
var ground;
var right;
var left;
var base;
var middle, middleImg;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 450, 70);
  ground = new Ground(width / 2, 670, width, 20);
  middle = new Dustbin(1200, 650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  
  Engine.update(engine);

  paper.display();
  ground.display();
  middle.display();

  drawSprites();
}

function keyPressed(){

  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y: -145});
  }

}