import * as THREE from './three.module.js';

class MyThreeElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div style="width: 100%; height: 500px;"></div>`;
    this.container = this.querySelector('div');
    this.initThree();
  }
  
  initThree() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.animate();
  }
  
  animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

customElements.define('my-three-element', MyThreeElement);