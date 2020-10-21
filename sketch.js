var ground1,ground2;
var target1,target2,target3,target4,target5,target6,target7,target8,target9,target10,target11,target12,target13,target14;
var target15,target16,target17,target18,target19,target20;
var target21,target22,target23,target24,target25;
var ball;
var sling;
var score = 0;
var backgroundImg;
var bg = "Images/bg1.png";


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
    getBackgroundImg();
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,550,1200,10);
	ground2 = new Ground(600,350,300,10);

	target1 = new Target(600,330,30,30);
	target2 = new Target(630,320,30,30);
	target3 = new Target(660,320,30,30);
	target4 = new Target(690,320,30,30);
	target5 = new Target(570,320,30,30);
	target6 = new Target(540,320,30,30);
	target7 = new Target(510,320,30,30  );
	target8 = new Target(480,320,30,30  );
	target9 = new Target(720,320,30,30  );

	target10 = new Target(510,290,30,30  );
	target11 = new Target(540,290 ,30,30 );
	target12 = new Target(570,290  ,30,30);
	target13 = new Target(600,290 ,30,30 );
	target14 = new Target(630,290  ,30,30);
	target15 = new Target(660,290  ,30,30);
	target16 = new Target(690,290  ,30,30);

	target17 = new Target(540,260 ,30,30 );
	target18 = new Target(570,260  ,30,30);
	target19 = new Target(600,260  ,30,30);
	target20 = new Target(630,260  ,30,30);
	target21 = new Target(660,260  ,30,30);
	
	target22 = new Target(570,230  ,30,30);
	target23 = new Target(600,230  ,30,30);
	target24 = new Target(630,230  ,30,30);

	target25 = new Target(600,200  ,30,30);



	ball = new Ball(100,120 ,30,30 );

    sling = new Sling(ball.body,{x:200, y:100});
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  
	target1.display();
	target2.display();
	target3.display();
	target4.display();
	target5.display();
	target6.display();
	target7.display();
	target8.display();
	target9.display();

	target10.display();
	target11.display();
	target12.display();
	target13.display();
	target14.display();
	target15.display();
	target16.display();
	
	target17.display();
	target18.display();
	target19.display();
	target20.display();
	target21.display();

	target22.display();
	target23.display();
	target24.display();

	target25.display();

	target1.score();
	target2.score();
	target3.score();
	target4.score();
	target5.score();
	target6.score();
	target7.score();
	target8.score();
	target9.score();
	target10.score();
	target11.score();
	target12.score();
	target13.score();
	target14.score();
	target15.score();
	target16.score();
	target17.score();
	target18.score();
	target19.score();
	target20.score();
	target21.score();
	target22.score();
	target23.score();
	target24.score();
	target25.score();

	textSize(20);
	fill("white");
	text("SCORE:"+score,750,40);
	
	


	ball.display();

	sling.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
		sling.attach(ball.body);
	}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "Images/bg1.png";
    }
    else{
        bg = "Images/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}