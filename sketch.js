var bg,bg2,form,code,security;
var score = 0;

function preload() {
  bg = loadImage("images/aladdin_cave.jpg");
  bg2 = loadImage("images/treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);


  if(score === 3) {
    clear();
    background(bg2);
    stroke(4);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites();
}