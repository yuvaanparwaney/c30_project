const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, boxs1;
var backgroundImg,platform;
var bird, ss;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(1010, 220, 300, 30);

    box1s = new Box(900,180,70,70);
    box2s = new Box(1120,180,70,70);
    boxs1s = new Boxs(1010, 170);

    box3s = new Box(900,100,70,70);
    box4s = new Box(1120,100,70,70);
    boxs3s = new Boxs(1010, 120);

    box5s = new Box(1010,-140,70,70);

    box1x = new Box(500,350,70,70);
    box2x = new Box(720,350,70,70);
    boxs1x = new Boxs(610, 350);

    box3x = new Box(500,270,70,70);
    box4x = new Box(720,270,70,70);
    boxs3x = new Boxs(610, 304);

    box5x = new Box(610,-290,70,70);

    player = new Player(100,100);

    ss = new SlingShot(player.body,{x: 200, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1s.display();
    box2s.display();
    ground.display();
    boxs1s.display();

    box3s.display();
    box4s.display();
    boxs3s.display();

    box5s.display();

    box1x.display();
    box2x.display();
    ground.display();
    boxs1x.display();

    box3x.display();
    box4x.display();
    boxs3x.display();

    box5x.display();

    player.display();
    platform.display();
    ss.display();  
}
function mouseDragged(){
    Matter.Body.setPosition(player.body,{x: mouseX, y:mouseY});
}
function mouseReleased(){
    ss.fly();
}
