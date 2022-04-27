const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var ball, ground, basket

function preload(){

}

function setup(){
createCanvas(1000,600)
engine = Engine.create();
world = engine.world
ball = new Ball()
basket = new Basket()
ground = new Ground()
rectMode(CENTER)

Engine.run(engine);

}

function draw(){
background("blue")
//Engine.update(engine)
ball.display()
basket.display()
ground.display()

if( keyIsDown(UP_ARROW)){
  //  console.log("working");
    Matter.Body.applyForce(ball.body, ball.body.position,{x:3, y:-05});
}

}

