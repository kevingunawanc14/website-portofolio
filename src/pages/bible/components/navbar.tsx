import React, { ReactNode, useState } from 'react'
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
import { Sun, Moon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes"


// const [isLoading,setIsLoading] = useState(false)
// const { push } = useRouter()

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

    return (
        <NavigationMenu>
            <NavigationMenuList className='bg-secondary'>
                <NavigationMenuItem>
                    <Link href="/bible/roadmap" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className=' poppins-bold'>Roadmap</p>
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/bible/problems" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className='poppins-bold'>Problems</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {
                        theme === 'dark' ? (
                            <NavigationMenuLink className={'inline-flex h-4 me-1'} onClick={() => setTheme("light")}>
                                <span className='cursor-pointer'>
                                    <Sun />
                                </span>
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink className={'inline-flex h-4 me-1'} onClick={() => setTheme("dark")}>
                                <span className='cursor-pointer'>
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
