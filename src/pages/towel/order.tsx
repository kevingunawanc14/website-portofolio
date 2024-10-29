import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { any, z } from "zod"
import { TrashIcon, PlusIcon } from "@radix-ui/react-icons"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


let objects: any = z.object({
    senderName: z.string().optional(),
    senderPhoneNumber: z.string().optional(),
    receiverName: z.string().optional(),
    receiverPhoneNumber: z.string().optional(),
    location: z.string().optional(),
    type1: z.string().optional(),
    quantity1: z.string().optional(),
    color1: z.string().optional(),
    border1: z.string().optional(),
    font1: z.string().optional(),
});

export function ProfileForm() {

    const form = useForm<z.infer<typeof objects>>({
        resolver: zodResolver(objects),
        defaultValues: {

        },
    })

    async function onSubmit(values: object) {

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzaw_IIkkUKTW15zOa2hGg6ozKHoT72hP2QjN6Ci8sLfe_Wi9MTq6WRZQWnHdBVqosN/exec'

        let get = remmapingObject(values, 'type')
        values = { ...get, ...values }
        let get1 = remmapingObject(values, 'quantity')
        values = { ...get1, ...values }
        let get2 = remmapingObject(values, 'color')
        values = { ...get2, ...values }
        let get3 = remmapingObject(values, 'border')
        values = { ...get3, ...values }
        let get4 = remmapingObject(values, 'font')
        values = { ...get4, ...values }


        function remmapingObject(values: any, type: string) {

            let remappedObject: any = {};
            let index = 1;

            const filteredObject = Object.keys(values)
                .filter(key => key.startsWith(type))
                .reduce((obj: any, key) => {
                    obj[key] = values[key];
                    return obj;
                }, {});


            for (let key in filteredObject) {
                if (filteredObject.hasOwnProperty(key)) {
                    remappedObject[`${type}${index}`] = filteredObject[key];
                    index++;
                }
            }

            Object.keys(values).forEach(key => {
                if (key.startsWith(`${type}`)) {
                    delete values[key];
                }
            });


            return remappedObject
        }

        try {
            const response = await fetch(scriptURL, {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });

            const result = await response.json();

        } catch (error) {
            console.error('Fetch error:', error);
            alert('Something went wrong. Please try again.');
        }


    }

    const towelsForm = [
        { id: 1 },
    ];

    const [towels, setTowels] = useState(towelsForm);
    const [id, setId] = useState(2);

    const addNewKey = (id: number) => {
        const newType = `type${id}`;
        const newQuantity = `quantity${id}`;
        const newColor = `color${id}`;
        const newBorder = `border${id}`;
        const newFont = `font${id}`;

        let object = z.object({
            [newType]: z.string().optional(),
            [newQuantity]: z.string().optional(),
            [newColor]: z.string().optional(),
            [newBorder]: z.string().optional(),
            [newFont]: z.string().optional(),
        });

        objects = objects.merge(object);
    };

    const addTowelForm = () => {
        const newTowelsForm = [
            ...towels,
            { id: id },
        ];
        setTowels(newTowelsForm)
        addNewKey(id)
        setId(id => id + 1);
    };

    const deleteNewKey = (id: number) => {
        const newType = `type${id}`;
        const newQuantity = `quantity${id}`;
        const newColor = `color${id}`;
        const newBorder = `border${id}`;
        const newFont = `font${id}`;

        objects = objects.omit({ [newType]: true });
        objects = objects.omit({ [newQuantity]: true });
        objects = objects.omit({ [newColor]: true });
        objects = objects.omit({ [newBorder]: true });
        objects = objects.omit({ [newFont]: true });

    }

    const deleteTowelForm = (id: number) => {
        setTowels(
            towels.filter(towel =>
                towel.id !== id
            )
        );
        deleteNewKey(id)
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sender Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    defaultValue={''}

                />
                <FormField
                    control={form.control}
                    name="senderPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sender Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    defaultValue={''}
                />
                <FormField
                    control={form.control}
                    name="receiverName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Receiver Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    defaultValue={''}

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
                    defaultValue={''}

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
                    defaultValue={''}

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
                                name={`type${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={''}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Choose" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="A">A</SelectItem>
                                                <SelectItem value="B">B</SelectItem>
                                                <SelectItem value="C">C</SelectItem>
                                                <SelectItem value="D">D</SelectItem>
                                                <SelectItem value="E">E</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name={`quantity${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                defaultValue={''}

                            />

                            <FormField
                                control={form.control}
                                name={`color${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                                defaultValue={''}

                            />

                            <FormField
                                control={form.control}
                                name={`border${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Border</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                                defaultValue={''}

                            />

                            <FormField
                                control={form.control}
                                name={`font${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Font</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                defaultValue={''}

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

                <Button type="submit" className="">Submit</Button>
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

            <div className="mb-8">
                <ProfileForm />
            </div>

        </div>
    )
}

export default OrderPage