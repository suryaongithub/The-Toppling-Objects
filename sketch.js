var engine;
var world

var ground;
var boxes;
var group_1;

info = {
square:{
  checker:true,
  side:25,
  color:"white"
  },
rectangle:{
  checker:false,
  width:25,
  height:35,
  color:"white"
},
circle:{
  checker:false,
  radius:25,
  color:"white"
}
}

var objects=[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function setup() {
  createCanvas(400,400);

  

  engine = Engine.create();
  world = engine.world;

  ground=Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(world,ground);
  rectMode(CENTER);

  cursor(CROSS);

  console.log("you can use the function switchToSquare(side,color) to switch to square");
  console.log("you can use the function switchToCircle(radius,color) to switch to circle");
  console.log("you can use the  to switch to circle switchToRectangle (width,height,color) to switch to rectangle")
  
}




function draw() 
{
  background(51);

  fill("green");
  rect(ground.position.x,ground.position.y,400,10);

  Engine.update(engine);
  
  
    for (var i = 0 ;objects.length>i;i++)
    {
      objects[i].display()
    }
    
    
}

function mousePressed()
{
  if(info.square.checker===true){
    objects[objects.length] = new Box (mouseX,mouseY,info.square.side,info.square.side,info.square.color);
    
    }

  if(info.circle.checker===true){
    objects[objects.length] = new Circle (mouseX,mouseY,info.circle.radius,info.circle.color);
    }

  if(info.rectangle.checker===true){
    objects[objects.length] = new Box (mouseX,mouseY,info.rectangle.width,info.rectangle.height,info.rectangle.color);
    }

 }

function anyOne(array)
{
  return array[Math.round(random(0,array.length-1))];
}

function switchToCircle(radius,color)
{
  info.circle.checker=true;
  info.circle.radius=radius,
  info.square.checker=false;
  info.rectangle.checker=false;
  info.circle.color=color;
  return "done"
}

function switchToSquare(side,color)
{
  info.circle.checker=false;
  info.square.checker=true;
  info.rectangle.checker=false;
  info.square.side=side;
  info.square.color=color;
  return "done"
}

function switchToRectangle (width,height,color)
{
  info.circle.checker=false;
  info.square.checker=false;
  info.rectangle.checker=true;
  info.rectangle.width=width;
  info.rectangle.height=height;
  info.rectangle.color=color;
  return "done"
}
