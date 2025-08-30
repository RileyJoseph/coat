// ThreeScene.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import the font JSON directly (bundled by Vite)
import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    container.innerHTML = '';

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x0b0b0b, 1);
    container.appendChild(renderer.domElement);

    // scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(2, 1.5, 4);
    camera.lookAt(0, 0, 0);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0, 0);
    controls.update();

    // lights
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(5, 5, 5);
    scene.add(dir);

    // --- TEXT ---
    const font = new FontLoader().parse(helvetiker as any);

    const lines = [
      'Coat',
      'is a psychedelic rock band out of',
      'Oklahoma City, Oklahoma'
    ];

    const group = new THREE.Group();
    const size = 0.5;            // text height
    const depth = 0.06;          // extrusion thickness
    const lineHeight = size * 1.4;

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.45,
      metalness: 0.1
    });

    lines.forEach((line, i) => {
      const geo = new TextGeometry(line, {
        font,
        size,
        height: depth,
        curveSegments: 8,
        bevelEnabled: false
      });
      // center each line horizontally
      geo.computeBoundingBox();
      geo.center();

      const mesh = new THREE.Mesh(geo, material);
      // vertical layout: center the block and offset each line
      mesh.position.y = ((lines.length - 1) * lineHeight) / 2 - i * lineHeight;
      group.add(mesh);
    });

    scene.add(group);

    // resize
    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    // loop
    
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // cleanup
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      group.children.forEach((m) => {
        (m as THREE.Mesh).geometry.dispose();
      });
      (material as THREE.Material).dispose();
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="relative w-full h-[60vh]" />;
}
