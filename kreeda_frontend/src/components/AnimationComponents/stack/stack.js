import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './stack.module.css';

const Stack = ({ sorecRef }) => {
  const containerRef = useRef();
  const stackRef = useRef([]);
  const boxCountRef = useRef(0);

  useEffect(() => {
    let scene, camera, renderer;
    const boxWidth = 30;
    const boxHeight = 3;
    const boxDepth = 30;
    const colors = [0x3498db, 0x2ecc71, 0xe74c3c, 0xf39c12, 0x9b59b6, 0x1abc9c];
    const slideSpeed = 0.05;
    const directions = ['right', 'top', 'left', 'right', 'left', 'top', 'left', 'left', 'right', 'right'];
    let currentDirectionIndex = 0;

    const messages = ["Good Job!", "Perfect!", "Amazing!", "Keep Going!", "Awesome!", "Fantastic!", "Great Work!", "Well Done!", "Superb!", "Excellent!"];
    let messageIndex = 0;

    const backgrounds = [
      'linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d)',
      'linear-gradient(to bottom, #00c6ff, #0072ff)',
      'linear-gradient(to bottom, #ee0979, #ff6a00)',
      'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      'linear-gradient(to bottom, #02aab0, #00cdac)',
      'linear-gradient(to bottom, #da22ff, #9733ee)'
    ];
    let backgroundIndex = 0;

    function init() {
      const container = containerRef.current;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      camera.position.set(0, 20, 60);
      camera.lookAt(0, 20, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(20, 40, 20);
      scene.add(directionalLight);

      stackRef.current = [];

      window.addEventListener('resize', onWindowResize);

      animate();
    }

    function addBox() {
      boxCountRef.current++;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      const material = new THREE.MeshPhongMaterial({ color: colors[Math.floor(Math.random() * colors.length)] });
      const box = new THREE.Mesh(geometry, material);

      const yPosition = stackRef.current.length * boxHeight;
      let startPosition;

      switch (directions[currentDirectionIndex]) {
        case 'right':
          startPosition = new THREE.Vector3(40, yPosition, 0);
          break;
        case 'top':
          startPosition = new THREE.Vector3(0, yPosition + 40, 0);
          break;
        case 'left':
          startPosition = new THREE.Vector3(-40, yPosition, 0);
          break;
        default:
          startPosition = new THREE.Vector3(0, yPosition, 0);
      }

      box.position.copy(startPosition);
      box.userData = { targetPosition: new THREE.Vector3(0, yPosition, 0) };

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const fontSize = 256;
      canvas.width = canvas.height = fontSize * 2;
      context.fillStyle = 'white';
      context.font = `Bold ${fontSize}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(boxCountRef.current.toString(), canvas.width / 2, canvas.height / 2);
      const numberTexture = new THREE.CanvasTexture(canvas);

      const numberMaterial = new THREE.MeshBasicMaterial({ map: numberTexture, transparent: true });
      const numberPlane = new THREE.Mesh(new THREE.PlaneGeometry(boxWidth * 0.9, boxDepth * 0.9), numberMaterial);
      numberPlane.position.set(0, boxHeight / 2 + 0.01, 0);
      numberPlane.rotation.x = -Math.PI / 2;
      box.add(numberPlane);

      scene.add(box);
      stackRef.current.push(box);

      currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;

      const stackHeight = stackRef.current.length * boxHeight;
      camera.position.y = Math.max(stackHeight + 20, 60);
      camera.lookAt(0, stackHeight / 2, 0);

      if (boxCountRef.current % 5 === 0) {
        updateMessage();
        changeBackground();
      }
    }

    function updateMessage() {
      const messageDiv = document.getElementById('message');
      if (messageDiv) {
        messageDiv.textContent = messages[messageIndex];
        messageDiv.style.opacity = 1;
        setTimeout(() => {
          messageDiv.style.opacity = 0;
        }, 2000);

        messageIndex = (messageIndex + 1) % messages.length;
      }
    }

    function changeBackground() {
      backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
      if (containerRef.current) {
        containerRef.current.style.background = backgrounds[backgroundIndex];
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      stackRef.current.forEach(box => {
        if (!box.position.equals(box.userData.targetPosition)) {
          box.position.lerp(box.userData.targetPosition, slideSpeed);
          if (box.position.distanceTo(box.userData.targetPosition) < 0.01) {
            box.position.copy(box.userData.targetPosition);
          }
        }
      });

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      const container = containerRef.current;
      if (container && renderer && camera) {
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
      }
    }

    init();

    const intervalId = setInterval(() => {
      if (sorecRef && sorecRef.current > boxCountRef.current) {
        addBox();
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [sorecRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div id="message" className={styles.message}></div>
    </div>
  );
};

export default Stack;