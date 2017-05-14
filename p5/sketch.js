var dot;
var shape;
var spawnPoint;
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPoint = windowHeight;
  bgColor = color(21, 85, 209);
  frameRate(48);
  dot = new Dot();
  shape = new Polygon()
}

function draw() {
  background(bgColor);

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
}
