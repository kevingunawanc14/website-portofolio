import React, { ReactNode, useState, useEffect } from 'react'
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sun, Moon, Map, ListChecks, HandCoins } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function Navbar(): ReactNode {
    const { pathname, query } = useRouter();
    console.log('pathname', pathname)
    console.log('query', query)
    // const currentPath = router.pathname;

    const callbackUrl: any = query.callbackUrl || "/bible/problemset";
    console.log('callbackUrl', callbackUrl)

    const { data }: any = useSession();
    console.log('data', data)

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleLogin = async (event: any) => {
        // event.preventDefault();
        alert('alertos')
        // const data = {
        //     email:,
        //     // fullname:,
        //     // password:
        // }
        // const result = await fetch("/api/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(null)
        // });

        // if (result.status === 200) {
        //     // event.target.reset()
        //     // setIsLoading(false)
        //     // push("/auth/login")
        // }
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className='bg-secondary px-5'>
                <NavigationMenuItem className='grid grid-cols-3 sm:grid-cols-7 gap-4 sm:gap-0' >
                    <Link href="/bible" legacyBehavior passHref >
                        <a className='col-span-1 cursor-pointer flex justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vxlidfet.json"
                                trigger="morph"
                                state="morph-open"
                                style={{
                                    // height: '2rem',
                                    paddingTop: '5px'
                                }}
                                colors={`primary:${theme === 'dark' ? 'white' : 'black'},secondary:#08a88a`}
                            >
                            </lord-icon>
                        </a>
                    </Link>
                    <Link href="/bible/roadmap" legacyBehavior passHref>
                        <NavigationMenuLink className={`group  inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 
                        
                        
                        
                        
                        me-3 sm:me-0 col-span-1 sm:col-span-3   
                        ${pathname == '/bible/roadmap' ? 'bg-accent' : 'bg-transparent  hover:text-accent-foreground'}`}>
                            <p className=' poppins-bold hidden sm:block'> Roadmap</p>
                            <Map size={18} className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                    <Link href="/bible/problemset" legacyBehavior passHref>
                        <NavigationMenuLink className={`group  inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 
                        
                        
                        
                        col-span-1 sm:col-span-3 
                         ${pathname == '/bible/problemset' ? 'bg-accent' : 'bg-transparent  hover:text-accent-foreground'}`}>
                            <p className='poppins-bold hidden sm:block '> Problems</p>
                            <ListChecks size={18} className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='grid grid-cols-2  justify-items-end sm:justify-items-end gap-5 sm:gap-0 '>

                    {
                        theme === 'dark' ? (
                            <NavigationMenuLink className={'inline-flex me-2   '} onClick={() => setTheme("light")}>
                                <span className='cursor-pointer content-center  '>
                                    <Sun className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
                                </span>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink className={'inline-flex me-2 '} onClick={() => setTheme("dark")}>
                                <span className='cursor-pointer content-center  '>
                                    <Moon className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
                                </span>
                            </NavigationMenuLink>
                        )
                    }

                    {/* <NavigationMenuLink className={`${navigationMenuTriggerStyle()} me-4 sm:me-0 sm:ml-[-5px] cursor-pointer  bg-transparent `}>
                        <p className='poppins-bold hidden sm:block '> Donate</p>
                        <HandCoins size={18} className="block sm:hidden" />

                    </NavigationMenuLink> */}

                    {
                        data ? (
                            <NavigationMenuLink className={` cursor-pointer bg-transparent`}>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        {data.user.image && (
                                            <Avatar>
                                                <AvatarImage src={data.user.image} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        )}
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-xl p-0">
                                        <DialogHeader className='border-b-2 '>
                                            <DialogTitle className='text-xl text-center poppins-medium p-3'>Sign Out
                                            </DialogTitle>
                                            <DialogDescription>
                                                {/* Make changes to your profile here. Click save when you're done. */}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex justify-center">
                                            <Button onClick={() => signOut()}>
                                                <FcGoogle size={30} /><span className='ms-2 poppins-regular text-base'>Sign Out</span>
                                            </Button>
                                        </div>
                                        <DialogFooter className='sm:justify-center border-t-2 '>
                                            <DialogClose asChild className=''>
                                                <Button type="button" variant="default" size={"sm"} className='m-3'>
                                                    Close
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer  bg-transparent`}>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <p className='poppins-bold '>Sign In</p>
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-xl p-0">
                                        <DialogHeader className='border-b-2 '>
                                            <DialogTitle className='text-xl text-center poppins-medium p-3'>Sign in
                                            </DialogTitle>
                                            <DialogDescription>
                                                {/* Make changes to your profile here. Click save when you're done. */}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex justify-center">
                                            <Button onClick={() => signIn("google", {
                                                callbackUrl,
                                                redirect: false,
                                            })}>
                                                <FcGoogle size={30} /><span className='ms-2 poppins-regular text-base'>Google</span>
                                            </Button>
                                        </div>
                                        <DialogFooter className='sm:justify-center border-t-2 '>
                                            <DialogClose asChild className=''>
                                                <Button type="button" variant="default" size={"sm"} className='m-3'>
                                                    Close
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </NavigationMenuLink>
                        )
                    }

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}




