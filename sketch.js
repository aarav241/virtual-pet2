var database;
var foods=20;
var gamestate = 0;
var Form;
var bottle,bottle1,bottle2,bottle3;

function preload()
{
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
  milk=loadImage("images/Milk.png")
}

function setup() {
  database = firebase.database();
  
  createCanvas(800, 600);

  dog=createSprite(500,490,50,50);
  dog.addImage(dog1);
  dog.scale = 0.3;

bottle = createSprite(100,200,50,50);
bottle.addImage(milk);
bottle.scale = 0.1;

bottle1 = createSprite(100,300,50,50);
bottle1.addImage(milk);
bottle1.scale = 0.1;

bottle2 = createSprite(100,400,50,50);
bottle2.addImage(milk);
bottle2.scale = 0.1;

bottle3 = createSprite(100,500,50,50);
bottle3.addImage(milk);
bottle3.scale = 0.1;

  Form= new form;
Form.display();

}


function draw() {  
background("green");
if(gamestate===0){
  Form.display();
}
if(gamestate===1){
drawSprites();

if (keyCode === 38) {
  dog.x=bottle3.x;
  bottle3.visible=false;
dog.addImage(dog2)
  
  }
  if (keyWentUp = UP_ARROW){
    dog.x=500;
  }
}
}



