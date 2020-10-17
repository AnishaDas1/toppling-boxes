const Engine=Matter.Engine;//engine is like universe
const World=Matter.World;//world is like earth
const Bodies=Matter.Bodies;//bodies are living and non living object on the earth

var engine,world;//creatings variables
var ground,box1,box2;





function setup() {
  createCanvas(800,400);
engine=Engine.create();//in the variable engine we are creating a physics engine
world=engine.world;//inside engine we are creating a world

box1=new Box(200,300,50,50);
box2=new Box(240,100,50,100);
ground=new Ground(200,height,400,20);


}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

   box1.display();
   box2.display();
   ground.display();

  
}