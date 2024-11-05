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

const handleLogin = async (event: any) => {
    event.preventDefault();
    // const data = {
    //     email:,
    //     // fullname:,
    //     // password:
    // }
    const result = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(null)
    });

    if (result.status === 200) {
        event.target.reset()
        // setIsLoading(false)
        // push("/auth/login")
    }
}

export default function Navbar(): ReactNode {
    const router = useRouter();
    const currentPath = router.pathname; // Get the current pathname

    console.log('currentPath', currentPath)
    const { data } = useSession();

    console.log('currentPath', currentPath === '/bible/roadmap');

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className='bg-secondary px-5'>
                <NavigationMenuItem className='grid grid-cols-3 sm:grid-cols-7 gap-4 sm:gap-0' >
                    <Link href="/bible" legacyBehavior passHref >
                        <span className='col-span-1 cursor-pointer flex justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vxlidfet.json"
                                trigger="morph"
                                state="morph-open"
                                style={{
                                    // height: '2rem',
                                    paddingTop: '5px'
                                }}
                            >
                            </lord-icon>
                        </span>
                    </Link>
                    <Link href="/bible/roadmap" legacyBehavior passHref>
                        <NavigationMenuLink className={`group  inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 
                        
                        
                        
                        
                        me-3 sm:me-0 col-span-1 sm:col-span-3   
                        ${currentPath == '/bible/roadmap' ? 'bg-accent' : 'bg-transparent  hover:text-accent-foreground'}`}>
                            <p className=' poppins-bold hidden sm:block'> Roadmap</p>
                            <Map size={18} className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                    <Link href="/bible/problems" legacyBehavior passHref>
                        <NavigationMenuLink className={`group  inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 
                        
                        
                        
                        col-span-1 sm:col-span-3 
                         ${currentPath == '/bible/problems' ? 'bg-accent' : 'bg-transparent  hover:text-accent-foreground'}`}>
                            <p className='poppins-bold hidden sm:block '> Problems</p>
                            <ListChecks size={18} className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='grid grid-cols-3  justify-items-end sm:justify-items-end gap-5 sm:gap-0 '>

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

                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} me-4 sm:me-0 sm:ml-[-5px] cursor-pointer  bg-transparent `}>
                        <p className='poppins-bold hidden sm:block '> Donate</p>
                        <HandCoins size={18} className="block sm:hidden" />

                    </NavigationMenuLink>

                    {
                        data ? (
                            <NavigationMenuLink onClick={() => signOut()} className={`${navigationMenuTriggerStyle()} cursor-pointer bg-transparent`}>
                                <p className='poppins-bold' >Sign Out</p>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink onClick={() => signIn()} className={`${navigationMenuTriggerStyle()} cursor-pointer  bg-transparent`}>
                                <p className='poppins-bold' >Sign In</p>
                            </NavigationMenuLink>
                        )
                    }

                </NavigationMenuItem>
            </NavigationMenuList>
            {/* <NavigationMenuList>

            </NavigationMenuList> */}

        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


