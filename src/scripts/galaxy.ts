/**
 * Spiral-galaxy point cloud for the hero (violet core → cyan arms) with a
 * distant starfield and pointer parallax. Loaded on demand by motion.ts —
 * desktop only, after the browser goes idle.
 */
import * as THREE from "three";

export function mountGalaxy(host: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  host.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.set(0, 1.9, 4.6);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  // Galaxy
  const count = 7500;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const inside = new THREE.Color("#8b5cf6");
  const mid = new THREE.Color("#4d7cff");
  const outside = new THREE.Color("#22d3ee");
  const branches = 4;
  const radiusMax = 5.2;
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = Math.pow(Math.random(), 1.6) * radiusMax;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const spin = radius * 1.15;
    const rand = () => Math.pow(Math.random(), 2.8) * (Math.random() < 0.5 ? 1 : -1) * 0.42 * radius;
    pos[i3] = Math.cos(branchAngle + spin) * radius + rand();
    pos[i3 + 1] = rand() * 0.45;
    pos[i3 + 2] = Math.sin(branchAngle + spin) * radius + rand();
    const t = radius / radiusMax;
    const c = t < 0.5 ? inside.clone().lerp(mid, t * 2) : mid.clone().lerp(outside, (t - 0.5) * 2);
    col[i3] = c.r;
    col[i3 + 1] = c.g;
    col[i3 + 2] = c.b;
  }
  const galaxyGeo = new THREE.BufferGeometry();
  galaxyGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  galaxyGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const galaxy = new THREE.Group();
  galaxy.rotation.set(0.35, 0, 0.12);
  galaxy.add(
    new THREE.Points(
      galaxyGeo,
      new THREE.PointsMaterial({
        size: 0.016,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    ),
  );
  scene.add(galaxy);

  // Stars
  const starCount = 2200;
  const sp = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = 14 + Math.random() * 14;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    sp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    sp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    sp[i * 3 + 2] = r * Math.cos(phi);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(sp, 3));
  scene.add(
    new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ size: 0.02, sizeAttenuation: true, color: "#ffffff", transparent: true, opacity: 0.55, depthWrite: false }),
    ),
  );

  const pointer = { x: 0, y: 0 };
  window.addEventListener(
    "mousemove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true },
  );

  // Pause rendering when the hero is off-screen.
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(host);

  const clock = new THREE.Clock();
  const lerp = THREE.MathUtils.lerp;
  renderer.setAnimationLoop(() => {
    const delta = clock.getDelta();
    if (!visible) return;
    galaxy.rotation.y += delta * 0.045;
    galaxy.rotation.x = lerp(galaxy.rotation.x, 0.35 + pointer.y * 0.12, 0.04);
    galaxy.rotation.z = lerp(galaxy.rotation.z, 0.12 - pointer.x * 0.08, 0.04);
    camera.position.x = lerp(camera.position.x, pointer.x * 0.5, 0.03);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  });

  requestAnimationFrame(() => host.classList.add("is-ready"));
}
