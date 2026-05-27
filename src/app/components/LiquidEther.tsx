"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LiquidEtherProps {
    colors?: string[];
    mouseForce?: number;
    cursorSize?: number;
    isViscous?: boolean;
    viscous?: number;
    iterationsViscous?: number;
    iterationsPoisson?: number;
    resolution?: number;
    isBounce?: boolean;
    autoDemo?: boolean;
    autoSpeed?: number;
    autoIntensity?: number;
    takeoverDuration?: number;
    autoResumeDelay?: number;
    autoRampDuration?: number;
}

export default function LiquidEther({
                                        colors = ["#1a1a1a", "#3d3d3d", "#ffffff"],
                                        mouseForce = 20,
                                        cursorSize = 120,
                                        autoDemo = true,
                                        autoSpeed = 0.4,
                                        autoIntensity = 1.5,
                                    }: LiquidEtherProps) {

    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!mountRef.current) return;

        const scene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(
            -1,
            1,
            1,
            -1,
            0,
            1
        );

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );

        mountRef.current.appendChild(renderer.domElement);

        const uniforms = {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_resolution: {
                value: new THREE.Vector2(
                    mountRef.current.clientWidth,
                    mountRef.current.clientHeight
                ),
            },
            u_color1: { value: new THREE.Color(colors[0]) },
            u_color2: { value: new THREE.Color(colors[1]) },
            u_color3: { value: new THREE.Color(colors[2]) },
        };

        const material = new THREE.ShaderMaterial({

            uniforms,

            vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;

          gl_Position = vec4(position, 1.0);
        }
      `,

            fragmentShader: `
        varying vec2 vUv;

        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;

        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;

        float noise(vec2 p) {
          return sin(p.x) * sin(p.y);
        }

        void main() {

          vec2 uv = vUv;

          vec2 mouse = u_mouse;

          float dist = distance(uv, mouse);

          float wave =
            sin((uv.x + u_time * 0.08) * 8.0) *
            cos((uv.y + u_time * 0.08) * 8.0);

          float ripple = sin(dist * 30.0 - u_time * 4.0);

          float finalWave = wave * 0.5 + ripple * 0.25;

          vec3 color = mix(u_color1, u_color2, uv.y + finalWave);

          color = mix(color, u_color3, smoothstep(0.4, -0.2, finalWave));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);

        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        const mouse = new THREE.Vector2(0.5, 0.5);

        const handleMouseMove = (e: MouseEvent) => {

            const rect = renderer.domElement.getBoundingClientRect();

            mouse.x = (e.clientX - rect.left) / rect.width;

            mouse.y = 1 - (e.clientY - rect.top) / rect.height;
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationFrame: number;

        const animate = () => {

            uniforms.u_time.value += 0.01;

            if (autoDemo) {

                const t = uniforms.u_time.value * autoSpeed;

                mouse.x =
                    0.5 + Math.sin(t * 0.7) * 0.25 * autoIntensity;

                mouse.y =
                    0.5 + Math.cos(t * 0.9) * 0.25 * autoIntensity;
            }

            uniforms.u_mouse.value.lerp(mouse, 0.08);

            renderer.render(scene, camera);

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {

            if (!mountRef.current) return;

            renderer.setSize(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            );

            uniforms.u_resolution.value.set(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            );
        };

        window.addEventListener("resize", handleResize);

        return () => {

            cancelAnimationFrame(animationFrame);

            window.removeEventListener("mousemove", handleMouseMove);

            window.removeEventListener("resize", handleResize);

            renderer.dispose();

            geometry.dispose();

            material.dispose();

            if (
                mountRef.current &&
                renderer.domElement.parentNode === mountRef.current
            ) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };

    }, [
        colors,
        mouseForce,
        cursorSize,
        autoDemo,
        autoSpeed,
        autoIntensity,
    ]);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 w-full h-full"
        />
    );
}