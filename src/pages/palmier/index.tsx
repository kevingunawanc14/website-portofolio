/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function index() {
    return (
        <div>
            <div className='px-[7%] py-[6%] sm:px-[5%] sm:py-[3%] lg:px-[4%] lg:py-[2%] flex justify-between '>
                <div>
                    <img src="https://static.wixstatic.com/media/df14e7_b7cb67434367486e896f69c2482c49aa~mv2.png/v1/crop/x_1,y_68,w_3160,h_1210/fill/w_181,h_69,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20logo%20-%20no%20background.png" className='w-[110px]' alt="" />
                </div>
                <div className='grid content-center'>
                    <div className=''>
                        <Sheet >
                            <SheetTrigger asChild
                                className='cursor-pointer' >
                                <svg width="24" height="24" preserveAspectRatio="xMidYMid meet" data-bbox="44 64 112 72" viewBox="44 64 112 72" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Open Site Navigation">
                                    <g>
                                        <path d="M156 64v6H44v-6h112z"></path>
                                        <path d="M156 97v6H44v-6h112z"></path>
                                        <path d="M156 130v6H44v-6h112z"></path>
                                    </g>
                                </svg>
                            </SheetTrigger>
                            <SheetContent
                                side={'right'}
                                className='w-full sm:w-[360px] bg-black border-black '
                            >
                                {/* <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader> */}
                                <div className="grid ">
                                    <div className='flex justify-center mt-[70px] '>
                                        <div>
                                            <div className=''>
                                                <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Blog</p>
                                            </div>
                                            <div className=''>
                                                <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Linkedin</p>
                                            </div>
                                            <div className=''>
                                                <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Discord</p>
                                            </div>
                                            <div className=''>
                                                <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Contact</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                {/* <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter> */}
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>

            <div className=''>

            </div>

            <div>
                <div>
                    <p >Supercharge Developer Productivity</p>
                </div>
                <div>
                    <p>Chat with your code, review PR's, and automate documentation with an AI that understands your entire codebase</p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Sheet >
                    <SheetTrigger asChild>
                        <svg width="24" height="24" preserveAspectRatio="xMidYMid meet" data-bbox="44 64 112 72" viewBox="44 64 112 72" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Open Site Navigation">
                            <g>
                                <path d="M156 64v6H44v-6h112z"></path>
                                <path d="M156 97v6H44v-6h112z"></path>
                                <path d="M156 130v6H44v-6h112z"></path>
                            </g>
                        </svg>
                    </SheetTrigger>
                    <SheetContent
                        side={'right'}
                        className='w-full sm:w-[360px] bg-black border-black '
                    >
                        {/* <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader> */}
                        <div className="grid ">
                            <div className='flex justify-center mt-[70px] '>
                                <div>
                                    <div className=''>
                                        <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Blog</p>
                                    </div>
                                    <div className=''>
                                        <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Linkedin</p>
                                    </div>
                                    <div className=''>
                                        <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Discord</p>
                                    </div>
                                    <div className=''>
                                        <p className='poppins-regular text-white text-center text-[17px] py-[10px]'>Contact</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter> */}
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default index