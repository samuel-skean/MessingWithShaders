precision mediump float;

varying vec2 pos;

uniform float millis;

// glFragCoord is similar, but the range is (0, width/height), and the width and height must be manually passed in to use them and correct for that. Also, its bounds are the entire screen, unlike ours which is within the region we're drawin in because we set it from aTexCoord (in our vertex shader).
void main() {
  vec3 c1 = vec3(0.5, 0.9, 0.75);
  vec3 c2 = vec3(0.75, 0.2, 0.5);
  
  vec3 c = (mix(c1, c2, (sin(pos.x * 16. + millis/500.) + 1.) / 2.));
  
  gl_FragColor = vec4(c, 1.);
}