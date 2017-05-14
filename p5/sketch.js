var t = 1;
var r = 30;
var g = 100;
var b = 200;
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
  createCanvas(1450, 800, WEBGL);
  noStroke();
}

function draw() {

  fill(255);
  textSize(32);
  text("It was the best of times. Such good times.",
  mouseX, mouseY, 200, 200);


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
