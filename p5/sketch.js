var t=1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(255, 0, 100);

  //basicMaterial(255, 0, 0);
  ambientLight(255, 0, 0);

  directionalLight(255, 100, 0, 0.1, -1, 0, sin(t / 2));

  directionalLight(0, 0, 200, 0.1, 1, 0, sin(t));

  //  	directionalLight(0, 0, 255, 0.1,  0.5, 1, sin(t*10));

  rotateY(frameCount / 100);
  rotateX(map(sin(t), -1, 1, -PI, PI));

  sphere(300, 50);

  t += 0.025;
}
