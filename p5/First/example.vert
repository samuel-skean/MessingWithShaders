// Attributes are read only in the vertex shader and invisible in the fragment shader.
attribute vec3 aPosition;
attribute vec2 aTexCoord;

// Varyings are read-write in the vertex shader, but read only in the fragment shader.
varying vec2 pos;

void main() {
  pos = aTexCoord;
  
  vec4 position = vec4(aPosition, 1.0);
  
  position.xy = position.xy * 2. - 1.; // Remap coordinates from (0, 1) to (-1, 1)
  
  gl_Position = position;
}