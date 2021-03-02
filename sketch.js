var hotairballoon                                                                  

function preload(){
habimg = loadImage("Hot Air balloon-01.png/PRO C35 images")
}

function setup() {
  createCanvas(800,400);
  hotairballoon= createSprite(400, 200, 50, 50);
  hotairballoon = addImage(habimg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}