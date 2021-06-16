let rectangle;
let circ;
let starr;

let rectX = 0;
let rectY = 0;

let circX = 0;
let circY = 0;

let starX = 0;
let starY = 0;

let rectSnapped = false;
let circSnapped = false;
let starSnapped = false;

let mainMenuButton;
let playAgainButton;

let snapSound;
let successSound;
let voiceover;

let success = false;

let shapesSnapped = 0;

function preload() {
  snapSound = loadSound('snap.mp3');
  successSound = loadSound('success.mp3');
  //voiceover = loadSound("voiceover.mp3");
}

function setup() {
  createCanvas(450, 800);
  playAgainButton = createButton("Play Again");
  mainMenuButton = createButton("Go To Main Menu");
  mainMenuButton.position(150,500);
  playAgainButton.position(170,400);
  mainMenuButton.style('background-color', 'rgb(255,0,0)');
  mainMenuButton.style('font-family', 'Patrick Hand');
  mainMenuButton.style('font-size', '20px');
  mainMenuButton.style('color', '#fff');
  mainMenuButton.style('padding', "15px 32px");
  mainMenuButton.style('border', 'none');
  playAgainButton.style('background-color', 'rgb(255,0,0)');
  playAgainButton.style('font-family', 'Patrick Hand');
  playAgainButton.style('font-size', '20px');
  playAgainButton.style('color', '#fff');
  playAgainButton.style('padding', "15px 32px");
  playAgainButton.style('border', 'none');
  playAgainButton.mouseOver(function() {
    playAgainButton.style('background-color', 'rgb(220,0,0)');
  });
  mainMenuButton.mouseOver(function() {
    mainMenuButton.style('background-color', 'rgb(220,0,0)');
  });
  playAgainButton.mouseOut(function() {
    playAgainButton.style('background-color', 'rgb(255,0,0)');
  });
  mainMenuButton.mouseOut(function() {
    mainMenuButton.style('background-color', 'rgb(255,0,0)');
  });
  playAgainButton.mousePressed(function() {
    window.location = "matchme.html";
  });
  mainMenuButton.mousePressed(function() {
    window.location = "index.html";
  });
  playAgainButton.hide();
  mainMenuButton.hide();
  rectX = random(100,width-100);
  rectY = random(100,height-100);
  circX = random(100,width-100);
  circY = random(100,height-100);
  starX = random(100, width-100);
  starY = random(100, height-100);
  fill(221, 230, 127);
  rectangle = new Rectangle(random(0,width),random(0,height),100,100);
  fill(172, 220, 252);
  circ = new Circ(random(0,width),random(0,height),100);
  fill(194, 238, 218);
  starr = new Star(random(0,width),random(0,height),50,100,5);
  //voiceover.play();
}

function draw() {
  background("#ff9900ff");
  fill(221, 230, 127);
  rectangle.show(mouseX, mouseY);
  fill(172, 220, 252);
  circ.show(mouseX, mouseY);
  fill(194, 238, 218);
  starr.show(mouseX,mouseY);
  noFill();
  stroke(255);
  strokeWeight(10);
  rect(rectX,rectY,100,100);
  circle(circX,circY,100);
  star(starX,starY,50,100,5);
  strokeWeight(0);
  
  
  fill(255);
  textAlign(CENTER);
  textFont("Comfortaa", 30);
 
  text("Match Me!", width/2, 125);
  textFont("Patrick Hand", 20);
  text("Click and drag the shapes.", width/2, 155);
  text("Once a shape is inside its outline, click to snap in place.", width/2, 180);
  
  if (mouseIsPressed) {
  rectangle.pressed(mouseX, mouseY);
  circ.pressed(mouseX, mouseY);
  starr.pressed(mouseX, mouseY);
  }
  
  if (shapesSnapped == 3) {
    textFont("Patrick Hand", 75);
    text("Good Job!", width/2,300);
    playAgainButton.show();
    mainMenuButton.show();
    if (!success) {
      successSound.play();
      success = true;
    }
  }
}


function mousePressed() {
  
}

function mouseReleased() {
  rectangle.notPressed();
  circ.notPressed();
  starr.notPressed();
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;
    this.rollover = false;
  }

  show(px, py) {
    if (this.dragging) {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
    }

    stroke(255);
    rect(this.x, this.y, this.w, this.h);
  }

  pressed(px, py) {
    
    if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
      if (dist(rectX,rectY,this.x,this.y) > 20) {
      this.dragging = true;
      this.offsetX = this.x - px;
      this.offsetY = this.y - py;
      }
      else {
        if (!rectSnapped) {
        this.dragging = false;
        this.x = rectX;
        this.y = rectY;
        snapSound.play();
        shapesSnapped++;
          rectSnapped = true;
        }
      }
    }
  }

  notPressed(px, py) {
      this.dragging = false;
  }
}

class Circ {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;
    this.rollover = false;
  }

  show(px, py) {
    if (this.dragging) {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
    }

    stroke(255);
    circle(this.x, this.y, this.diameter);
  }

  pressed(px, py) {
    if (dist(px,py,this.x,this.y) < this.diameter) {
      if (dist(circX,circY,this.x,this.y) > 20) {
      this.dragging = true;
      this.offsetX = this.x - px;
      this.offsetY = this.y - py;
      }
      else {
        if (!circSnapped) {
        this.dragging = false;
        this.x = circX;
        this.y = circY;
        snapSound.play();
        shapesSnapped++;
          circSnapped = true;
        }
      }
    }
  }

  notPressed(px, py) {
      this.dragging = false;
  }
}

class Star {
  constructor(x, y, r1, r2, npoints) {
    this.x = x;
    this.y = y;
    this.radius1 = r1;
    this.radius2 = r2;
    this.npoints = npoints;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;
    this.rollover = false;
  }

  show(px, py) {
    if (this.dragging) {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
    }

    stroke(255);
    star(this.x, this.y, this.radius1, this.radius2, this.npoints);
  }

  pressed(px, py) {
    if (dist(px,py,this.x,this.y) < this.radius1) {
      if (dist(starX,starY,this.x,this.y) > 20) {
      this.dragging = true;
      this.offsetX = this.x - px;
      this.offsetY = this.y - py;
      }
      else {
        if (!starSnapped) {
        this.dragging = false;
        this.x = starX;
        this.y = starY;
        snapSound.play();
        shapesSnapped++;
          starSnapped = true;
        }
      }
    }
  }

  notPressed(px, py) {
      this.dragging = false;
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