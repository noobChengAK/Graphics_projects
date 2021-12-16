import * as THREE from "https://web.cs.manchester.ac.uk/three/three.js-master/build/three.module.js";
//import { OrbitControls } from "https://web.cs.manchester.ac.uk/three/three.js-master/examples/jsm/controls/OrbitControls.js";
//import { GLTFLoader } from "https://web.cs.manchester.ac.uk/three/three.js-master/examples/jsm/loaders/GLTFLoader.js";


const canvas = document.querySelector('.webgl');
scene = new THREE.Scene();
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true

