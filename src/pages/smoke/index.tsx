import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three';
import { Mesh } from 'three'
import { useTexture } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { TbVolume } from "react-icons/tb";
import { TbVolumeOff } from "react-icons/tb";

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
    color?: string;
    soundState?: boolean;
}> = ({ position, size, color, soundState }) => {
    const ref = useRef<any>()

    const activeSoundEffect = () => {
        // console.log('soundState', soundState)
        const audio = new Audio('/sounds/smoke.mp3'); // path to your audio in the public folder

        if (soundState) {
            audio.play();
        }
    }

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

        // ref.current.rotation.y += delta * 2.0;
    })

    return (
        <>
            <mesh
                position={position}
                ref={ref}
                onPointerEnter={(event) => {
                    event.stopPropagation(),
                        setIsHovered(true),
                        activeSoundEffect();
                }
                }
                onPointerLeave={() => (setIsHovered(false))}

            >
                <cylinderGeometry args={size} />
                <meshBasicMaterial attach="material-0" color="#eca55c" />
                <meshBasicMaterial attach="material-1" color="black" />
                <meshBasicMaterial attach="material-2" color="#f4f4f3" />
                <meshBasicMaterial attach="material-3" color="black" />
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
        ref.current.rotation.x = (Math.floor(Math.random() * 11) * (-90 + 10) - 10) * (Math.PI / 180);
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

const BoxColorTest: React.FC<{
    position: [number, number, number];
    size: [number, number, number, number];
    color: string;
}> = ({ position, size, color }) => {

    // const textures = useTexture([
    //     "red",
    //     "green",
    // ]);

    return (
        <>
            <mesh
                position={position}
            >
                <boxGeometry />
                {/* {textures.map((texture: any, idx: any) =>
                    <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
                )} */}

            </mesh>
        </>
    )
}

const SmokeV1: React.FC<{
    position: [number, number, number];
    rotation: [number, number, number];
    color?: string;
}> = ({ position, rotation, color }) => {

    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(1, 0, 0),
    ]);

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

    return (
        <>
            <mesh
                position={position}
                rotation={rotation}
                ref={ref}
            // onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            // onPointerLeave={() => (setIsHovered(false))}
            // onClick={() => (setIsClicked(!isClicked))}
            // scale={isHovered ? 0 : 1}
            >
                <tubeGeometry args={[curve, 50, 0.05, 2, false]} />
                <meshBasicMaterial color="#b6c0cb" />
            </mesh>
        </>
    )
}

const CigaretteBut: React.FC<{
    position: [number, number, number];
    rotation: [number, number, number];
    color?: string;
}> = ({ position, rotation, color }) => {

    const ref = useRef<any>()

    useEffect(() => {
        ref.current.rotation.x = -70 * (Math.PI / 180);
    }, []);

    const [isHovered, setIsHovered] = useState(false)


    useFrame((state, delta) => {
        // ref.current.rotation.x = -70 * (Math.PI / 180);


        // if (isHovered) {
        //     state.camera.zoom += delta;
        // } else {
        //     state.camera.zoom -= delta;
        // }

        // state.camera.zoom = Math.max(1, Math.min(3, state.camera.zoom));
        // state.camera.updateProjectionMatrix();

        // ref.current.rotation.y += delta * 2.0;
        ref.current.rotation.y += delta * 1.0;

    })

    return (
        <>
            <mesh
                position={position}
                rotation={rotation}
                ref={ref}
            >
                <cylinderGeometry
                    args={[0.2, 0.2, 5, 20]}
                />
                <meshBasicMaterial attach="material-0" color="#f4f4f3" />
                <meshBasicMaterial attach="material-1" color="black" />
                <meshBasicMaterial attach="material-2" color="#f4f4f3" />
            </mesh>
        </>
    )
}



function Index() {

    const [soundState, setSoundState] = useState(true)
    const audioRef = useRef(null);

    const handleSoundState = () => {



        if (soundState) {
            setSoundState((prev) => false)

        } else {
            setSoundState((prev) => true)
        }


    }


    return (
        <>
            <div className='h-screen'>
                <div className='container py-4 grid grid-cols-3 '>
                    <Button variant="default" size="icon" onClick={() => handleSoundState()}>
                        {
                            soundState ? (
                                <TbVolume size={20} />
                            ) :
                                (
                                    <TbVolumeOff size={20} />
                                )
                        }
                    </Button>
                </div>

                <Canvas >
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={0.1} />

                    <Cylinder position={[0, 0, 0]} size={[0.19, 0.2, 5.5, 40]} soundState={soundState} />

                    {/* <mesh
                        position={[0, 0.4, -1]}
                        rotation={[-70 * (Math.PI / 180), 0, 0]}

                    >
                        <cylinderGeometry
                            args={[0.2, 0.2, 5, 1000]}
                        />
                        <meshBasicMaterial attach="material-0" color="#f4f4f3" />
                        <meshBasicMaterial attach="material-1" color="black" />
                        <meshBasicMaterial attach="material-2" color="#f4f4f3" />
                    </mesh> */}
                    <CigaretteBut
                        position={[0, 0.4, -1]}
                        rotation={[-70 * (Math.PI / 180), 0, 0]}
                    />

                    <SmokeV1 position={[0.9, 1.4, 0]} rotation={[0, 0, -45 * (Math.PI / 4)]} />
                    <SmokeV1 position={[-0.9, 1.4, 0]} rotation={[0, 0, 40 * (Math.PI / 180)]} />


                    {/* <mesh position={[-0.9, 1.4, 0]} rotation={[0, 0, -45 * (Math.PI / 4)]}>
                        <tubeGeometry args={[curve, 50, 0.05, 2, false]} />
                        <meshBasicMaterial color="#f4f4f3" />
                    </mesh>

                    <mesh position={[0.9, 1.4, 0]} rotation={[0, 0, -4 * (Math.PI / 180)]}>
                        <tubeGeometry args={[curve, 50, 0.05, 2, false]} />
                        <meshBasicMaterial color="#f4f4f3" />
                    </mesh> */}



                </Canvas>
            </div>

            {/* <audio ref={audioRef} loop>
                <source src="/path-to-your-audio-file.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio> */}
        </>
    )
}

export default Index