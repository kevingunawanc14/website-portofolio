import * as React from "react"
import Link from "next/link"
import { motion } from 'framer-motion';

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
import { Newspaper } from 'lucide-react';
import { useRouter } from 'next/router';

const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};


function Navbar() {
    const router = useRouter();

    const handleNavigationOtherPage = () => {
        router.push('/blog');
    };
    return (
        <div className="flex justify-center mt-20">
            <div className="fixed bottom-5">
                <NavigationMenu className="">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2, rotate: 90,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <Rocket size={20} onClick={() => handleNavigation('intro')} className="m-1 cursor-pointer" />
                                </motion.div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} m-1 cursor-pointer`}>
                                <HandCoins size={20} />
                            </NavigationMenuLink>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2, rotate: 90,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <Code size={20} onClick={() => handleNavigation('skill')} className="m-1 cursor-pointer" />

                                </motion.div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2, rotate: 90,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <Hammer size={20} onClick={() => handleNavigation('project')} className="m-1 cursor-pointer" />


                                </motion.div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2, rotate: 90,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <BicepsFlexed size={20} onClick={() => handleNavigation('gym')} className="m-1 cursor-pointer" />


                                </motion.div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2, rotate: 90,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <Newspaper size={20} onClick={() => handleNavigationOtherPage()} className="m-1 cursor-pointer" />


                                </motion.div>

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