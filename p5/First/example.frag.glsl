precision mediump float;

varying vec2 pos;

uniform sampler2D background;
uniform float millis;

// glFragCoord is similar, but the range is (0, width/height), and the width and height must be manually passed in to use them and correct for that. Also, its bounds are the entire screen, unlike ours which is within the region we're drawin in because we set it from aTexCoord (in our vertex shader).
void main() {

  vec2 newPos = pos;
  newPos.y = 1. - newPos.y;
  newPos = fract(newPos * 3.) + (millis/1000.);

  gl_FragColor = texture2D(background, newPos);
}