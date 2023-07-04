#version 330 core

layout (location = 0) out vec4 fragcolor;

in vec3 color;

void main(){
    fragcolor = vec4(color, 1.0);
}