let radius = 150;
let dx;
let dy;
let distance;

let errorSound;
let successSound;

let mouseColor;
let mouseColor2;
let mouseColor3;
let mouseColor4;

let black = [0,0,0,255];

let success = false;
let buttonsCreated = false;

let points;

let circleOrSquare = 0;

let sq
let circ;

let squarePoints = 300;
let circlePoints = 150;

let button;
let mainMenuButton;

function preload() {
  errorSound = loadSound('error.mp3');
  successSound = loadSound('success.mp3');
  
}

function setup() {
  if (!buttonsCreated) {
  button = createButton('Draw Inside Another Shape!');
  mainMenuButton = createButton('Go To Main Menu');
  button.position(96, 450);
  button.mousePressed(switchShape);
  button.style('background-color', '#369c56');
  button.style('font-family', 'Patrick Hand');
  button.style('font-size', '20px');
  button.style('color', '#fff');
  button.style('padding', "15px 32px");
  button.style('border', 'none');
  button.mouseOver(function() {
    button.style('background-color', '#153E22');
  });
  button.mouseOut(function() {
    button.style('background-color', '#369c56');
  });
  mainMenuButton.position(135, 525);
  mainMenuButton.mousePressed(mainMenu);
  mainMenuButton.style('background-color', '#369c56');
  mainMenuButton.style('font-family', 'Patrick Hand');
  mainMenuButton.style('font-size', '20px');
  mainMenuButton.style('color', '#fff');
  mainMenuButton.style('padding', "15px 32px");
  mainMenuButton.style('border', 'none');
  mainMenuButton.mouseOver(function() {
    mainMenuButton.style('background-color', '#153E22');
  });
  mainMenuButton.mouseOut(function() {
    mainMenuButton.style('background-color', '#369c56');
  });
  buttonsCreated = true;
  }
  button.hide();
  mainMenuButton.hide();
  success = false;
  if (circleOrSquare == 0) {
  createCanvas(450, 800);
  background(72, 201, 112);
  strokeWeight(5);
  //arc(225, 400, 300, 300, 0, PI + QUARTER_PI, PIE);
  sq = rect(75,250,300, 300);
  fill(255);
  textAlign(CENTER);
  textFont("Comfortaa", 30);
  text("Color Inside The Lines!", width/2, 125);
  textFont("Patrick Hand", 20);
  textFont("Patrick Hand", 23);
  text("Points: ", 175, 650);
  points = 0;
  fill(243);
  text("Get at least " + squarePoints + " points!", width/2, 225);
  }
  
  if (circleOrSquare == 1) {
    
  createCanvas(450, 800);
  background(72, 201, 112);
  strokeWeight(5);
  //arc(225, 400, 300, 300, 0, PI + QUARTER_PI, PIE);
  circ = circle(225,400,300);
  fill(255);
  textAlign(CENTER);
  textFont("Comfortaa", 30);
  text("Color Inside The Lines!", width/2, 125);
  textFont("Patrick Hand", 23);
  text("Points: ", 175, 650);
  points = 0;
  //fill(243);
  text("Get at least " + circlePoints + " points!", width/2, 225);
  }
}

function draw() {
  
  fill(72, 201, 112);
  strokeWeight(0);
  rect(0,620,width,50);
  fill(255);
  textFont("Patrick Hand", 25);
  text("Points: " + Math.ceil(points), width/2, 650);


  if (circleOrSquare == 0) {
    
  if (points > squarePoints) {
    textFont("Patrick Hand", 50);
    text("Success!", 225,400);
    if (!success) {
      successSound.play();
      success = true;
    }
    button.show();
    mainMenuButton.show();
  }
    
  }
  
  if (circleOrSquare == 1) {
  distance = dist(mouseX, mouseY, width/2, height/2)
    if (points > circlePoints) {
    textFont("Patrick Hand", 50);
    text("Success!", 225,400);
    if (!success) {
      successSound.play();
      success = true;
    }
    button.show();
      mainMenuButton.show();
  }
  
  }
  
}

function mouseDragged() {
  mouseColor = get(mouseX+10, mouseY);
  mouseColor2 = get(mouseX-10, mouseY);
  mouseColor3 = get(mouseX,mouseY-10);
  mouseColor3 = get(mouseX,mouseY+10);
  let speed = 0.05 * abs(winMouseX - pwinMouseX);
  let speed2 = 0.05 * abs(winMouseY - pwinMouseY);
  if (circleOrSquare == 0) {
  if (mouseColor >= [255, 255, 255, 255] || (mouseColor2 >= [255, 255, 255, 255])|| (mouseColor3 >= [255, 255, 255, 255]) || (mouseColor4 >= [255, 255, 255, 255])) {
    if (success == false) {
     points += Math.sqrt(speed * speed + speed2 * speed2);
    }
  }
  if (mouseX > 65 && mouseX < 385 && mouseY < 560 && mouseY > 240) {
    if (success == false) {
    fill(0);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    drawSound.play();
    }
  }
  else {
    if (success == false) {
    errorSound.play();
    clear();
    setup();
    }
  }
  }
  
  if (circleOrSquare == 1) {
  if (mouseColor >= [255, 255, 255, 255] || (mouseColor2 >= [255, 255, 255, 255])|| (mouseColor3 >= [255, 255, 255, 255]) || (mouseColor4 >= [255, 255, 255, 255])) {
    if (success == false) {
    points += Math.sqrt(speed * speed + speed2 * speed2);
    }
  }
  if (distance < radius) {
    if (success == false) {
    fill(0);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  else {
    if (success == false) {
    errorSound.play();
    clear();
    setup();
    }
  }
  }
  
}


function switchShape() {
  if (circleOrSquare == 1) {
    circleOrSquare = 0;
  }
  else {
    circleOrSquare = 1;
  }
  success = false;
  setup();
}

function mainMenu() {
  window.location = 'index.html';
}