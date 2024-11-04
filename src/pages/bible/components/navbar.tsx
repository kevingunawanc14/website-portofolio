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

import { Moon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

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

    console.log('data', data)
    return (
        <NavigationMenu>
            <NavigationMenuList className='bg-secondary'>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className=' poppins-bold'>Roadmap</p>
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className='poppins-bold'>Problems</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={'inline-flex h-4 me-1'}>
                            <div className=' '>
                                <Moon className='content-center' />
                            </div>
                        </NavigationMenuLink>
                    </Link>
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
