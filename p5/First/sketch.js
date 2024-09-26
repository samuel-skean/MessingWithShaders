let exampleShader;
let backgroundImage;

function preload() {
  exampleShader = loadShader('example.vert.glsl', 'example.frag.glsl');
  backgroundImage = loadImage('think_fast.jpg');
}


function setup() {
  createCanvas(400, 400, WEBGL);
  shader(exampleShader);
  
  noStroke();
}

function draw() {
  clear();
  exampleShader.setUniform("background", backgroundImage);
  exampleShader.setUniform("millis", millis() % 1000);
  //run shader
  rect(0, 0, width, height);
}