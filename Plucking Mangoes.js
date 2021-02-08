
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree1, stone1, ground1, launcher;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(950,70,30);
	mango2 = new Mango(1060, 110, 30)
	mango3 = new Mango(850, 190, 30)
	mango4 = new Mango(950, 210, 30)
	mango5 = new Mango(1150, 200, 30)
	tree1=new Tree(1000,580);
	ground1=new Ground(width/2,600,width,20);
	stone1 = new Stone(1000, 340, 30)
	slingshot = new Slingshot(stone1.body,{x: 1000, y: 340});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

 	tree1.display();
	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();	
	ground1.display();
	slingshot.display();

	detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
}

	function mouseDragged(){
		Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	}
	
	function mouseReleased(){
		slingshot.fly();
	}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
 }
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}

	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone1.body, {x: 235, y: 420})
			slingshot.attach(stone1.body)
		}
		
	}