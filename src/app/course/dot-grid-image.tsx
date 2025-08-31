"use client";

import { useEffect, useRef } from "react";
import adamLight from "./adam-light.jpg";
import adamDark from "./adam-dark.jpg";

const vertexShaderSource = `
precision mediump float;

attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

uniform float u_mouseActive;
uniform float u_mouseActivation; // Smooth activation factor
uniform vec2 u_laggedMouse;

uniform float u_time;

void main() {
  vec4 position = a_position;
  
  // Apply displacement effect based on mouse position when active
  if (u_mouseActive > 0.5) {
    // Convert normalized coordinates to screen space for displacement calculation
    vec2 screenPos = position.xy; // -1 to 1 range
    vec2 mouseScreenPos = vec2(
      (u_laggedMouse.x - 0.5) * 2.0,  // Convert 0-1 to -1 to 1 for X (using lagged mouse)
      (0.5 - u_laggedMouse.y) * 2.0   // Flip Y coordinate to match vertex coordinate system
    );
    
    // Calculate distance from vertex to mouse position
    float distanceToMouse = length(screenPos - mouseScreenPos);
    
    // Create displacement effect (vertices pushed away from mouse)
    float displacementRadius = 1.0; // How far the effect extends
    float displacementStrength = 0.03; // How strong the push is
    
    // Calculate displacement force with smooth falloff
    float influence = 0.5 / (1.0 + distanceToMouse * distanceToMouse * 2.0);
    
    // Add smooth radius falloff (smoothstep from full effect to zero at edge)
    float radiusFalloff = 1.0 - smoothstep(displacementRadius * 0.6, displacementRadius, distanceToMouse);
    
    // Calculate distance from edges (0 at edges, 1 at center)
    float edgeDistanceX = min(abs(screenPos.x), 1.0 - abs(screenPos.x)); // Distance from left/right edges
    float edgeDistanceY = min(abs(screenPos.y), 1.0 - abs(screenPos.y)); // Distance from top/bottom edges
    float edgeDistance = min(edgeDistanceX, edgeDistanceY); // Distance from closest edge
    
    // Edge falloff (no effect at edges, full effect away from edges)
  float edgeFalloff = edgeDistance > 0.05 ? smoothstep(0.05, 0.2, edgeDistance) : 0.0;

    // Combine all falloffs
    influence = influence * displacementStrength * radiusFalloff * edgeFalloff * u_mouseActivation;
    
    // Apply displacement (no hard cutoff needed now)
    if (influence > 0.001) { // Only apply if effect is meaningful
      // Push direction: away from mouse
      vec2 pushDirection = distanceToMouse > 0.01 ? normalize(screenPos - mouseScreenPos) : vec2(0.0);
      
      // Add some smoothing with time for organic feel
      float timeVariation = sin(u_time * 3.0 + distanceToMouse * 10.0) * 0.1 + 1.0;
      
      // Apply displacement
      position.xy += pushDirection * influence * timeVariation;
    }
  }
  
  gl_Position = position;
  v_texCoord = a_texCoord;
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_darkMode;
uniform vec2 u_mouseVelocity;
uniform float u_mouseActive;
uniform vec2 u_laggedMouse;

varying vec2 v_texCoord;

// Simple pseudo-random function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 83758.5453123);
}

float randomBetween(float min, float max) {
  float rand = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453123);
  return min + rand * (max - min);
}

void main() {
  // Use pixel coordinates for perfect grid alignment
  vec2 pixelCoord = v_texCoord * u_resolution;
  
  // Calculate mouse position in pixel coordinates
  vec2 mousePixel = u_laggedMouse * u_resolution;
  
  // Dot grid effect parameters (in pixels)
  float lightDotSizePixels = 4.0;
  float lightSpacingPixels = 10.0;
  float darkDotSizePixels = 6.0;
  float darkSpacingPixels = 12.0;
  float dotSizePixels = mix(lightDotSizePixels, darkDotSizePixels, u_darkMode);
  float spacingPixels = mix(lightSpacingPixels, darkSpacingPixels, u_darkMode);

  // Calculate how many grid cells fit in each dimension
  vec2 gridCount = floor(u_resolution / spacingPixels);
  
  // Calculate offset to center the grid
  vec2 gridOffset = (u_resolution - gridCount * spacingPixels) * 0.5;
  
  // Adjust pixel coordinates to center the grid
  vec2 adjustedPixelCoord = pixelCoord - gridOffset;
  
  // Calculate grid position in centered grid space (no displacement)
  vec2 originalGridPos = floor(adjustedPixelCoord / spacingPixels) * spacingPixels + spacingPixels * 0.5;
  vec2 gridPos = originalGridPos;
  vec2 offset = adjustedPixelCoord - gridPos;
  float dist = length(offset);
  
  // Sample texture from ORIGINAL position for dot color
  vec2 originalGridUV = (originalGridPos + gridOffset) / u_resolution;
  
  vec4 gridColor = vec4(0.95, 0.95, 0.95, 1.0);
  if (originalGridUV.x >= 0.0 && originalGridUV.x <= 1.0 && originalGridUV.y >= 0.0 && originalGridUV.y <= 1.0) {
    gridColor = texture2D(u_texture, originalGridUV);
  }
  
  // Calculate brightness of the original color
  float brightness = (gridColor.r + gridColor.g + gridColor.b) / 3.0;
  
  // Adjust dot size based on brightness (in pixels)
  float lightAdjustedDotSize = dotSizePixels * smoothstep(0.2, 0.8, (1.0 - brightness));
  float darkAdjustedDotSize = dotSizePixels * smoothstep(0.15, 1.0, brightness);
  float baseDotSize = mix(lightAdjustedDotSize, darkAdjustedDotSize, u_darkMode);
  
  float adjustedDotSize = baseDotSize;

  // Only render dots that are within valid grid bounds
  float circle = 0.0;
  
  // Check if the original dot center is within valid grid bounds (before displacement)
  vec2 originalDotCenter = originalGridPos;
  vec2 adjustedOriginalDotCenter = originalDotCenter - gridOffset;
  if (adjustedOriginalDotCenter.x >= 0.0 && adjustedOriginalDotCenter.x < gridCount.x * spacingPixels &&
      adjustedOriginalDotCenter.y >= 0.0 && adjustedOriginalDotCenter.y < gridCount.y * spacingPixels) {
    circle = 1.0 - smoothstep(adjustedDotSize - 0.5, adjustedDotSize + 0.5, dist);
    
    // Calculate distance from closest edge
    float distFromLeftEdge = pixelCoord.x;
    float distFromRightEdge = u_resolution.x - pixelCoord.x;
    float distFromTopEdge = pixelCoord.y;
    float distFromBottomEdge = u_resolution.y - pixelCoord.y;
    
    float distFromEdge = min(min(distFromLeftEdge, distFromRightEdge), 
                            min(distFromTopEdge, distFromBottomEdge));
    
    // Add randomness based on distance from edge (use original position for consistency)
    vec2 gridCoord = floor((originalGridPos + gridOffset) / spacingPixels);
    
    // Define fade zone (in pixels) - use grid coordinate for consistent randomness per dot
    float fadeZoneSize = random(gridCoord + vec2(123.45, 678.90)) * u_resolution.y * 0.2;

    // Calculate fade factor (0 at edges, 1 inside fade zone)
    float edgeFactor = clamp(distFromEdge / fadeZoneSize, 0.0, 1.0);
    
    float edgeNoise = random(gridCoord);
    
    // Probability of showing dot increases with distance from edge
    float showProbability = edgeFactor * 0.8 + 0.2; // 20% minimum, 80% maximum

    // Mouse-based hiding effect with lagged position
    vec2 dotCenter = originalGridPos + gridOffset;
    vec2 laggedMousePixel = u_laggedMouse * u_resolution;
    float mouseDistance = length(dotCenter - laggedMousePixel);
    
    // Calculate velocity-enhanced radius
    float velocityMagnitude = length(u_mouseVelocity);
    float baseRadius = 400.0; // Base influence radius
    float velocityRadius = velocityMagnitude * 20.0; // Velocity extends radius
    float totalRadius = baseRadius + velocityRadius;
    
    // Calculate mouse influence for hiding with hard cutoff
    float mouseInfluence = 0.0;
    if (mouseDistance < totalRadius && u_mouseActive > 0.5) {
      mouseInfluence = 0.75 - (mouseDistance / totalRadius); // Linear falloff within radius
    }
    
    // Use dot position for consistent randomness
    vec2 mouseHideCoord = floor((originalGridPos + gridOffset) / spacingPixels);
    float mouseHideNoise = random(mouseHideCoord + vec2(9.87, 6.54));
    
    // Simplified temporary hiding - dots near mouse get hidden, then recover over time
    float baseHideProbability = mouseInfluence * 0.8 * u_mouseActive; // Base probability to hide near mouse
    float velocityBoost = min(velocityMagnitude * 2.0, 1.0); // Faster mouse = stronger effect
    
    // Add time-based recovery oscillation
    float impactSeed = random(mouseHideCoord + vec2(2.34, 7.89));
    float recoveryTime = 0.1 + impactSeed * 1.0; // 0.1-1.1 second recovery cycle
    float recoveryWave = sin(u_time / recoveryTime + impactSeed * 6.28) * 0.5 + 0.5; // 0-1 oscillation
    
    // Apply recovery - dots can recover even if mouse is still near
    float hideProbability = baseHideProbability * (1.0 + velocityBoost) * (1.0 - recoveryWave * 0.7);
    
    // Show/hide dot based on random threshold (no fading, just on/off)
    if (edgeNoise > showProbability) {
      circle = 0.0;
    } else {
      // Apply mouse-based fade out effect (similar to opening animation)
      float mouseFadeOut = 1.0;
      if (mouseHideNoise < 0.5) { // Use fixed threshold for clearer effect
        // Size-based fade duration (larger dots fade slower)
        float sizeFactor = adjustedDotSize / dotSizePixels; // 0.0 to 1.0 based on dot size
        float baseFadeDuration = 0.5;
        float sizeFadeDuration = baseFadeDuration + sizeFactor * 1.0; // 0.5-1.5 second duration
        
        // Calculate fade progress based on mouse influence and time
        float fadeSpeed = mouseInfluence * 3.0; // Closer to mouse = faster fade
        float fadeProgress = clamp(fadeSpeed - recoveryWave * 2.0, 0.0, 1.0); // Recovery counteracts fade
        
        // Apply smooth fade out with size-based timing
        mouseFadeOut = 1.0 - smoothstep(0.0, sizeFadeDuration, fadeProgress * sizeFadeDuration);
      }
      
      circle *= mouseFadeOut;
      // Add fade-in animation with delay based on dot size (larger dots animate in last)
      float sizeBasedDelay = (adjustedDotSize / dotSizePixels) * 1.5; // Larger dots = longer delay
      float randomOffset = random(gridCoord + vec2(456.78, 901.23)) * 0.75; // Add some randomness
      float animationDelay = sizeBasedDelay + randomOffset;
      float animationDuration = 0.1; // 0.2 second fade duration
      float animationStart = animationDelay;
      float animationEnd = animationDelay + animationDuration;
      
      // Calculate fade-in factor based on time
      float fadeIn = smoothstep(animationStart, animationEnd, u_time);
      
      // Apply fade-in to the circle
      circle *= fadeIn;
    }
  }
  
  // Mix between transparent background and dot color
  vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 0.0); // Transparent
  
  // Choose dot color based on theme
  vec4 lightModeColor = vec4(0, 0.35, 0.53, 1.0); // sky-800
  vec4 darkModeColor = vec4(0.84,0.95,1.0, 1.0); // sky-100
  vec4 dotColor = mix(lightModeColor, darkModeColor, u_darkMode);
  
  // Use premultiplied alpha to avoid fringing
  vec4 finalColor = vec4(dotColor.rgb * circle, circle);
  
  gl_FragColor = finalColor;
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Error compiling shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader,
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;

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

function loadTexture(gl: WebGLRenderingContext, url: string): WebGLTexture | null {
  const texture = gl.createTexture();
  if (!texture) return null;

  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

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
  };
  image.onerror = () => {
    console.error("Failed to load image:", url);
  };
  image.src = url;

  return texture;
}

interface DotGridImageProps {
  darkSrc?: string;
  lightSrc?: string;
  className?: string;
  darkMode?: boolean;
  width?: number;
  height?: number;
}

export default function DotGridImage({
  darkSrc = adamDark.src,
  lightSrc = adamLight.src,
  className = "",
  darkMode = false,
  width = 472,
  height = 667,
}: DotGridImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseVelocityRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(0); // 0 = not over canvas, 1 = over canvas
  const mouseActivationRef = useRef(0); // Smooth activation factor 0-1
  const laggedMouseRef = useRef({ x: 0.5, y: 0.5 }); // Lagged mouse position
  const lastMouseTimeRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match device pixel ratio capped at 2
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.width * dpr;
    canvas.height = canvas.height * dpr;

    const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    // Clear immediately to show the background
    // gl.clear(gl.COLOR_BUFFER_BIT);

    // Enable alpha blending for transparency with premultiplied alpha
    // gl.enable(gl.BLEND);
    // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

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
    const timeUniformLocation = gl.getUniformLocation(program, "u_time");
    const darkModeUniformLocation = gl.getUniformLocation(program, "u_darkMode");
    const textureUniformLocation = gl.getUniformLocation(program, "u_texture");
    const mouseVelocityUniformLocation = gl.getUniformLocation(program, "u_mouseVelocity");
    const mouseActiveUniformLocation = gl.getUniformLocation(program, "u_mouseActive");
    const mouseActivationUniformLocation = gl.getUniformLocation(program, "u_mouseActivation");
    const laggedMouseUniformLocation = gl.getUniformLocation(program, "u_laggedMouse");

    // Note: u_mouse and u_mouseActive are shared between vertex and fragment shaders

    // Create position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Create a dense mesh for smooth displacement
    const meshResolution = 50; // 50x50 grid = 2500 vertices
    const positions = [];
    const texCoords = [];
    const indices = [];

    // Generate vertices and texture coordinates
    for (let y = 0; y <= meshResolution; y++) {
      for (let x = 0; x <= meshResolution; x++) {
        // Position: -1 to 1 range
        const posX = (x / meshResolution) * 2 - 1;
        const posY = (y / meshResolution) * 2 - 1;
        positions.push(posX, posY);

        // Texture coordinates: 0 to 1 range
        const texX = x / meshResolution;
        const texY = 1 - y / meshResolution; // Flip Y for correct texture orientation
        texCoords.push(texX, texY);
      }
    }

    // Generate triangle indices
    for (let y = 0; y < meshResolution; y++) {
      for (let x = 0; x < meshResolution; x++) {
        const i = y * (meshResolution + 1) + x;

        // Two triangles per quad
        indices.push(i, i + 1, i + meshResolution + 1);
        indices.push(i + 1, i + meshResolution + 2, i + meshResolution + 1);
      }
    }

    // Upload mesh data
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Create texture coordinate buffer
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

    // Create index buffer
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    const indexCount = indices.length;

    // Load texture
    const texture = loadTexture(gl, darkMode ? darkSrc : lightSrc);

    // Render function
    function render(time: number) {
      // Update lagged mouse position with smooth interpolation
      const lagFactor = 0.15; // Lower = more lag (0.01-0.1 range)
      laggedMouseRef.current = {
        x: laggedMouseRef.current.x + (mouseRef.current.x - laggedMouseRef.current.x) * lagFactor,
        y: laggedMouseRef.current.y + (mouseRef.current.y - laggedMouseRef.current.y) * lagFactor,
      };

      // Smooth activation animation (fade in/out over 0.3 seconds)
      const activationSpeed = 0.06; // Higher = faster activation
      const targetActivation = mouseActiveRef.current;
      mouseActivationRef.current += (targetActivation - mouseActivationRef.current) * activationSpeed;

      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.clear(gl!.COLOR_BUFFER_BIT);

      gl!.useProgram(program!);

      // Set position attribute
      gl!.enableVertexAttribArray(positionAttributeLocation);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, positionBuffer!);
      gl!.vertexAttribPointer(positionAttributeLocation, 2, gl!.FLOAT, false, 0, 0);

      // Set texture coordinate attribute
      gl!.enableVertexAttribArray(texCoordAttributeLocation);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, texCoordBuffer!);
      gl!.vertexAttribPointer(texCoordAttributeLocation, 2, gl!.FLOAT, false, 0, 0);

      // Set uniforms
      gl!.uniform2f(resolutionUniformLocation, canvas!.width, canvas!.height);
      gl!.uniform1f(timeUniformLocation, time * 0.001);
      gl!.uniform1f(darkModeUniformLocation, darkMode ? 1.0 : 0.0);
      gl!.uniform2f(mouseVelocityUniformLocation, mouseVelocityRef.current.x, mouseVelocityRef.current.y);
      gl!.uniform1f(mouseActiveUniformLocation, mouseActiveRef.current);
      gl!.uniform1f(mouseActivationUniformLocation, mouseActivationRef.current);
      gl!.uniform2f(laggedMouseUniformLocation, laggedMouseRef.current.x, laggedMouseRef.current.y);

      // Bind texture
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, texture!);
      gl!.uniform1i(textureUniformLocation, 0);

      // Draw using indexed triangles
      gl!.drawElements(gl!.TRIANGLES, indexCount, gl!.UNSIGNED_SHORT, 0);

      animationRef.current = requestAnimationFrame(render) as any;
    }

    // Mouse move handler with velocity calculation
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newMouse = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };

      // Calculate velocity using performance.now() for higher precision
      const now = performance.now();
      const deltaTime = Math.max(now - lastMouseTimeRef.current, 1); // Avoid division by zero
      const deltaX = newMouse.x - mouseRef.current.x;
      const deltaY = newMouse.y - mouseRef.current.y;

      // Smooth velocity with exponential decay
      const smoothing = 0.1;
      const velocityX = (deltaX / deltaTime) * 1000; // Convert to per-second
      const velocityY = (deltaY / deltaTime) * 1000;

      mouseVelocityRef.current = {
        x: mouseVelocityRef.current.x * (1 - smoothing) + velocityX * smoothing,
        y: mouseVelocityRef.current.y * (1 - smoothing) + velocityY * smoothing,
      };

      // Initialize lagged mouse to current position on first move
      if (mouseActiveRef.current === 0) {
        laggedMouseRef.current = { ...newMouse };
      }

      mouseRef.current = newMouse;
      mouseActiveRef.current = 1; // Mouse is active over canvas
      lastMouseTimeRef.current = now;
    };

    // Mouse leave handler to center the effect
    const handleMouseLeave = () => {
      mouseRef.current = { x: 0.5, y: 0.5 };
      mouseVelocityRef.current = { x: 0, y: 0 };
      mouseActiveRef.current = 0; // Mouse is no longer active
      // Note: laggedMouse will gradually move to center due to interpolation
    };

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Start render loop
    animationRef.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [darkSrc, lightSrc, darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-coarse:pointer-events-none ${className}`}
      width={width}
      height={height}
      style={{
        backgroundColor: "transparent",
      }}
    />
  );
}
