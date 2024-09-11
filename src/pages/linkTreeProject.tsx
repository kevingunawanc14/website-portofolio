import * as React from "react"
import { motion, Variants } from 'framer-motion';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Utensils } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Beef } from 'lucide-react';
import { Calendar } from 'lucide-react';

interface Props {
    id: number;
    emoji: string;
    icon: React.ReactElement;
    hueA: number;
    hueB: number;
}

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function CardMotion({ id, emoji, icon, hueA, hueB }: Props) {
    const background = 'hsl(197, 30%, 70%)';

    return (
        <motion.div
            className="card-container cursor-pointer "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3 }}
        >
            <div className="splash-wrapper sm:hidden">
                <div className="splash" style={{ background }} />

            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="card-div " variants={cardVariants}   >
                <CardHeader className="max-w-48 ">
                    <CardTitle className="text-2xl rubik-regular">{emoji}</CardTitle>
                    <CardDescription>{icon}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                    {emoji !== "Coming Soon" && (
                        <motion.div
                            whileTap={{ scale: 0.9 }} // Gesture animation when the button is tapped
                            whileHover={{ scale: 1.1 }} // Gesture animation when the button is hovered
                        >
                            <Button>
                                <ArrowUpRight />
                            </Button>
                        </motion.div>
                    )}
                </CardFooter>
            </motion.div>
        </motion.div>
    );
}

const food: [number, string, React.ReactElement, number, number][] = [
    // ["Program Makan Siang Gratis", <Beef />,
    //     0, 0],
    [1, "Coming Soon", <Calendar key={1} />, 0, 0],
    [2, "Coming Soon", <Calendar key={2} />, 0, 0],
    [3, "Coming Soon", <Calendar key={3} />, 0, 0],
    [4, "Coming Soon", <Calendar key={4} />, 0, 0],
    // ["Cari Kos Petra", 0, 0],
    // ["Valorant Match Prediction", 0, 0],
    // ["Food Reccomendation Today", 0, 0],
];

function linkTreeProject() {
    return (
        <>
            <div id="project" className="h-screen z-50 mt-10">
                <div className="container mx-auto">
                    <p className="text-primary text-4xl md:text-5xl mb-4 font-bold poppins-medium tracking-tight pt-2">Featured projects</p>
                </div>
                {food.map(([id, emoji, icon, hueA, hueB]) => (
                    <CardMotion key={id} id={id} emoji={emoji} icon={icon} hueA={hueA} hueB={hueB} />
                ))}

                {/* <div className="grid sm:grid-cols-2 grid-cols-1 mt-14 ">


       


                </div > */}

            </div>



        </>
    )
}



export default linkTreeProject