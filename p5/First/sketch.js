let exampleShader;

function preload() {
  exampleShader = loadShader('example.vert', 'example.frag');
}


function setup() {
  createCanvas(400, 400, WEBGL);
  shader(exampleShader);
  noStroke();
}

function draw() {
  clear();
  
  exampleShader.setUniform("millis", millis());
  //run shader
  rect(0, 0, width, height);
}