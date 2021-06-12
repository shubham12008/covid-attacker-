const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var engine, world;
var backgroundImg,screen ;
var xpos,ypos;
var launcher_1img,launcher_1;


function preload(){
  backgroundImg = loadImage("images/Background Angry bird.jpg");
  launcher_1img = loadImage("images/injection launcher.png");

}

function setup() {
  createCanvas(4600,1500);
  engine = Engine.create();
  world = engine.world;

  screen = createSprite(width/2,height/2,4600,1500);
  screen.visible = false ;

  launcher_1 = createSprite(500,940,20,500);
  launcher_1.addImage(launcher_1img);

  ground = new Ground(width/2,height-40,4700,130);
  plartform = new Plartform

  CYB = new Crystal_block (2000,200,350,130);
  CB = new Concreat_block (1000,200,350,130);
  CL = new Concreat_log (3000,200,500,0);
  CYL = new Crystal_log(3500,200,500,0);
  CYL2 = new Crystal_log(3400,200,500,0);



  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 4600,
		  height: 1500,
		  wireframes: false
		}
	  });
 
  Engine.run(engine);
  Render.run(render);
}

function draw() {
  background(backgroundImg);
  check_cordinates();


  
  if(keyIsDown(RIGHT_ARROW)){
    launcher_1.x = 500;
    launcher_1.y = 940;
   }
   else if(keyIsDown(LEFT_ARROW)){
    launcher_1.x = 500;
    launcher_1.y = 900;
   }
   else if (keyIsDown(32)) {
    launcher_1.x = 500;
    launcher_1.y = 940;
    launcher_1.rotation = 0;
  }
  if(keyIsDown(RIGHT_ARROW) && launcher_1.rotation < 18){
    launcher_1.rotation = launcher_1.rotation+3;
   }
   else if(keyIsDown(LEFT_ARROW) && launcher_1.rotation > -12){
    launcher_1.rotation = launcher_1.rotation-3;  
   }

   plartform.display();


   CYB.display();
   CB.display();
  CL.display();
  CYL.display();
  CYL2.display();
   ground.display();

  drawSprites();
}


function mouseDragged(){}

function mouseReleased(){}

function keyPressed(){
  if (keyCode === 32)
  {}}


function check_cordinates(){
  textSize(45);
  text("X position "+ xpos,300,50);
  text("Y position "+ ypos,300,100);

if (mousePressedOver(screen)){
  xpos = mouseX;
  ypos = mouseY;

  console.log(xpos,ypos,launcher_1.rotation);
 
}
}  