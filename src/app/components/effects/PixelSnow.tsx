"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PixelSnow() {

    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if (!mountRef.current) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();

        const particlesCount = 1000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.01,
            color: "#ffffff",
        });

        const particlesMesh = new THREE.Points(
            particlesGeometry,
            particlesMaterial
        );

        scene.add(particlesMesh);

        const animate = () => {

            requestAnimationFrame(animate);

            particlesMesh.rotation.y += 0.0005;

            renderer.render(scene, camera);

        };

        animate();

        const handleResize = () => {

            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        };

        window.addEventListener("resize", handleResize);

        return () => {

            window.removeEventListener("resize", handleResize);

            renderer.dispose();

            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }

        };

    }, []);

    return (
        <div className="absolute inset-0 z-0 opacity-30" ref={mountRef} />
    );
}