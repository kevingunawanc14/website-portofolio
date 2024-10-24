"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"
import { PlusIcon } from "@radix-ui/react-icons"
// import { PlusCircledIcons } from "@radix-ui/react-icons"
import { useState } from 'react';


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Plus } from "lucide-react"

const formSchema = z.object({
    senderName: z.string().optional(),
    phoneNumber: z.number({
        required_error: "Phone number is required.",
        invalid_type_error: "Phone number must be a number.",
    }),
    receiverName: z.string().min(2, {
        message: "Receiver name must be at least 2 characters."
    }),
    location: z.string().min(2, {
        message: "Location must be at least 2 characters."
    }),
    type: z.string().min(1, {
        message: "Type is required."
    }),
    quantity: z.number({
        required_error: "Quantity is required.",
        invalid_type_error: "Quantity must be a number."
    }),
    color: z.string().min(1, {
        message: "Color is required."
    }),
    border: z.string().min(1, {
        message: "Border is required."
    }),
    font: z.string().min(1, {
        message: "Font is required."
    })
});



export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    // const [state, setState] = useState(initialState)

    const towelsForm = [
        { id: 1 },
    ];

    const [towels, setTowels] = useState(towelsForm);
    const [id, setId] = useState(2); // Use state for id


    const addTowelForm = () => {
        const newTowelsForm = [
            ...towels,
            { id: id },
        ];
        setTowels(newTowelsForm)
        setId(id => id + 1);

    };

    const deleteTowelForm = (id: number) => {
        setTowels(
            towels.filter(towel =>
                towel.id !== id
            )
        );
        console.log(towels)
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sender Name <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sender Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Receiver Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="receiverPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Receiver Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {
                    towels.map(towel =>
                        <div key={towel.id} className="bg-accent border rounded-lg p-5">

                            {towel.id > 1 &&
                                <div>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button onClick={() => deleteTowelForm(towel.id)} variant="destructive" size="icon">
                                                    <TrashIcon className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Delete</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </div>
                            }

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="border"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Border</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="font"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Font</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    )
                }

                <div className="">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={() => addTowelForm()} type="button" size="icon">
                                    <PlusIcon
                                        className="h-4 w-4"
                                    />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Add Towel Form</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form >
    )
}



function OrderPage() {
    return (
        <div className="container mx-auto px-4 mt-4">
            <div>
                <p>Order Form</p>
            </div>

            <ProfileForm />

        </div>
    )
}

export default OrderPage