var t=1;
var song1;
var song2;
var song3;
var song4;

function preload() {
  song1 = loadSound('Itantme.mp3');
  song2 = loadSound('24.mp3');
  song3 = loadSound('Marshmello.mp3');
  song4 = loadSound('Paris.mp3');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  noStroke();
}

function draw() {
  if(mouseIsPressed){
    background('#ff9999');
  } else {
    background(mouseX, 60, mouseY);
  }


  //basicMaterial(255, 0, 0);
  ambientLight(255, 0, 0);

  directionalLight(255, 100, 0, 0.1, -1, 0, sin(t / 2));

  directionalLight(0, 0, 200, 0.1, 1, 0, sin(t));

  //  	directionalLight(0, 0, 255, 0.1,  0.5, 1, sin(t*10));

  rotateY(frameCount / 100);
  rotateX(map(sin(t), -1, 1, -PI, PI));

  sphere(100, 50);

  t += 0.025;
}

function mouseMoved() {
  if ( mouseX > 400 && mouseY > 300) {
    if (song1.isPlaying() == false ){ //if this song is not playing
      song1.play(); //play this song
    }
    //stop all other songs from playing
    song2.stop();
    song3.stop();
    song4.stop();
  } else if ( mouseX > 400 && mouseY < 300) {
    if (song2.isPlaying() == false ){ //if this song is not playing
      song2.play();
    }
    //stop all other songs from playing
    song1.stop();
    song3.stop();
    song4.stop();
  } else if ( mouseX < 400 && mouseY < 300) {
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
