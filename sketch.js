const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var lostarm,lostarmimage;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  lostarmimage = ("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player);
  
  

  lostarm = new PlayerArcher(340,playerBase.position.y - 112,120,120);
}

function draw() {
  background(backgroundImg);

  ImageMode(CENTER);
  Engine.update(engine);
  lostarm.display()

  if(keyIsDown(RIGHT_ARROW)){
    lostarm.angle =+1;
  }

  if(keyIsDown(LEFT_ARROW)){
    lostarm.angle = -1;
  }

  push();
rotate(lostarm.angle);

  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  image(lostarmimage,lostarm.position.x,lostarm.position.y,50,180)

  

  pop();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




