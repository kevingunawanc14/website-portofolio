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
        <div className='bg-white'>
            {/* navbar */}
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

            {/* intro */}
            <div className='py-[30px]'>
                <div className='flex justify-center sm:px-[30px] py-[20px]'>
                    <p className='text-[36px] sm:text-[35px] md:text-[41px] lg:text-[55px] xl:text-[78px] poppins-bold text-center leading-none' >Supercharge  <br className='md:hidden' /> Developer <br />Productivity</p>
                </div>
                <div className='py-[20px]'>
                    <div className='flex justify-center px-[20px] sm:px-[30px]'>
                        <p className='text-[20px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[22px] poppins-medium text-center leading-tight'>Chat with your code, review PR's, and automate documentation with <br /> an AI that understands your entire codebase</p>
                    </div>
                </div>
                <div className='py-[20px]'>
                    <div className='sm:flex justify-center hidden gap-3 '>
                        <div className='content-center'>
                            <p className='text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] poppins-medium text-center leading-tight text-[#757575]'>Backed by</p>
                        </div>
                        <div>
                            <img src="https://static.wixstatic.com/media/df14e7_6e1ff5cc51b34f46ade20cc664a47dac~mv2.png/v1/crop/x_0,y_34,w_1200,h_275/fill/w_180,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0_3kNFqkCqG5z7C_ul.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='py-[20px]'>
                    <div className='flex justify-center'>
                        <Button variant="outline" className='w-[187px] h-[60px] rounded-none border-black border-2 poppins-regular hover:bg-[#D9AD0D] hover:border-[#D9AD0D]   duration-300 bg-white 	'>Try For Free</Button>
                    </div>

                </div>
                <div>

                </div>
            </div>

            {/* footer */}
            <div className="py-[30px] container">
                <div>
                    <div className='w-full	'>
                        <svg preserveAspectRatio="none" data-bbox="0 0 1776 663" viewBox="0 0 1776 663" className='w-full' xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <defs>
                                    <clipPath id="9d3ec3c8-7a4f-49aa-89a2-0775324967c2_comp-m49c9s23_r_comp-lxhg1t1r">
                                        <path stroke-width="0" d="M1776 0v663H0V0h1776z"></path>
                                    </clipPath>
                                </defs>
                                <path fill="#d8400e" d="M1159.6 163.047v27.212h-73.88v-27.212h73.88z"></path>
                                <path fill="#d8400e" d="M710.372 304.109v27.212h-73.88v-27.212h73.88z"></path>
                                <path fill="#d8400e" d="m445.022 364.072 42.32-1.856v90.814l-42.32 7.578v-96.536z"></path>
                                <path fill="#d8400e" d="M786.812 210.223v27.212h-151.9v-27.212h151.9z"></path>
                                <path fill="#d8400e" d="m671.998 505.328 38.871-32.942h74.867l-23.648 32.942h-90.09z"></path>
                                <path fill="#d8400e" d="m1418.978 219.669-42.16 6.615v-35.947l42.16-9.454v38.786z"></path>
                                <path fill="#d8400e" d="M1085.229 275.396v57.426h-74.864v-57.426h74.864z"></path>
                                <path fill="#d8400e" d="M1308.235 357.817v84.323h-74.864v-84.323h74.864z"></path>
                                <path fill="#d8400e" d="M972.923 386.371v27.216H898.04v-27.216h74.883z"></path>
                                <path fill="#d8400e" d="M1037.661 505.495h128.754l18.375 15.467h-136.136l-10.993-15.467z"></path>
                                <g clip-path="url(#9d3ec3c8-7a4f-49aa-89a2-0775324967c2_comp-m49c9s23_r_comp-lxhg1t1r)">
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.35.54 1300.63 170.9"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 60.72-474.72 138.39"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 120.88-474.72 106.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 181.06-474.72 74.48"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 241.24-474.72 42.51"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 301.42-474.72 10.55"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 361.58-474.72-21.4"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 421.76-474.72-53.37"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 481.94-474.72-85.33"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 542.12-474.72-117.3"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 602.28-474.72-149.25"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1775.35 662.46-474.72-181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 170.9.46.54"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 199.12.46 60.73"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 227.33.46 120.88"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 255.54.46 181.06"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 283.76.46 241.25"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 311.97.46 301.42"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 340.18.46 361.58"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 368.39.46 421.76"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 396.61.46 481.94"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 424.82.46 542.12"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 453.03.46 602.28"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 481.24.46 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 170.9H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 199.12H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 227.33H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 255.54H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 283.75H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 311.97H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 340.18H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 368.4H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 396.61H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 424.82H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 453.03H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 481.24H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 170.9v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1343.79 155.41v342.31"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1386.95 139.94v374.25"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1430.11 124.44v406.22"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1473.27 108.94v438.19"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1516.41 93.47V563.6"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1559.57 77.98V580.1"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1602.73 62.5v534.07"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1645.89 47.01v566.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1689.05 31.51v598"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1732.21 16.04v629.95"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.35.54v661.92"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 170.9v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M433.71 155.41v342.31"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M390.4 139.94v374.25"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M347.07 124.44v406.22"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M303.75 108.94v438.19"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M260.42 93.47V563.6"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M217.09 77.98V580.1"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M173.77 62.5v534.07"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M130.44 47.01v566.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M87.11 31.51v598"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M43.79 16.04v629.95"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M.46.54v661.92"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 170.9v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1225.77 171.01v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1150.88 171.1v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1076.02 171.21v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1001.16 171.3v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M926.27 171.41v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M851.41 171.49v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M776.53 171.6v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M701.66 171.69v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M626.78 171.79v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M551.92 171.88v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 171.99v310.34"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.35 662.46H.46"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.35.54H.46"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1732.21 16.04H43.79"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1689.05 31.51H87.12"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1645.89 47.01H130.44"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1602.73 62.5H173.77"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1559.57 77.98H217.09"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1516.41 93.47H260.42"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1473.27 108.94H303.75"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1430.11 124.44H347.08"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1386.95 139.94H390.4"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1343.79 155.41H433.71"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 170.9H477.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M.46 662.46h1774.89"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M43.55 645.98h1688.4"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M86.61 629.51h1601.92"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M129.68 613.04h1515.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M172.75 596.57h1428.98"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M215.84 580.1h1342.47"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M258.9 563.6h1256.01"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M301.97 547.13h1169.52"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M345.06 530.66h1083.03"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M388.12 514.19h996.55"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M431.19 497.72h910.08"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M474.26 481.24h823.59"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.04 481.24.46 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M551.92 481.24 161.83 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m626.78 481.24-303.6 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M701.66 481.24 484.53 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M776.53 481.24 645.88 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m851.41 481.24-44.18 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m926.27 481.24 42.31 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1001.15 481.24 128.79 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1076.02 481.24 215.28 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1150.88 481.24 301.77 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1225.76 481.24 1614 662.45"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m1300.63 481.24 474.72 181.21"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M477.55 171.4.98 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M552.38 171.36 162.33 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M627.21 171.32 323.68 1.05"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M702.04 171.27 485.03 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M776.86 171.23 646.38 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M851.69 171.19 807.75 1.05"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="m926.5 171.14 42.6-170.1"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1001.33 171.08 1130.46 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1076.15 171.03 1291.8 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1150.98 170.99 1453.16 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1225.8 170.95 1614.52 1.04"></path>
                                    <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1300.63 170.9 1775.87 1.04"></path>
                                </g>
                                <path stroke-miterlimit="10" stroke="#4d4d4d" fill="none" d="M1776 0v663H0V0h1776z"></path>
                                <path stroke-miterlimit="10" stroke="#333333" fill="none" d="M1775.8.3v662.5H.3V.3h1775.5z"></path>
                                <path fill="#d8400e" d="M871.243 659.743v.272h-.23v-.272h.23z"></path>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-5 py-[30px] lg:px-[30px] gap-[20px] '>
                            <div className='col-span-4'>
                                <img src="https://static.wixstatic.com/media/df14e7_b7cb67434367486e896f69c2482c49aa~mv2.png/v1/crop/x_0,y_74,w_3163,h_1197/fill/w_466,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20logo%20-%20no%20background.png" alt=""
                                    className='w-[104px] sm:w-[200px] lg:w-[240px] xl:w-[340px]'
                                />
                            </div>
                            <div className=''>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className='text-[#D9AD0D] poppins-regular text-[14px]'>Social</p>

                                        <div className='mt-[10px]  underline '>
                                            <p className='poppins-regular text-[14px]'>X</p>
                                            <p className='poppins-regular text-[14px]'>Discord</p>
                                            <p className='poppins-regular text-[14px]'>Linkedin</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p className='text-[#D9AD0D] poppins-regular text-[14px]'>Contact</p>

                                        <div className='mt-[10px]  underline '>
                                            <p className='poppins-regular text-[14px]'>founders@palmier.io</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* copyright */}
            <div>
                <div className='bg-[#D9AD0D] '>
                    <div className='flex justify-start container p-[5px] '>
                        <p className='text-white poppins-regular tracking-widest	'>© 2024 by Palmier, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index