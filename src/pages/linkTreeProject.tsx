/* eslint-disable @next/next/no-img-element */
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
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Utensils } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Beef } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';
import { Swords } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import Image from 'next/image'

interface Props {
    id: number,
    title: string,
    description: React.ReactElement,
    previews: string[]
    linkProject: string
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


function CardMotion({ id, title, description, previews, linkProject }: Props) {


    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const handleClick = (linkProject: string) => {
        window.open(linkProject, '_blank');
    };

    const background = 'hsl(197, 30%, 70%)';

    return (
        <motion.div
            className="card-container  "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3 }}

        >
            <div className="splash-wrapper sm:hidden">
                <div className="splash" style={{ background }} />
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-div cursor-pointer"
                variants={cardVariants}
                onClick={() => handleClick(linkProject)}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="">
                        <Carousel
                            plugins={[plugin.current as any]}
                            className="cursor-grab"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent>
                                {previews.map((preview, index) => (
                                    <CarouselItem
                                        key={index}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="">
                                            <Image
                                                className="border rounded-md w-full h-40"
                                                src={preview}
                                                width={500}
                                                height={500}
                                                alt="gg"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="grid grid-cols-2 " >
                        <CardTitle className="text-base rubik-regular text-center">{title}</CardTitle>


                        <div className="grid content-center">
                            <div> {description}</div>
                        </div>


                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
}

const project: [number, string, React.ReactElement, string[], string][] = [
    [1, "Software Engineer Internship",
        <>
            <div className="flex justify-center items-center gap-2 ">
                <p>Komunal</p>
                <HandCoins className="ms-3" size={20} />
                <ArrowLeftRight size={20} />
            </div>
        </>,
        ["https://plus.unsplash.com/premium_photo-1670213989452-100c125a6180?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        'https://docs.google.com/document/d/1i-kOT39GjEV1hLn5SibxSOf_763aVqM2Mgzec5NoV1w/edit?usp=sharing'],


    [2, "Sport Reservation & Gamification Web App",
        <>
            <div className="flex justify-center items-center gap-2 ">
                <Dumbbell size={20} />
                <Trophy size={20} />
                <Swords size={20} />
            </div>

        </>,
        ["https://kevin-gg.vercel.app//images/home1.png",
            "https://kevin-gg.vercel.app//images/home2.png",
            "https://kevin-gg.vercel.app//images/list1.png",
            "https://kevin-gg.vercel.app//images/journal.png",
            "https://kevin-gg.vercel.app//images/payment.png",
            "https://kevin-gg.vercel.app//images/order1.png",
            "https://kevin-gg.vercel.app//images/order2.png",
            "https://kevin-gg.vercel.app//images/avatar.png",
            "https://kevin-gg.vercel.app//images/theme.png",
            "https://kevin-gg.vercel.app//images/achievement1.png",
            "https://kevin-gg.vercel.app//images/rate1.png",
            "https://kevin-gg.vercel.app//images/rate2.png",
            "https://kevin-gg.vercel.app//images/admin1.png",
            "https://kevin-gg.vercel.app//images/admin2.png",
            "https://kevin-gg.vercel.app//images/admin3.png",


        ],
        "https://github.com/kevingunawanc14/reservation-frontend-react"
    ],
    [3, "Coming Soon",
        <>
            <Calendar />
        </>,
        [],
        'https://www.google.com/'],

    [4, "Coming Soon",
        <>
            <Calendar />
        </>,
        [],
        'https://www.google.com/'],
];

function LinkTreeProject() {
    return (
        <>
            <div id="project" className="h-screen z-50 mt-10">
                <div className="container mx-auto">
                    <p className="text-primary text-4xl md:text-5xl mb-4 font-bold poppins-medium tracking-tight pt-2">Featured projects</p>
                </div>
                {project.map(([id, title, description, previews, linkProject]) => (
                    <CardMotion key={id} id={id} title={title} description={description} previews={previews} linkProject={linkProject} />
                ))}
            </div>
        </>
    )
}



export default LinkTreeProject