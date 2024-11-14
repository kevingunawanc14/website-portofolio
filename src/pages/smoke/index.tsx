import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three';

const Cube: React.FC<{
    position: [number, number, number];
    size: [number, number, number];
    color: string;
}> = ({ position, size, color }) => {
    const ref = useRef<any>()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta * 2.0
        ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2
    })

    return (
        <mesh position={position} ref={ref} >
            <boxGeometry args={size} />
            <meshStandardMaterial args={[{ color: color }]} wireframe />
        </mesh>
    )
}

const Sphere: React.FC<{
    position: [number, number, number];
    size: [number, number, number];
    color: string;
}> = ({ position, size, color }) => {
    const ref = useRef<any>()

    const [isHovered, setIsHovered] = useState(true)

    useFrame((state, delta) => {
        const speed = isHovered ? 1 : 0.2
        ref.current.rotation.y += delta * speed
    })

    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerLeave={() => (setIsHovered(false))}

        >
            <sphereGeometry args={size} />
            <meshStandardMaterial args={[{ color: isHovered ? "orange" : "light" }]} wireframe />
        </mesh>
    )
}

const Cylinder: React.FC<{
    position: [number, number, number];
    size: [number, number, number, number];
    color: string;
}> = ({ position, size, color }) => {
    const ref = useRef<any>()

    useEffect(() => {
        ref.current.rotation.x = -70 * (Math.PI / 180);
    }, []);

    const [isHovered, setIsHovered] = useState(false)


    useFrame((state, delta) => {
        if (isHovered) {
            state.camera.zoom += delta;
        } else {
            state.camera.zoom -= delta;
        }

        state.camera.zoom = Math.max(1, Math.min(3, state.camera.zoom));
        state.camera.updateProjectionMatrix();

        ref.current.rotation.y += delta * 2.0;
    })

    return (
        <>
            <mesh
                position={position}
                ref={ref}
                onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
                onPointerLeave={() => (setIsHovered(false))}
            >
                <cylinderGeometry args={size} />
                <meshStandardMaterial
                    args={[{ color: "orange" }]}

                />
            </mesh>
        </>
    )
}

const Smoke: React.FC<{
    position: [number, number, number];
    size: [number, number, number, number];
    color: string;
}> = ({ position, size, color }) => {
    const ref = useRef<any>()

    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        ref.current.rotation.x = (Math.random() * (-90 + 10) - 10) * (Math.PI / 180);
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta * 2.0
        ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2
    })
    console.log(isHovered)

    return (
        <>
            <mesh
                position={position}
                ref={ref}
                onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
                onPointerLeave={() => (setIsHovered(false))}
                onClick={() => (setIsClicked(!isClicked))}
                scale={isHovered ? 0 : 1}
            >
                <torusKnotGeometry args={size} />
                <meshStandardMaterial
                    args={[{ color: "rgb(227, 227, 218)" }]}
                />
            </mesh>
        </>
    )
}


function Index() {
    return (
        <>
            <div className='h-screen'>
                <Canvas >
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={0.1} />

                    <Smoke position={[0.5, 0.5, 0]} size={[0.1, 0.03, 1000, 50]} color={"grey"} />
                    <Smoke position={[1, 1, 0]} size={[0.1, 0.03, 1000, 50]} color={"grey"} />
                    <Smoke position={[-0.5, 1, 0]} size={[0.1, 0.03, 1000, 50]} color={"grey"} />
                    <Smoke position={[-1, 0.8, 0]} size={[0.1, 0.03, 1000, 50]} color={"grey"} />

                    <Cylinder position={[0, 0, 0]} size={[0.2, 0.2, 5, 8]} color={"green"} />



                    {/* <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color='yellow' /> */}

                    {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"white"} /> */}
                    {/* <Smoke position={[-2, 1, 0]} size={[0.5, 0.1, 1000, 50]} color={"grey"} /> */}

                    {/* <Smoke position={[-2, 0, 0]} size={[0.5, 0.1, 1000, 50]} color={"grey"} /> */}
                    {/* <Smoke position={[2, 0, 0]} size={[0.1, 0.02, 40, 32]} color={"grey"} /> */}


                </Canvas>
            </div>
        </>
    )
}

export default Index