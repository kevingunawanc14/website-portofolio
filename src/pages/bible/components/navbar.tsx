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
import { Sun, Moon, Map, ListChecks } from 'lucide-react';
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
    const { data } = useSession();

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Render nothing until the component has mounted to prevent hydration errors
    if (!mounted) {
        return null;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className='bg-secondary px-5'>
                <NavigationMenuItem className='grid grid-cols-3 sm:grid-cols-7 gap-1 sm:gap-0' >
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
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} col-span-1 sm:col-span-3`}>
                            <p className=' poppins-bold hidden sm:block '> Roadmap</p>
                            <Map className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                    <Link href="/bible/problems" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} col-span-1 sm:col-span-3 `}>
                            <p className='poppins-bold hidden sm:block '> Problems</p>
                            <ListChecks className="block sm:hidden" />

                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='grid grid-cols-2  justify-items-center sm:justify-items-end gap-1 '>
                    {
                        theme === 'dark' ? (
                            <NavigationMenuLink className={'inline-flex   '} onClick={() => setTheme("light")}>
                                <span className='cursor-pointer content-center  '>
                                    <Sun />
                                </span>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink className={'inline-flex  '} onClick={() => setTheme("dark")}>
                                <span className='cursor-pointer content-center '>
                                    <Moon />
                                </span>
                            </NavigationMenuLink>
                        )
                    }

                    {
                        data ? (
                            <NavigationMenuLink onClick={() => signOut()} className={navigationMenuTriggerStyle()}>
                                <p className='poppins-bold' >Sign Out</p>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink onClick={() => signIn()} className={navigationMenuTriggerStyle()}>
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


