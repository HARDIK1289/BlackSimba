import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from "gsap";
import './Model.css'

const Model = () =>{
  useEffect(()=>{
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  document.body.appendChild( renderer.domElement );

  const controls = new OrbitControls( camera, renderer.domElement );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  const textureLoader = new THREE.TextureLoader()
  const sodaTexture = textureLoader.load("/src/Images/Blacksimba Mockup-1.png")

  sodaTexture.wrapS = THREE.RepeatWrapping;
  sodaTexture.wrapT = THREE.RepeatWrapping;
  sodaTexture.repeat.set(1, 1);

  const geometry = new THREE.CylinderGeometry( 1,1,5,32 ,1,true);
  const material = new THREE.MeshStandardMaterial( { map: sodaTexture,} );
  const cylinder = new THREE.Mesh( geometry, material );
 // cylinder.rotation.set(0.2,0,0)
  scene.add( cylinder );
  
  const lidTexture = textureLoader.load("/src/Images/lid.png") //top lid
  const lidGeometry = new THREE.CircleGeometry(1,32);
  const lidMaterial = new THREE.MeshStandardMaterial( { map: lidTexture } );
  const lid =  new THREE.Mesh(lidGeometry , lidMaterial)
  lid.rotation.x = -Math.PI / 2
  lid.position.y=2.6;
  //lid.position.set=(0,2.6,0);
  //lid.rotation.set((-Math.PI / 2) + 0.2,0,0)
  scene.add(lid);
  
  const bottomLidTexture = textureLoader.load("/src/Images/bottom1.png")
  const bottomLidGeometry = new THREE.CircleGeometry(1,32);
  const bottomLidMaterial = new THREE.MeshStandardMaterial( { map: bottomLidTexture } );
  const bottomLid =  new THREE.Mesh(bottomLidGeometry , bottomLidMaterial)
  bottomLid.rotation.x = Math.PI / 2
  bottomLid.position.y=-2.6;
  //bottomLid.position.set=(0,-2.5,0);
  //bottomLid.rotation.set(Math.PI / 2 + 0.2,0,0)
  scene.add(bottomLid)

  //camera.position.z = 5;
  camera.position.set( 0, 2, 10);
  controls.update();

  gsap.to(camera.position, {
    z: -7, 
    duration: 2, 
    ease: "power2.inOut", 
    onUpdate: () => controls.update(),
  });

  const handleResize = () =>{
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width,height);
    renderer.setPixelRatio(window.devicePixelRatio)

  }
  window.addEventListener('resize',handleResize);

  function animate() {
    //requestAnimationFrame(animate)
    //cube.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    controls.update();
    renderer.render( scene, camera );
  }
})

}

export default Model;