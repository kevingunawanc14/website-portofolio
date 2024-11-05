import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Navbar from '../components/navbar';
import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
} from "@radix-ui/react-icons"

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from 'next/image'

export interface Artwork {
    artist: string
    art: string
}

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/01_FB_Creation_1024.jpg?1635858803",
    },
    {
        artist: "Tom Byrom",
        art: "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/02_FB_Creation_1024.jpg?1635858803",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/03_FB_Creation_1024.jpg?1635858803",
    },
]

export default function detailProblem() {
    return (
        <>
            <Navbar />

            <div className=' '>
                <div className='container '>
                    <div className='flex justify-center mt-5'>
                        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {works.map((artwork) => (
                                    <figure key={artwork.artist} className="shrink-0">
                                        <div className="overflow-hidden rounded-md">
                                            <Image
                                                src={artwork.art}
                                                alt={`Photo by ${artwork.artist}`}
                                                className="h-40 w-60 sm:h-60 sm:w-60 object-cover"
                                                width={300}
                                                height={400}
                                            />

                                        </div>
                                        <figcaption className="pt-2 text-xs text-muted-foreground">
                                            Photo by{" "}
                                            <span className="font-semibold text-foreground">
                                                {artwork.artist}
                                            </span>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center text-lg sm:text-2xl poppins-semibold'>Which type of water was created first at the beginning of creation ?</p>
                    </div>
                    <div className='flex justify-center mt-7 '>
                        <ToggleGroup type="single" size={'custom1'} variant="outline">
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5'>
                                <ToggleGroupItem value="bold" aria-label="Toggle bold" className='min-w-60 poppins-regular '>
                                    Air
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic" aria-label="Toggle italic" className='min-w-60 poppins-regular'>
                                    Air Laut
                                </ToggleGroupItem>
                                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" className='min-w-60 poppins-regular'>
                                    Air Hujan
                                </ToggleGroupItem>
                            </div>
                        </ToggleGroup>
                    </div>

                </div>

                <div className='border-b-2 border-primary hidden sm:block'>
                </div>

                <div className='container  '>
                    <div className='h-24 content-center'>
                        <div className='flex justify-end '>
                            <Button size="default" className='poppins-regular w-full sm:w-max '>Submit</Button>

                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}
