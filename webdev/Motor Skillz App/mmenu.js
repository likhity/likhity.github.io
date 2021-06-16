let button;
let title;
let title2;
let backButton;

function setup() {
  var myCanvas = createCanvas(450, 800);
  background(243,243,243);
  // textAlign(CENTER);
  // textFont("Patrick Hand", 60);
  // text("Motor Skillz", 225, 175);
  title = createDiv('Motor Skillz');
  title.style('font-family', 'Patrick Hand');
  title.position(95,112);
  title.style('font-size', '60px');
  title2 = createDiv('What game do you want to play?');
  title2.position(70,112);
  title2.style('width', '300px');
  title2.style('font-size', '25px');
  title2.style('font-family', 'Comfortaa');
  title2.style('text-align', 'center');
  title2.style('word-wrap', 'break-word')
  title2.hide();
  button = createButton("Let's Play!");
  button.position(150,400);
  button.mousePressed(showGames);
  button.mouseOver(function() {
    button.style('background-color', ' #a01313');
  });
  button.mouseOut(function() {
    button.style('background-color', ' #e62e2eff');
  });
  button.style('background-color', '#e62e2eff');
  button.style('color', '#fff');
  button.style('font-family', 'Patrick Hand');
  button.style('font-size', '20px');
  button.style('padding', "15px 32px");
  button.style('border', 'none');
}

function draw() {
  
}

function showGames() {
  button.hide();
  title.hide();
  title2.show();
  
  let colorInsideTheLines = createButton("Color Inside The Lines!");
  let dragTheLine = createButton("Match Me!");
  let starGame = createButton("Catch The Stars!");
  let backButton = createButton("Back");

  colorInsideTheLines.position(100,300);
  dragTheLine.position(150,375);
  starGame.position(125,450);
  backButton.position(170,525);
  
  let col = color(72, 201, 112, 255);
  let white = color(255, 255, 255, 255);
  colorInsideTheLines.style('background-color', '#48c970');
  colorInsideTheLines.style('font-family', 'Patrick Hand');
  colorInsideTheLines.style('font-size', '20px');
  colorInsideTheLines.style('color', white);
  colorInsideTheLines.style('padding', "15px 32px");
  colorInsideTheLines.style('border', 'none');
  colorInsideTheLines.mouseOver(function() {
    colorInsideTheLines.style('background-color', ' #1d6233');
  });
  colorInsideTheLines.mouseOut(function() {
    colorInsideTheLines.style('background-color', ' #48c970');
  });
  
  
  starGame.style('background-color', '#7a3aff');
  dragTheLine.style('font-family', 'Patrick Hand');
  dragTheLine.style('font-size', '20px');
  dragTheLine.style('color', white);
  dragTheLine.style('padding', "15px 32px");
  dragTheLine.style('border', 'none');
  dragTheLine.mouseOver(function() {
    dragTheLine.style('background-color', ' #804d00');
  });
  dragTheLine.mouseOut(function() {
    dragTheLine.style('background-color', ' #ff9900ff');
  });
  
  dragTheLine.style('background-color', '#ff9900ff');
  starGame.style('font-family', 'Patrick Hand');
  starGame.style('font-size', '20px');
  starGame.style('color', white);
  starGame.style('padding', "15px 32px");
  starGame.style('border', 'none');

  starGame.mouseOver(function() {
    starGame.style('background-color', ' #280080');
  });
  starGame.mouseOut(function() {
    starGame.style('background-color', ' #7a3aff');
  });

  backButton.style('background-color', 'rgb(165,165,165)');
  backButton.style('font-family', 'Patrick Hand');
  backButton.style('font-size', '20px');
  backButton.style('color', white);
  backButton.style('padding', "15px 32px");
  backButton.style('border', 'none');
  
  backButton.mouseOver(function() {
    backButton.style('background-color', 'rgb(0,0,0)');
  });
  backButton.mouseOut(function() {
    backButton.style('background-color', ' rgb(165,165,165)');
  });

  colorInsideTheLines.mousePressed(visitColor);
  starGame.mousePressed(visitCatch);
  dragTheLine.mousePressed(visitMatch);
  backButton.mousePressed(function() {
    window.location = 'index.html';
  });
}
  function visitColor(){
        window.location='colorInsideTheLines.html';
    }
  function visitCatch() {
        window.location='catchTheStars.html';
  }

function visitMatch() {
  window.location = 'matchme.html';
}

  
