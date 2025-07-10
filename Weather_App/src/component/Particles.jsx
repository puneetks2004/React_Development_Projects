import { loadAll } from "@tsparticles/all";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import "./particle.css";
//for particles usage 
export default function ParticlesCanvas() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (init) {
        return (
            <Particles
                className="particle-container"
                options={{
                    particles: {
                        number: {
                            value: 800, // Increase for denser stars
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: "#ffffff", // Star color
                        },
                        shape: {
                            type: "circle", // Circular star shape
                        },
                        opacity: {
                            value: { min: 0.3, max: 1 }, // Randomize opacity
                            animation: {
                                enable: true,
                                speed: 5, // Blinking speed
                                sync: false, // Independent blinking
                            },
                        },
                        size: {
                            value: { min: 0.5, max: 1 }, // Varying star sizes
                        },
                        move: {
                            enable: true,
                            speed: { min: 0.2, max: 1.5 }, // Slow movement for subtle effect
                            direction: "top", // Random movement
                            outModes: {
                                default: "out", // Stars disappear at the top
                            },
                        },
                    },
                    background: {
                        opacity: 0, // Transparent background
                    },
                }}
            />
        );
    }

    return <></>;
}