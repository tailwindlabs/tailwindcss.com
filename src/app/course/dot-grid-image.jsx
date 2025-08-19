"use client";

import { useEffect, useRef } from "react";
import adam from "./adam-raw.jpg";

const vertexShaderSource = `
  attribute vec4 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  
  void main() {
    gl_Position = a_position;
    v_texCoord = a_texCoord;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform vec2 u_imageSize;
  uniform float u_time;
  uniform float u_darkMode;
  
  varying vec2 v_texCoord;
  
  vec2 getCoverUV(vec2 uv, vec2 canvasSize, vec2 imageSize) {
    // Calculate aspect ratios
    float canvasRatio = canvasSize.x / canvasSize.y;
    float imageRatio = imageSize.x / imageSize.y;
    
    vec2 newUV = uv;
    
    if (imageRatio > canvasRatio) {
      // Image is wider - fit height and crop sides
      float scale = canvasRatio / imageRatio;
      newUV.x = (uv.x - 0.5) * scale + 0.5;
    } else {
      // Image is taller - fit width and crop top/bottom  
      float scale = imageRatio / canvasRatio;
      newUV.y = (uv.y - 0.5) * scale + 0.5;
    }
    
    return newUV;
  }
  
  void main() {
    // Use pixel coordinates for perfect grid alignment
    vec2 pixelCoord = v_texCoord * u_resolution;
    
    // Dot grid effect parameters (in pixels)
    float dotSizePixels = 4.0;
    float spacingPixels = 10.0;
    
    // Calculate how many grid cells fit in each dimension
    vec2 gridCount = floor(u_resolution / spacingPixels);
    
    // Calculate offset to center the grid
    vec2 gridOffset = (u_resolution - gridCount * spacingPixels) * 0.5;
    
    // Adjust pixel coordinates to center the grid
    vec2 adjustedPixelCoord = pixelCoord - gridOffset;
    
    // Calculate grid position in centered grid space
    vec2 gridPos = floor(adjustedPixelCoord / spacingPixels) * spacingPixels + spacingPixels * 0.5;
    vec2 offset = adjustedPixelCoord - gridPos;
    
    // Calculate distance from center of grid cell (in pixels)
    float dist = length(offset);
    
    // Convert grid position back to UV space for texture sampling
    vec2 gridUV = (gridPos + gridOffset) / u_resolution;
    vec2 imageGridPos = getCoverUV(gridUV, u_resolution, u_imageSize);
    
    vec4 gridColor = vec4(0.95, 0.95, 0.95, 1.0);
    if (imageGridPos.x >= 0.0 && imageGridPos.x <= 1.0 && imageGridPos.y >= 0.0 && imageGridPos.y <= 1.0) {
      gridColor = texture2D(u_texture, imageGridPos);
    }
    
    // Calculate brightness of the original color
    float brightness = (gridColor.r + gridColor.g + gridColor.b) / 3.0;
    
    // Adjust dot size based on brightness (in pixels)
    float lightAdjustedDotSize = dotSizePixels * (1.0 - brightness * 0.8);
    float darkAdjustedDotSize = dotSizePixels * ( brightness * 0.4);
    float adjustedDotSize = mix(lightAdjustedDotSize, darkAdjustedDotSize, u_darkMode);

    // Only render dots that are within valid grid bounds
    float circle = 0.0;
    if (adjustedPixelCoord.x >= 0.0 && adjustedPixelCoord.x < gridCount.x * spacingPixels &&
        adjustedPixelCoord.y >= 0.0 && adjustedPixelCoord.y < gridCount.y * spacingPixels) {
      circle = 1.0 - smoothstep(adjustedDotSize - 0.5, adjustedDotSize + 0.5, dist);
    }
    
    // Mix between transparent background and dot color
    vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 0.0); // Transparent
    
    // Choose dot color based on theme
    vec4 lightModeColor = vec4(0, 0.35, 0.53, 1.0); // sky-800
    vec4 darkModeColor = vec4(0.84,0.95,1.0, 1.0); // sky-100
    vec4 dotColor = mix(lightModeColor, darkModeColor, u_darkMode);
    
    vec4 finalColor = mix(backgroundColor, dotColor, circle);
    
    gl_FragColor = finalColor;
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Error compiling shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Error linking program:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function loadTexture(gl, url, onLoad) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Fill with a placeholder pixel (bright magenta to see if texture loads)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 255, 255]));

  const image = new Image();
  image.onload = () => {
    console.log("Image loaded successfully:", url);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    // Set texture parameters for non-power-of-2 images
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    if (onLoad) onLoad(image.width, image.height);
  };
  image.onerror = () => {
    console.error("Failed to load image:", url);
  };
  image.src = url;

  return texture;
}

export default function DotGridImage({ src = adam.src, className = "", width = 400, height = 400, darkMode = false }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const imageSizeRef = useRef({ width: 1, height: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Enable alpha blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    // Get attribute and uniform locations
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const texCoordAttributeLocation = gl.getAttribLocation(program, "a_texCoord");
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    const imageSizeUniformLocation = gl.getUniformLocation(program, "u_imageSize");
    const timeUniformLocation = gl.getUniformLocation(program, "u_time");
    const darkModeUniformLocation = gl.getUniformLocation(program, "u_darkMode");
    const textureUniformLocation = gl.getUniformLocation(program, "u_texture");

    // Create position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Rectangle vertices
    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Create texture coordinate buffer
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);

    // Texture coordinates
    const texCoords = [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

    // Load texture
    const texture = loadTexture(gl, src, (imgWidth, imgHeight) => {
      imageSizeRef.current = { width: imgWidth, height: imgHeight };
    });

    // Render function
    function render(time) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      // Set position attribute
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      // Set texture coordinate attribute
      gl.enableVertexAttribArray(texCoordAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform2f(imageSizeUniformLocation, imageSizeRef.current.width, imageSizeRef.current.height);
      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform1f(darkModeUniformLocation, darkMode ? 1.0 : 0.0);

      // Bind texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(textureUniformLocation, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(render);
    }

    // Start render loop
    animationRef.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [src, width, height, darkMode]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: `100%`, height: `100%` }} />
    </div>
  );
}
