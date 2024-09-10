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
import { Beef } from 'lucide-react';
import { Fish } from 'lucide-react';
import { Bean } from 'lucide-react';
import { EggFried } from 'lucide-react';
import { Milk } from 'lucide-react';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from "react";


const proteins = [
    {
        value: "Chicken breast",
        label: (
            <>
                <p>Chicken breast</p>  <Beef className="ms-2" />
            </>
        )
        ,
        group: "Meat",
        protein: '10'
    },
    {
        value: "Lean beef",
        label: (
            <>
                <p>Lean beef</p>  <Beef className="ms-2" />
            </>
        )
        ,
        group: "Meat"
    },
    {
        value: "Lamb",
        label: (
            <>
                <p>Lamb</p>  <Beef className="ms-2" />
            </>
        ),
        group: "Meat"
    },
    {
        value: "Tuna",
        label: (
            <>
                <p>Tuna</p>  <Fish className="ms-2" />
            </>
        ),
        group: "Fish"
    },
    {
        value: "Cat Fish",
        label: (
            <>
                <p>Cat Fish</p>  <Fish className="ms-2" />
            </>
        ),
        group: "Fish"
    },
    {
        value: "Tempeh",
        label: (
            <>
                <p>Tempeh</p>  <Bean className="ms-2" />
            </>
        ),
        group: "Plant"
    },
    {
        value: "Tofu",
        label: (
            <>
                <p>Tofu</p>  <Bean className="ms-2" />
            </>
        ),
        group: "Plant"
    },
    {
        value: "Soybeans",
        label: (
            <>
                <p>Soybeans</p>  <Bean className="ms-2" />
            </>
        ),
        group: "Plant"
    },
    {
        value: "Egg whites",
        label: (
            <>
                <p>Egg Fried</p>  <EggFried className="ms-2" />
            </>
        ),
        group: "Plant"

    },
    {
        value: "Whole Ages",
        label: (
            <>
                <p>Whole Ages</p>  <EggFried className="ms-2" />
            </>
        ),
        group: "Plant"
    },
    {
        value: "Milk",
        label: (
            <>
                <p>Milk</p>  <Milk className="ms-2" />
            </>
        ),
        group: "Drink"
    },
    {
        value: "Yogurt",
        label: (
            <>
                <p>Yogurt</p>  <Milk className="ms-2" />
            </>
        ),
        group: "Drink"
    },
    {
        value: "Cheese",
        label: (
            <>
                <p>Cheese</p>  <Milk className="ms-2" />

            </>
        ),
        group: "Drink"


    },

];

function ProteinPicker() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState([{ id: Date.now(), value: '', portion: '' }]);

    console.log(items)
    // Function to handle adding new items
    const addItem = () => {
        console.log('xx');
        setItems([...items, { id: Date.now(), value: '', portion: '' }]);
    };

    // Function to handle deleting an item
    const deleteItem = (id: any) => {
        setItems(items.filter((item) => item.id !== id));
    };

    // Function to handle updating a specific item
    const updateItem = (id: any, field: any, newValue: any) => {

        if ((newValue > 10 || newValue < 1) && newValue != '') {
            alert('Value not valid. It must be between 1 and 10.');
            return; // Stop the execution if the value is not valid.
        }

        setItems(
            items.map((item) =>
                item.id === id ? { ...item, [field]: newValue } : item
            )
        );
    };
    return (
        <>
            <div className="h-1/2 mt-[100px]">
                <div className="container mx-auto">
                    <p className="text-primary text-4xl md:text-5xl mb-4 font-bold poppins-medium tracking-tight ">Protein Picker</p>
                </div>
                <div className="flex justify-evenly mt-5">
                    <div className="">
                        {items.map((item, index) => (
                            <div key={item.id} className="flex justify-evenly mb-4">
                                {/* Protein Dropdown */}
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[200px] justify-around rubik-regular"
                                        >
                                            {item.value
                                                ? proteins.find((protein) => protein.value === item.value)?.label
                                                : 'Select protein...'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search protein..." className="rubik-regular" />
                                            <CommandList>
                                                <CommandEmpty>No protein found.</CommandEmpty>
                                                <CommandGroup>
                                                    {proteins.map((protein) => (
                                                        <CommandItem
                                                            key={protein.value}
                                                            value={protein.value}
                                                            onSelect={(currentValue) => {
                                                                updateItem(item.id, 'value', currentValue === item.value ? '' : currentValue);
                                                                setOpen(false);
                                                            }}
                                                            className="justify-between"
                                                        >
                                                            {protein.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>

                                {/* Portion Input */}
                                <Input
                                    type="number"
                                    placeholder="1 porsi"
                                    className="w-24 mx-2 rubik-regular"
                                    min={1}
                                    max={10}
                                    value={item.portion}
                                    onChange={(e) => updateItem(item.id, 'portion', e.target.value)}
                                />

                                {/* Delete Button */}
                                <div className="content-center">
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <X className="cursor-pointer" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}


                        {/* <div className="flex justify-end mt-2">
                            <p className="rubik-medium cursor-pointer" onClick={() => addItem()}>+ Add more items</p>

                        </div> */}

                    </div>
                    <div>
                        <div>
                            {/* <p>10g</p> */}

                        </div>

                        <div className="flex justify-around mt-4">
                            <div className="content-center">
                                <div className="border-b-4 border-primary w-10 ">

                                </div>

                            </div>
                            <div className="content-end ">
                                <motion.div
                                    whileTap={{ scale: 0.9 }} // Gesture animation when the button is tapped
                                    whileHover={{ scale: 1.1 }} // Gesture animation when the button is hovered
                                >
                                    <Plus className="cursor-pointer" />
                                </motion.div>
                            </div>

                        </div>

                        <div>
                            {/* <p>100 g</p> */}
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default ProteinPicker