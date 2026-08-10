import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // =========================================
    // SCENE
    // =========================================

    const scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(
      0x050308,
      0.035
    );


    // =========================================
    // CAMERA
    // =========================================

    const camera =
      new THREE.PerspectiveCamera(
        50,
        container.clientWidth /
          container.clientHeight,
        0.1,
        100
      );

    camera.position.set(
      0,
      0,
      7
    );


    // =========================================
    // RENDERER
    // =========================================

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.2;

    container.appendChild(
      renderer.domElement
    );


    // =========================================
    // GROUP
    // =========================================

    const mainGroup =
      new THREE.Group();

    scene.add(mainGroup);


    // =========================================
    // MAIN ICOSAHEDRON
    // =========================================

    const coreGeometry =
      new THREE.IcosahedronGeometry(
        1.8,
        5
      );

    const coreMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xb85cff,
        wireframe: true,
        transparent: true,
        opacity: 0.72,
      });

    const core =
      new THREE.Mesh(
        coreGeometry,
        coreMaterial
      );

    mainGroup.add(core);


    // =========================================
    // INNER CORE
    // =========================================

    const innerGeometry =
      new THREE.IcosahedronGeometry(
        1.35,
        3
      );

    const innerMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });

    const innerCore =
      new THREE.Mesh(
        innerGeometry,
        innerMaterial
      );

    mainGroup.add(
      innerCore
    );


    // =========================================
    // GLOWING SPHERE
    // =========================================

    const glowGeometry =
      new THREE.SphereGeometry(
        0.65,
        32,
        32
      );

    const glowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xd8b4fe,
        transparent: true,
        opacity: 0.18,
      });

    const glowSphere =
      new THREE.Mesh(
        glowGeometry,
        glowMaterial
      );

    mainGroup.add(
      glowSphere
    );


    // =========================================
    // ORBIT RINGS
    // =========================================

    const orbitGroup =
      new THREE.Group();

    mainGroup.add(
      orbitGroup
    );


    const createOrbit = (
      radius,
      rotationX,
      rotationY,
      rotationZ,
      opacity
    ) => {

      const geometry =
        new THREE.TorusGeometry(
          radius,
          0.008,
          12,
          180
        );

      const material =
        new THREE.MeshBasicMaterial({
          color: 0xc084fc,
          transparent: true,
          opacity,
        });

      const ring =
        new THREE.Mesh(
          geometry,
          material
        );

      ring.rotation.set(
        rotationX,
        rotationY,
        rotationZ
      );

      orbitGroup.add(
        ring
      );

      return ring;
    };


    const ring1 =
      createOrbit(
        2.45,
        Math.PI / 2.5,
        0.3,
        0,
        0.45
      );


    const ring2 =
      createOrbit(
        2.75,
        Math.PI / 3,
        -0.5,
        0.5,
        0.25
      );


    const ring3 =
      createOrbit(
        3.05,
        -Math.PI / 4,
        0.4,
        0.2,
        0.18
      );


    // =========================================
    // ORBITING PARTICLES
    // =========================================

    const orbitParticleGroup =
      new THREE.Group();

    mainGroup.add(
      orbitParticleGroup
    );


    const orbitParticleGeometry =
      new THREE.SphereGeometry(
        0.035,
        8,
        8
      );


    const orbitParticleMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      });


    const orbitParticles = [];


    for (
      let i = 0;
      i < 12;
      i++
    ) {

      const particle =
        new THREE.Mesh(
          orbitParticleGeometry,
          orbitParticleMaterial
        );


      const angle =
        (i / 12) *
        Math.PI *
        2;


      const radius =
        2.45;


      particle.position.set(
        Math.cos(angle) *
          radius,

        Math.sin(angle) *
          radius,

        0
      );


      orbitParticleGroup.add(
        particle
      );


      orbitParticles.push({
        mesh: particle,
        angle,
        speed:
          0.25 +
          Math.random() *
            0.25,
      });

    }


    // =========================================
    // BACKGROUND PARTICLES
    // =========================================

    const particleCount = 1400;

    const particleGeometry =
      new THREE.BufferGeometry();


    const positions =
      new Float32Array(
        particleCount * 3
      );


    const particleData = [];


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      const radius =
        5 +
        Math.random() * 10;


      const theta =
        Math.random() *
        Math.PI *
        2;


      const phi =
        Math.acos(
          2 *
            Math.random() -
            1
        );


      const x =
        radius *
        Math.sin(phi) *
        Math.cos(theta);


      const y =
        radius *
        Math.sin(phi) *
        Math.sin(theta);


      const z =
        radius *
        Math.cos(phi);


      positions[i * 3] =
        x;

      positions[
        i * 3 + 1
      ] = y;

      positions[
        i * 3 + 2
      ] = z;


      particleData.push({
        speed:
          0.15 +
          Math.random() *
            0.4,

        offset:
          Math.random() *
          Math.PI *
          2,
      });

    }


    particleGeometry.setAttribute(
      "position",

      new THREE.BufferAttribute(
        positions,
        3
      )
    );


    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,

        size: 0.025,

        transparent: true,

        opacity: 0.48,

        depthWrite: false,

        blending:
          THREE.AdditiveBlending,
      });


    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );


    scene.add(
      particles
    );


    // =========================================
    // SMALL PURPLE PARTICLES
    // =========================================

    const purpleGeometry =
      new THREE.BufferGeometry();


    const purplePositions =
      new Float32Array(
        400 * 3
      );


    for (
      let i = 0;
      i < 400;
      i++
    ) {

      purplePositions[
        i * 3
      ] =
        (Math.random() -
          0.5) *
        12;


      purplePositions[
        i * 3 + 1
      ] =
        (Math.random() -
          0.5) *
        12;


      purplePositions[
        i * 3 + 2
      ] =
        (Math.random() -
          0.5) *
        12;

    }


    purpleGeometry.setAttribute(
      "position",

      new THREE.BufferAttribute(
        purplePositions,
        3
      )
    );


    const purpleMaterial =
      new THREE.PointsMaterial({
        color: 0xb85cff,

        size: 0.035,

        transparent: true,

        opacity: 0.45,

        depthWrite: false,

        blending:
          THREE.AdditiveBlending,
      });


    const purpleParticles =
      new THREE.Points(
        purpleGeometry,
        purpleMaterial
      );


    scene.add(
      purpleParticles
    );


    // =========================================
    // MOUSE
    // =========================================

    const mouse = {
      x: 0,
      y: 0,
    };


    const targetMouse = {
      x: 0,
      y: 0,
    };


    const handleMouseMove =
      (event) => {

        targetMouse.x =
          event.clientX /
            window.innerWidth -
          0.5;


        targetMouse.y =
          event.clientY /
            window.innerHeight -
          0.5;

      };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    // =========================================
    // CLOCK
    // =========================================

    const clock =
      new THREE.Clock();


    let animationFrame;


    // =========================================
    // ANIMATION
    // =========================================

    const animate = () => {

      animationFrame =
        requestAnimationFrame(
          animate
        );


      const time =
        clock.getElapsedTime();


      // -------------------------
      // SMOOTH MOUSE
      // -------------------------

      mouse.x +=
        (targetMouse.x -
          mouse.x) *
        0.05;


      mouse.y +=
        (targetMouse.y -
          mouse.y) *
        0.05;


      // -------------------------
      // MAIN OBJECT
      // -------------------------

      core.rotation.x =
        time * 0.12 +
        mouse.y * 0.35;


      core.rotation.y =
        time * 0.18 +
        mouse.x * 0.35;


      innerCore.rotation.x =
        -time * 0.09;


      innerCore.rotation.y =
        -time * 0.15;


      // -------------------------
      // PULSING GLOW
      // -------------------------

      const pulse =
        1 +
        Math.sin(time * 2) *
          0.08;


      glowSphere.scale.set(
        pulse,
        pulse,
        pulse
      );


      glowMaterial.opacity =
        0.13 +
        Math.sin(time * 2) *
          0.04;


      // -------------------------
      // ORBIT RINGS
      // -------------------------

      orbitGroup.rotation.y =
        time * 0.12;


      orbitGroup.rotation.z =
        Math.sin(time * 0.25) *
        0.15;


      ring1.rotation.z =
        time * 0.18;


      ring2.rotation.x =
        time * 0.12;


      ring3.rotation.y =
        time * 0.15;


      // -------------------------
      // ORBIT PARTICLES
      // -------------------------

      orbitParticles.forEach(
        (item) => {

          item.angle +=
            item.speed *
            0.008;


          item.mesh.position.x =
            Math.cos(
              item.angle
            ) * 2.45;


          item.mesh.position.y =
            Math.sin(
              item.angle
            ) * 2.45;

        }
      );


      // -------------------------
      // BACKGROUND PARTICLES
      // -------------------------

      particles.rotation.y =
        time * 0.012;


      particles.rotation.x =
        Math.sin(
          time * 0.08
        ) * 0.04;


      purpleParticles.rotation.y =
        -time * 0.018;


      purpleParticles.rotation.x =
        time * 0.008;


      // -------------------------
      // PARALLAX
      // -------------------------

      mainGroup.rotation.x +=
        (
          mouse.y * 0.08 -
          mainGroup.rotation.x
        ) * 0.025;


      mainGroup.rotation.y +=
        (
          mouse.x * 0.12 -
          mainGroup.rotation.y
        ) * 0.025;


      // -------------------------
      // CAMERA FLOAT
      // -------------------------

      camera.position.x +=
        (
          mouse.x * 0.35 -
          camera.position.x
        ) * 0.02;


      camera.position.y +=
        (
          -mouse.y * 0.25 -
          camera.position.y
        ) * 0.02;


      camera.lookAt(
        0,
        0,
        0
      );


      // -------------------------
      // RENDER
      // -------------------------

      renderer.render(
        scene,
        camera
      );

    };


    animate();


    // =========================================
    // RESIZE
    // =========================================

    const handleResize = () => {

      const width =
        container.clientWidth;


      const height =
        container.clientHeight;


      if (
        width === 0 ||
        height === 0
      ) {
        return;
      }


      camera.aspect =
        width / height;


      camera.updateProjectionMatrix();


      renderer.setSize(
        width,
        height
      );

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    // =========================================
    // CLEANUP
    // =========================================

    return () => {

      cancelAnimationFrame(
        animationFrame
      );


      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


      coreGeometry.dispose();

      coreMaterial.dispose();


      innerGeometry.dispose();

      innerMaterial.dispose();


      glowGeometry.dispose();

      glowMaterial.dispose();


      orbitParticleGeometry.dispose();

      orbitParticleMaterial.dispose();


      particleGeometry.dispose();

      particleMaterial.dispose();


      purpleGeometry.dispose();

      purpleMaterial.dispose();


      renderer.dispose();


      if (
        renderer.domElement
          .parentNode
      ) {

        renderer.domElement
          .parentNode
          .removeChild(
            renderer.domElement
          );

      }

    };

  }, []);


  return (
    <div
      ref={containerRef}
      className="three-scene"
    />
  );
}


export default ThreeScene;