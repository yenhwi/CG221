var dot;
var shape;
var spawnPoint;
var bgColor;
var song1;
var song2;
var song3;
var song4;
var img;


function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPoint = windowHeight;
  bgColor = color(21, 85, 209);
  frameRate(48);
  dot = new Dot();
  shape = new Polygon()
}

function draw() {

  textSize(40);
  text('Move the mouse to the background color that you like, and the music will change', 20, 50);
}

  if(mouseIsPressed){
    background('#ff9999');
  } else {
    background(mouseX, 60, mouseY);
  }


  dot.update();
  shape.draw();
  drawCover();
  watchDot();
}

var watchDot = function() {
  if (dot.getY() > spawnPoint) {
    dot = new Dot();
    shape = new Polygon();
  }
}

var drawCover = function() {
  noStroke();
  fill(bgColor);
  rect(0, round(windowHeight/1.5), windowWidth, windowHeight/2);
  fill(255);
  rect(round(windowWidth/5) + round(windowWidth/5), round(windowHeight/1.5), round(windowWidth/5), 1);
}

var Dot = function() {
  var velConst      = windowHeight / 40;
  var gravConst     = velConst / 60;
  var location      = createVector(windowWidth / 2, spawnPoint);
  var gravity       = createVector(0, gravConst);
  var velocity      = createVector(0, 0);
  var acceleration  = createVector(0, -velConst);
  var topSpeed      = velConst;

  var update = function() {
    velocity.add(acceleration);
    velocity.add(gravity);
    velocity.limit(topSpeed);
    location.add(velocity);
    acceleration.mult(0);
  }

  var draw = function() {
    noStroke();
    fill(255);
    ellipse(location.x, location.y, 3, 3);
    update();
  }

  var getY = function() {
    return location.y;
  }

  return {
    'draw': draw,
    'update': update,
    'getY': getY
  }
}

var Polygon = function() {
  var sides     = Math.floor(random(3, 7));
  var cx        = windowWidth/2;
  var cy;
  var angle     = random(0, 360);
  var radius    = windowWidth / 12;
  var angSpeed  = random(-10, 10);
  var color     = floor(random(0, 2)) % 2 ? 0 : 255;

  var updatePoints = function() {
    cy = dot.getY();
    points = [];
    for (var i = 0; i < sides; i++) {
      var a = angle + (i / sides) * 360;
      var x = cx + (cos(radians(a)) * radius);
      var y = cy + (sin(radians(a)) * radius);
      points.push([x, y]);
    }
    angle = angle + angSpeed;
  }

  var draw = function() {
    updatePoints();

    fill(color);
    noStroke();
    beginShape();
    for (var i = 0; i < sides; i++) {
      vertex(points[i][0], points[i][1]);
    }
    endShape(CLOSE);
  }

  return {
    'draw': draw
  }
  function uniHide{
    img.hide();
  }

  function unShow(){
    img.show();
  }

  function keyPressed(){
    uniShow();
  }

  function mouseMoved() {
    if ( mouseX > 600 && mouseY > 400) {
      if (song1.isPlaying() == false ){ //if this song is not playing
        song1.play(); //play this song
      }
      //stop all other songs from playing
      song2.stop();
      song3.stop();
      song4.stop();
    } else if ( mouseX > 600 && mouseY < 400) {
      if (song2.isPlaying() == false ){ //if this song is not playing
        song2.play();
      }
      //stop all other songs from playing
      song1.stop();
      song3.stop();
      song4.stop();
    } else if ( mouseX < 600 && mouseY < 400) {
      if (song3.isPlaying() == false ){ //if this song is not playing
        song3.play();
      }
      //stop all other songs from playing
      song1.stop();
      song2.stop();
      song4.stop();
    } else {
      if (song4.isPlaying() == false ){ //if this song is not playing
        song4.play();
      }
      //stop all other songs from playing
      song1.stop();
      song2.stop();
      song3.stop();
    }
  }
