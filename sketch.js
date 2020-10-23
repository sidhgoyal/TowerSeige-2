const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground2;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var box1s,box2s,box3s,box4s,box5s,box6s,box7s,box8s,box9s,box10s,box11s,box12s,box13s,box14s,box15s,box16s,box17s,box18s,box19s,box20s,box21s;
var slingshot;
var polygon;
var gamestate;

function setup() {
  
  createCanvas(800,400);
  gamestate = 0;
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(255,330,260,10);
  ground2 = new Ground(555,200,260,10);

  //first stack//////////////////////
  //1 row/////
  box1 = new Box(150,315,15,15,"lightblue");
  box2 = new Box(180,315,15,15,"lightblue");
  box3 = new Box(210,315,15,15,"lightblue");
  box4 = new Box(240,315,15,15,"lightblue");
  box5 = new Box(270,315,15,15,"lightblue");
  box6 = new Box(300,315,15,15,"lightblue");
  box7 = new Box(330,315,15,15,"lightblue");
  box8 = new Box(360,315,15,15,"lightblue");

  //2 row/////
  box10 = new Box(180,285,15,15,"lightblue");
  box11 = new Box(210,285,15,15,"lightblue");
  box12 = new Box(240,285,15,15,"lightblue");
  box13 = new Box(270,285,15,15,"lightblue");
  box14 = new Box(300,285,15,15,"lightblue");
  box15 = new Box(330,285,15,15,"lightblue");

  //3 row/////
  box17 = new Box(210,255,15,15,"lightblue");
  box18 = new Box(240,255,15,15,"lightblue");
  box19 = new Box(270,255,15,15,"lightblue");
  box20 = new Box(300,255,15,15,"lightblue");
  
  //4 row/////
  box16 = new Box(240,225,15,15,"lightblue");
  box21 = new Box(270,225,15,15,"lightblue");

  //second stack//////////////////////
  //1 row/////
  box1s = new Box(450,190,15,15,"lightblue");
  box2s = new Box(480,190,15,15,"lightblue");
  box3s = new Box(510,190,15,15,"lightblue");
  box4s = new Box(540,190,15,15,"lightblue");
  box5s = new Box(570,190,15,15,"lightblue");
  box6s = new Box(600,190,15,15,"lightblue");
  box7s = new Box(630,190,15,15,"lightblue");
  box8s = new Box(660,190,15,15,"lightblue");

  //2 row/////
  box10s = new Box(480,133,15,15,"lightblue");
  box11s = new Box(510,133,15,15,"lightblue");
  box12s = new Box(540,133,15,15,"lightblue");
  box13s = new Box(570,133,15,15,"lightblue");
  box14s = new Box(600,133,15,15,"lightblue");
  box15s = new Box(630,133,15,15,"lightblue");

  //3 row/////
  box17s = new Box(510,105,15,15,"lightblue");
  box18s = new Box(540,105,15,15,"lightblue");
  box19s = new Box(570,105,15,15,"lightblue");
  box20s = new Box(600,105,15,15,"lightblue");

  //4 row/////
  box16s = new Box(540,77,15,15,"lightblue");
  box21s = new Box(570,77,15,15,"lightblue");

  polygon = new Polygon(100,200,30,30);
  slingshot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw() {
  background(0);  
  Engine.update(engine);
  if (gamestate === 1 ) {
    textSize(25);
  text("Press space to respawn slingshot",200,50)
  }
  
  ground2.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box16.display();
  box21.display();

  box1s.display();
  box2s.display();
  box3s.display();
  box4s.display();
  box5s.display();
  box6s.display();
  box7s.display();
  box8s.display();

  box10s.display();
  box11s.display();
  box12s.display();
  box13s.display();
  box14s.display();
  box15s.display();
  
  box17s.display();
  box18s.display();
  box19s.display();
  box20s.display();
  
  box16s.display();
  box21s.display();

  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  gamestate = 1;
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    gamestate = 0
      slingshot.attach(polygon.body);
  }
}