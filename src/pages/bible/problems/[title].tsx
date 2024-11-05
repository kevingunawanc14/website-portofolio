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

export default function detailProblem() {
    return (
        <>
            <Navbar />

            <div className='container h-screen content-center scro'>
                <div className='flex justify-center'>
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="max-w-md rounded-lg border md:min-w-[450px]"
                    >
                        <ResizablePanel defaultSize={50}>
                            <div className="flex h-[200px] items-center justify-center p-6">
                                <span className="font-semibold">One</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={25}>
                                    <div className="flex h-full items-center justify-center p-6">
                                        <span className="font-semibold">Two</span>
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle withHandle />
                                <ResizablePanel defaultSize={75}>
                                    <div className="flex h-full items-center justify-center p-6">
                                        <span className="font-semibold">Three</span>
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>

                    </ResizablePanelGroup>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-2xl poppins-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe animi aliquam ex, fugit, cumque libero sunt dignissimos exercitationem hic odio alias? Accusamus autem illum iste delectus saepe suscipit magni ?</p>
                </div>
                <div className='flex justify-center mt-7 '>
                    <ToggleGroup type="single" size={'custom1'} variant="outline">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold" className='min-w-60 '>
                            abcde
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" aria-label="Toggle italic" className='min-w-60 '>
                            abcde
                        </ToggleGroupItem>
                        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" className='min-w-60 '>
                            abcde
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div className='flex justify-end'>
                    <Button size="lg" className='mt-10 text-lg rubik-regular'>Submit</Button>
                    {/* <Button>Button</Button> */}
                </div>
            </div>

        </>
    )
}
