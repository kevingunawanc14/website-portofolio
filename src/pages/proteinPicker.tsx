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

    return null

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
            null


        </>
    )
}

export default ProteinPicker


