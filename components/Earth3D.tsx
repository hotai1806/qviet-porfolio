// pages/index.js
"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import * as THREE from "three";
// import imageTexture from "../../public/2k_earth_specular_map.tif";
interface MousePosition {
  x: number;
  y: number;
}
interface ViewportDimensions {
  width: number;
  height: number;
}

import landData from "@/lib/custom.geo.json";
import * as d3 from "d3-geo";

function isLand(lat: number, lon: number): boolean {
  return landData.features.some((feature) =>
    d3.geoContains(
      feature as d3.ExtendedFeature<d3.GeoGeometryObjects | null>,
      [lon, lat]
    )
  );
}
export default function ThreeDthing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textureLoader = new THREE.TextureLoader();
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const dotsGroupRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const rotationSpeedRef = useRef<number>(0.002);
  const animationFrameRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState<ViewportDimensions>({
    width: 0,
    height: 0,
  });

  // Function to update dimensions

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      renderer.setSize(400, 400);
    } else {
      renderer.setSize(320, 320);
    }

    camera.position.z = 2;

    // Create the globe geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/download.png"),
    });

    const earth = new THREE.Mesh(geometry, mat);
    const object3D = new THREE.Object3D();
    earthRef.current = earth;

    object3D.add(earth);
    scene.add(object3D);
    // earth.rotation.y = 300;
    // earth.rotation.x = 200;

    const pointLight = new THREE.PointLight(0xffffff, 1.6, 300);
    scene.add(pointLight);

    const directionalLight1 = new THREE.DirectionalLight(0x5f5f5f, 2); // Blue-ish light
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    // const directionalLight2 = new THREE.DirectionalLight(0xff8060, 1.5); // Orange-ish light
    // directionalLight2.position.set(-1, -1, 1);
    // scene.add(directionalLight2);

    // Point light in the center
    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    // Create points for the globe
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create points distributed in a sphere shape
      const phi = Math.acos(-1 + (2 * Math.floor(i / 3)) / particlesCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * Math.floor(i / 3);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Create material
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x888888,
      sizeAttenuation: true,
    });

    // Highlight a few dots with different colors
    // const highlightPositions: [number, number, number][] = [
    //   [0.8, 0.2, 1.5],
    //   [-0.6, 0.5, 0.3],
    //   [0.8, -0.7, 0.2],
    // ];

    // highlightPositions.forEach((pos) => {
    //   const highlightGeom = new THREE.SphereGeometry(0.01, 8, 8);
    //   const highlightMat = new THREE.MeshBasicMaterial({ color: 0xff4500 });
    //   const highlightDot = new THREE.Mesh(highlightGeom, highlightMat);
    //   highlightDot.position.set(...pos);
    //   scene.add(highlightDot);
    // });

    // Create the points and add to scene
    // const pointsObj = new THREE.Points(particlesGeometry, pointsMaterial);
    // scene.add(pointsObj);
    const dotsGroup = new THREE.Group();
    function cartesianToLatLon(x: number, y: number, z: number) {
      const lat = Math.asin(y) * (180 / Math.PI); // Latitude in degrees
      const lon = Math.atan2(z, x) * (180 / Math.PI); // Longitude in degrees
      return { lat, lon };
    }

    scene.add(dotsGroup);
    const totalDots = 1000;
    let count = 0;
    // Create dots distribution
    for (let i = 0; i < 1000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 1000);
      const theta = Math.sqrt(1000 * Math.PI) * phi;

      // Random radius between 1.001 and 1.01 to place dots slightly above the sphere
      const radius = 1.001 + Math.random() * 0.009;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      //   const dotGeometry = new THREE.SphereGeometry(0.004, 4, 4);
      const dotGeometry = new THREE.SphereGeometry(0.01, 8, 8);

      // const highlightDot = new THREE.Mesh(highlightGeom, highlightMat);

      // Choose color - occasionally add an orange highlight dot
      // const { lat, lon } = cartesianToLatLon(x, y, z);

      // if (isLand(lat, lon)) {
      //   const dotGeometry = new THREE.SphereGeometry(0.01, 8, 8);
      //   let dotColor = Math.random() > 0.99 ? 0xff6600 : 0x444444;
      //   const dotMaterial = new THREE.MeshBasicMaterial({ color: dotColor });

      //   const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      //   dot.position.set(x, y, z);
      //   dotsGroup.add(dot);

      //   count++; // Only increment if the dot is on land
      // }
      let dotColor = 0x444444;
      if (Math.random() > 0.99) {
        dotColor = 0xff6600;
      }
      const dotMaterial = new THREE.MeshBasicMaterial({ color: dotColor });
      //   const dotMaterial = new THREE.MeshBasicMaterial({
      //     color: dotColor,
      //   });

      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.set(x, y, z);
      dotsGroup.add(dot);
    }
    dotsGroupRef.current = dotsGroup;
    // Handle mouse events for dragging
    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const deltaMove = {
        x: event.clientX - previousMousePositionRef.current.x,
        y: event.clientY - previousMousePositionRef.current.y,
      };

      if (earthRef.current && dotsGroupRef.current) {
        // Adjust rotation based on mouse movement
        const rotationSpeed = 0.005;
        earthRef.current.rotation.y += deltaMove.x * rotationSpeed;
        dotsGroupRef.current.rotation.y += deltaMove.x * rotationSpeed;

        // Optional: Add vertical rotation if desired
        earthRef.current.rotation.x += deltaMove.y * rotationSpeed;
        dotsGroupRef.current.rotation.x += deltaMove.y * rotationSpeed;
      }

      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle touch events for mobile
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDraggingRef.current) return;
      if (event.touches.length === 1) {
        const deltaMove = {
          x: event.touches[0].clientX - previousMousePositionRef.current.x,
          y: event.touches[0].clientY - previousMousePositionRef.current.y,
        };

        if (earthRef.current && dotsGroupRef.current) {
          // Adjust rotation based on touch movement
          const rotationSpeed = 0.005;
          earthRef.current.rotation.y += deltaMove.x * rotationSpeed;
          dotsGroupRef.current.rotation.y += deltaMove.x * rotationSpeed;

          // Optional: Add vertical rotation if desired
          earthRef.current.rotation.x += deltaMove.y * rotationSpeed;
          dotsGroupRef.current.rotation.x += deltaMove.y * rotationSpeed;
        }

        previousMousePositionRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Add touch event listeners
    renderer.domElement.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Add click handler to toggle spinning
    const handleClick = () => {
      if (!isDraggingRef.current) {
        setIsSpinning((prevState) => !prevState);
      }
    };

    renderer.domElement.addEventListener("click", handleClick);
    // window.addEventListener("resize", () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    // });
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      object3D.rotation.y += 0.005;

      //   pointsObj.rotation.y += 0.005;
      dotsGroup.rotation.y += 0.005;
      if (isSpinning && !isDraggingRef.current) {
        if (earthRef.current && dotsGroupRef.current) {
          earthRef.current.rotation.y += rotationSpeedRef.current;
          dotsGroupRef.current.rotation.y += rotationSpeedRef.current;
        }
      }
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (
        canvasRef.current &&
        renderer.domElement.parentNode === canvasRef.current
      ) {
        canvasRef.current.removeChild(renderer.domElement);
      }

      // Remove event listeners
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      renderer.domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      renderer.domElement.removeEventListener("click", handleClick);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <div className="md:flex md:items-center md:justify-center left-0">
        <div className="relative md:w-80 md:h-80">
          <canvas ref={canvasRef} className="absolute inset-0 left-0" />
        </div>
      </div>
    </div>
  );
}
