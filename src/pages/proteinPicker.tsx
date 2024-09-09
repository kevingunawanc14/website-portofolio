"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Drumstick } from 'lucide-react';
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { group } from "console"
import { ListRestart } from 'lucide-react';

const proteins = [
    {
        value: "Chicken breast",
        label: (
            <>
                <p>Chicken breast</p>  <Drumstick className="ms-2" />
            </>
        )
        ,
        group: "Meat",
        x: '10'
    },
    {
        value: "Lean beef",
        label: "Lean beef",
        group: "Meat"
    },
    {
        value: "Lamb",
        label: "Lamb",
        group: "Meat"
    },
    {
        value: "Tuna",
        label: "Tuna",
    },
    {
        value: "Cat Fish",
        label: "Cat Fish",
    },
    {
        value: "Tempeh",
        label: "Tempeh",
    },
    {
        value: "Tofu",
        label: "Tofu",
    },
    {
        value: "Soybeans",
        label: "Soybeans",
    },
    {
        value: "Egg whites",
        label: "Egg whites",
    },
    {
        value: "Whole Ages",
        label: "Whole Ages",
    },
    {
        value: "Milk",
        label: "Milk",
    },
    {
        value: "Cheese",
        label: "Cheese",
    },
    {
        value: "Yogurt",
        label: "Yogurt",
    },
];

function proteinPicker() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <>
            <div className="h-1/2">
                <div className="container mx-auto">
                    <p className="text-primary text-4xl md:text-5xl mb-4 font-bold ">Protein Picker</p>
                </div>
                <div className="flex justify-evenly mt-5">
                    <div className="grid grid-rows-2">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between"
                                >
                                    {value
                                        ? proteins.find((protein) => protein.value === value)?.label
                                        : "Select protein..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search protein..." />
                                    <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {proteins.map((protein) => (
                                                <CommandItem
                                                    key={protein.value}
                                                    value={protein.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            value === protein.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {protein.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        <div className="flex justify-end mt-2">
                            <Button><ListRestart /></Button>

                        </div>
                        <Input type="number" placeholder="porsi" />

                    </div>
                    <div>
                        <p>10g</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default proteinPicker