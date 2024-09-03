import * as React from "react"
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

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Rocket } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { Code } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { BicepsFlexed } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { Ham } from 'lucide-react';


function Navbar() {
    return (
        // rocket
        // money
        // skill
        // gym
        // projects
        <div className="flex justify-center">
            <div className="fixed bottom-5">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <Rocket size={20} />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <HandCoins size={20} />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <Code size={20} />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <Hammer size={20} />

                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <BicepsFlexed size={20} />

                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <Ham size={20} />

                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

        </div>
    )
}

export default Navbar

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