let points = 0;

let popSound;
let errorSound;
let successSound;

let numberOfStars = 50;

let played = false;

var timerValue = 30;
var currentLevelSeconds;
var startButton;

let button;
let mainMenuButton;
let harderButton;
let div;

let difficulty = 1;

let buttonsCreated = false;
s
function preload() {
  popSound = loadSound('pop.mp3');
  errorSound = loadSound('error.mp3');
  successSound = loadSound('success.mp3');
}

var circles = [];

function setup() {
  if (buttonsCreated == false) {
    div = createDiv('').size(450, 0);
    button = createButton('Try Again');
    mainMenuButton = createButton('Go To Main Menu');
    harderButton = createButton(difficultyText());
    button.position(0, 355);
    button.mousePressed(playAgain);
    button.style('background-color', '#7a3aff');
    button.style('font-family', 'Patrick Hand');
    button.style('font-size', '20px');
    button.style('color', '#fff');
    button.style('padding', "15px 32px");
    button.style('border', 'none');
    mainMenuButton.position(135, 445);
    mainMenuButton.mousePressed(mainMenu);
    mainMenuButton.style('background-color', '#7a3aff');
    mainMenuButton.style('font-family', 'Patrick Hand');
    mainMenuButton.style('font-size', '20px');
    mainMenuButton.style('color', '#fff');
    mainMenuButton.style('padding', "15px 32px");
    mainMenuButton.style('border', 'none');
    mainMenuButton.position(135, 445);
    harderButton.position(165, 355);
    harderButton.mousePressed(harder);
    harderButton.style('background-color', '#7a3aff');
    harderButton.style('font-family', 'Patrick Hand');
    harderButton.style('font-size', '20px');
    harderButton.style('color', '#fff');
    harderButton.style('padding', "15px 32px");
    harderButton.style('border', 'none');
    button.id('again');
    harderButton.id('difficultyText');
    button.mouseOver(function () {
      button.style('background-color', '#3D1D7F');
    });
    button.mouseOut(function () {
      button.style('background-color', '#7a3aff');
    });
    mainMenuButton.mouseOver(function () {
      mainMenuButton.style('background-color', '#3D1D7F');
    });
    mainMenuButton.mouseOut(function () {
      mainMenuButton.style('background-color', '#7a3aff');
    });
    harderButton.mouseOver(function () {
      harderButton.style('background-color', '#3D1D7F');
    });
    harderButton.mouseOut(function () {
      harderButton.style('background-color', '#7a3aff');
    });
    button.parent(div);
    button.center('horizontal');
    mainMenuButton.parent(div);
    mainMenuButton.center('horizontal');
    buttonsCreated = true;
  }

  createCanvas(450, 800);
  button.hide();
  mainMenuButton.hide();
  harderButton.parent(div);
  harderButton.center('horizontal');
  harderButton.hide();
  noStroke();

  for (var i = 0; i < numberOfStars; i++) {
    var x = random(width);
    var y = random(height);
    var d = random(20, 150);
    var c = color(random(240), random(240), 255);
    var s = randomSpeed();
    circles[i] = new DrawCircle(x, y, d, c, s);
  }

  textAlign(CENTER);
  //setInterval(timeIt, 1000);
  currentLevelSeconds = timerValue;
}

function draw() {
  background(243);

  if (frameCount % 60 == 0 && timerValue > 0) {
    timerValue--;
  }

  for (var i = 0; i < circles.length; i++) {

    circles[i].move();
    circles[i].display();

  }

  fill(0);

  textFont("Comfortaa", 30);
  if (timerValue > currentLevelSeconds - 5) {
    text("Catch All The Stars", width / 2, 100);
    text("Before The Time Runs Out!", width / 2, 135);
  }
  else {
    text("Level " + difficulty, width / 2, 125);
  }
  textFont("Patrick Hand", 25);

  if (timerValue == 0 && points != numberOfStars) {
    document.getElementById('again').innerHTML = 'Try Again';
    textFont("Patrick Hand", 60);
    text('game over!', width / 2, height / 2 - 100);
    button.show();
    mainMenuButton.show();
    if (!played) {
      errorSound.play();
      played = true;
    }
  }

  if (points == numberOfStars) {
    background(243);
    textFont("Patrick Hand", 60);
    text('Good Job!', width / 2, height / 2 - 100);
    mainMenuButton.show();
    harderButton.show();
    if (!played) {
      successSound.play();
      played = true;
    }
  }

  textSize(25);
  if (timerValue >= 10) {
    text("0:" + timerValue, 410, 32);
  }
  if (timerValue < 10) {
    text("0:0" + timerValue, 410, 32);
  }

  fill(0);
  textFont("Patrick Hand", 25);
  text("Stars Popped: " + points, width / 2, 650);

}


function mousePressed() {
  for (var i = 0; i < circles.length; i++) {
    if (dist(mouseX, mouseY, circles[i].xPos, circles[i].yPos) < (circles[i].diameter / 2 + 10) && timerValue != 0) {
      circles.splice(i, 1);
      points++;
      popSound.play();
    }
  }
}

function DrawCircle(x, y, d, c, s) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
  this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
  constructor: DrawCircle,

  display: function () {
    fill(this.color);
    star(this.xPos, this.yPos, this.diameter, this.diameter - 50, 5);
  },
  move: function () {
    this.yPos += this.speed;

    if (this.yPos - this.diameter / 2 > height) {
      this.yPos = -this.diameter / 2;
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// function timeIt() {
//   if (timerValue > 0) {
//     timerValue--;
//   }
// }

function playAgain() {
  window.location = 'catchTheStars.html';
}

function mainMenu() {
  window.location = 'index.html';
}

function harder() {
  difficulty++;
  if (difficulty < 6) {
    timerValue = 30 + (difficulty - 1) * 3;
  }
  numberOfStars += 5;
  points = 0;
  played = false;
  document.getElementById('difficultyText').innerHTML = difficultyText();
  setup();
}

function difficultyText() {
  if (difficulty == 1) {
    return "Harder?";
  }
  else if (difficulty == 2) {
    return "Even Harder?";
  }
  else if (difficulty == 3) {
    return "Even More Harder?";
  }
  else if (difficulty == 4) {
    return "Extremely Hard?";
  }
  else {
    return "Okay, you're hacking.";
  }
}

function randomSpeed() {
  if (difficulty < 4) {
    return random(1, 4);
  }
  else {
    return random(2, 5);
  }
}