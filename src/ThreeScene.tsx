import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
// Optional (only if your model is Draco-compressed):
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// ---- OPTION A: file in /public ----
// const MODEL_URL = '/models/coat.gltf'; // or '/models/coat.glb'

// ---- OPTION B: bundled asset (put file in src/assets) ----
// import MODEL_URL from '../assets/coat.gltf?url';

const MODEL_URL = '/models/control-panel.gltf'; // pick one option above and set this

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    container.innerHTML = '';

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const interactive: THREE.Object3D[] = []; // push clickable meshes here

    let hovered: THREE.Object3D | null = null;
    let pressed: THREE.Object3D | null = null;
    let isDragging = false;
    let downXY = { x: 0, y: 0 };

    function ndcFromEvent(e: PointerEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }


    function pickTop(e: PointerEvent) {
      ndcFromEvent(e);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(interactive, true);
      return hits[0]?.object ?? null;
    }

    const onMove = (e: PointerEvent) => {
      const hit = pickTop(e);
      setHover(hit);
      if (pressed) {
        const dx = e.clientX - downXY.x;
        const dy = e.clientY - downXY.y;
        isDragging = isDragging || (dx * dx + dy * dy > 4); // small threshold
      }
    };

    const onDown = (e: PointerEvent) => {
      const hit = pickTop(e);
      pressed = hit;
      isDragging = false;
      downXY = { x: e.clientX, y: e.clientY };
      // pause orbiting while pressing a button
      controls.enabled = !pressed;
      if (pressed) gsap.to(pressed.scale, { x: 0.97, y: 0.97, z: 0.97, duration: 0.1 });
    };
    
    const onUp = (e: PointerEvent) => {
      const hit = pickTop(e);
      if (pressed) gsap.to(pressed.scale, { x: 1, y: 1, z: 1, duration: 0.12 });
      controls.enabled = true;
    
      // click if: pressed existed, not dragged, and pointer still over same object
      if (pressed && !isDragging && hit && hit === pressed) {
        (pressed.userData.onClick as (() => void) | undefined)?.();
      }
      pressed = null;
    };
    
    renderer.domElement.addEventListener('pointermove', onMove);
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);    

    function setHover(obj: THREE.Object3D | null) {
      if (hovered === obj) return;
      // reset previous
      if (hovered) {
        gsap.to(hovered.scale, { x: 1, y: 1, z: 1, duration: 0.15, overwrite: true });
      }
      hovered = obj;
      container.style.cursor = hovered ? 'pointer' : 'default';
      if (hovered) {
        gsap.to(hovered.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.15, overwrite: true });
      }
    }

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0b0b);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3, 2, 5);
    camera.lookAt(0, 0, 0);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 1.2;   // tweak
    controls.maxDistance = 10;  
    controls.target.set(0, 0, 0);

    // Lights (PBR-friendly)
    scene.add(new THREE.HemisphereLight(0xffffff, 0x3b3b3b, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(5, 6, 7);
    key.castShadow = false;
    scene.add(key);

    // Load Model
    const loader = new GLTFLoader();

    // If your GLTF is Draco-compressed, uncomment and host decoders in /public/draco/
    // const draco = new DRACOLoader();
    // draco.setDecoderPath('/draco/'); // put draco_wasm_wrapper.js & .wasm there
    // loader.setDRACOLoader(draco);

    // let root: THREE.Object3D | null = null;
    // let mixer: THREE.AnimationMixer | null = null;

    loader.load(
      MODEL_URL,
      (gltf) => {
        scene.add(gltf.scene);
        fitCameraToObject(camera, gltf.scene, controls);
      },
      undefined,
      (err) => {
        console.error('GLTF load error', err, 'URL:', MODEL_URL);
      }
    );

    // Resize (container changes)
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    // Render loop
    let raf = 0;
    // const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      // const dt = clock.getDelta();
      // mixer?.update(dt);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('pointerup', onUp);      
      // draco?.dispose();
      // if (root) {
      //   root.traverse((obj) => {
      //     if ((obj as THREE.Mesh).isMesh) {
      //       const mesh = obj as THREE.Mesh;
      //       mesh.geometry?.dispose?.();
      //       const mat = mesh.material as THREE.Material | THREE.Material[];
      //       if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
      //       else mat?.dispose?.();
      //     }
      //   });
      //   scene.remove(root);
      // }
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="relative w-full h-[60vh]" />;
}

/**
 * Fit the camera & controls to an object’s bounding sphere.
 */
function fitCameraToObject(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  controls?: OrbitControls
) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  // Set controls target to model center
  controls?.target.copy(center);

  // Compute distance so the object fits in view vertically
  const maxSize = Math.max(size.x, size.y, size.z);
  const halfFovY = THREE.MathUtils.degToRad(camera.fov / 2);
  const distance = (maxSize * 0.5) / Math.tan(halfFovY);

  // Position camera on a diagonal, looking at center
  const dir = new THREE.Vector3(1, 0.6, 1).normalize();
  camera.position.copy(center.clone().add(dir.multiplyScalar(distance * 1.4)));
  camera.near = Math.max(0.1, distance / 100);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();
  camera.lookAt(center);
}
