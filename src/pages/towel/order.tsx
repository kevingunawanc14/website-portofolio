import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { any, z } from "zod"
import { TrashIcon, PlusIcon } from "@radix-ui/react-icons"
import { useState, FC } from 'react';
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
import { Towels } from '../../types';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from 'next/image'


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

interface CollectionColor {
    color: string;
    image: string;
}
interface TowelDetail {
    name: string;
    description: string;
    collectionTypes: string[];
    collectionColors: CollectionColor[];
}
export function ProfileForm() {

    const form = useForm<z.infer<typeof objects>>({
        resolver: zodResolver(objects),
        defaultValues: {

        },
    })

    const [detailTowel, setDetailTowel] = useState<TowelDetail>({
        name: '',
        description: '',
        collectionTypes: [],
        collectionColors: [],
    });

    const handleDetailTowels = (value: string) => {
        // alert('value', value)
        console.log('value', value)
        const filtered = objectTowels.filter((towel) => towel.name === value);
        console.log('filtered', filtered)
        console.log('filtered', filtered[0])
        setDetailTowel(filtered[0])
    }

    const objectTowels = [
        {
            name: 'TAMAR COTTON COLLECTION',
            description: 'Tamar towel made from 100% cotton, has a highly absorbent and quick drying qualities. It has versatile texture and pleats design, a sophistitcared addition to everyday bath routine.',
            collectionTypes: [
                'BATH TOWEL 70cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm'
            ],
            collectionColors: [
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                }
            ]
        },
        {
            name: 'CARMEL BAMBOO TOWEL',
            description: 'The Carmel collection is designed to be gentle on the skin. Made from 70% bamboo and 30% cotton, with SILVADUR antimicrobial property. It is soft and absorbent, perfect for everyday use on any type of skin.',
            collectionTypes: ['BATH TOWEL 700cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm'
            ],
            collectionColors: [
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                }
            ]
        },
        {
            name: 'NAPA COTTON COLLECTION',
            description: '100% Cotton, OEKO-TEX class one certified. Napa premium cotton collection has very absorbent luxurious qualities that will complement your self care need.',
            collectionTypes: ['BATH TOWEL 710cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm'
            ],
            collectionColors: [
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                }
            ]
        },
        {
            name: 'OUMI ORGANIC TOWEL',
            description: 'Oumi towel is made from 100% GOTS certified organic cotton. Each towel is naturallu processed with coconut oil, contains zero harmful chemical, and brightening agents, making it completely safe, eco-friendly and sustainable. It has the perfect fluff, texture, and extremely absorbent.',
            collectionTypes: ['BATH TOWEL 170cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm'
            ],
            collectionColors: [
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                }
            ]
        },
        {
            name: 'SOMA TOWEL COLLECTION',
            description: 'Made from 60% modal and 40% cotton, Modal, made out of birch tree cellulose is a premium material for towels. Soma towel is eco-friendly, very soft, absorbent, and dries quickly. It is the perfect towel for babies, kids, and the whole family.',
            collectionTypes: ['BATH TOWEL 701cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm'
            ],
            collectionColors: [
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                },
                {
                    color: 'white',
                    image: 'https'
                }
            ],
        },
    ]

    async function onSubmit(values: object): Promise<void> {

        return

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


        function remmapingObject(values: any, type: string): Object {

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

    const towelsForm: Array<Towels> = [
        { id: 1 },
    ];

    const [towels, setTowels] = useState(towelsForm);
    const [id, setId] = useState<number>(2);

    const addNewKey = (id: number): void => {
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

    const addTowelForm = (): void => {
        const newTowelsForm = [
            ...towels,
            { id: id },
        ];
        setTowels(newTowelsForm)
        addNewKey(id)
        setId(id => id + 1);
    };

    const deleteNewKey = (id: number): void => {
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

    const deleteTowelForm = (id: number): void => {
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
                    name="senderName "
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="rubik-regular">Sender Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
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
                            <FormLabel className="rubik-regular">Sender Phone Number</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="" {...field} />
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
                            <FormLabel className="rubik-regular">Receiver Name <span className="text-lg text-red-600">*</span></FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
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
                            <FormLabel className="rubik-regular">Receiver Phone Number <span className="text-lg text-red-600">*</span></FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="" {...field} />
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
                            <FormLabel className="rubik-regular">Location <span className="text-lg text-red-600">*</span></FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    defaultValue={''}

                />

                <FormField
                    control={form.control}
                    name={`color`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="rubik-regular">Delivery <span className="text-lg text-red-600">*</span></FormLabel>
                            <FormControl>
                                <RadioGroup defaultValue="delivery">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="delivery" id="delivery" />
                                        <Label htmlFor="delivery" className="rubik-regular">DELIVERY</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="selfpickup" id="selfpickup" />
                                        <Label htmlFor="selfpickup" className="rubik-regular">SELF PICKUP</Label>
                                    </div>
                                </RadioGroup>
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
                                name={`type${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="rubik-regular">TYPE OF TOWEL YOU WANT TO ORDER : </FormLabel>
                                        <Select onValueChange={(value) => handleDetailTowels(value)} defaultValue={''}>
                                            <FormControl >
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={<span className="rubik-regular">Choose</span>}
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="TAMAR COTTON COLLECTION"><span className="rubik-regular">TAMAR COTTON COLLECTION</span></SelectItem>
                                                <SelectItem value="CARMEL BAMBOO TOWEL"><span className="rubik-regular">CARMEL BAMBOO TOWEL</span></SelectItem>
                                                <SelectItem value="NAPA COTTON COLLECTION"><span className="rubik-regular">NAPA COTTON COLLECTION</span></SelectItem>
                                                <SelectItem value="OUMI ORGANIC TOWEL"><span className="rubik-regular">OUMI ORGANIC TOWEL</span></SelectItem>
                                                <SelectItem value="SOMA TOWEL COLLECTION"><span className="rubik-regular">SOMA TOWEL COLLECTION</span></SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {
                                detailTowel.description != '' && (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name={`type${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular">{detailTowel.name}</FormLabel>
                                                    <div>
                                                        <p>{detailTowel.description}</p>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {/* <FormField
                                            control={form.control}
                                            name={`color${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular">{detailTowel.name} TYPE :</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup defaultValue="comfortable">
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="default" id="r1" />
                                                                <Label htmlFor="r1">?</Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="comfortable" id="r2" />
                                                                <Label htmlFor="r2">?</Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="compact" id="r3" />
                                                                <Label htmlFor="r3">?</Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="compact" id="r4" />
                                                                <Label htmlFor="r4">?</Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                            defaultValue={''}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`quantity${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular">{detailTowel.name} QUANTITIY :</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="" {...field} />
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
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular">{detailTowel.name} COLLECTION COLORS</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup defaultValue="comfortable">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                <div>
                                                                    <Image
                                                                        src={'https://lh5.googleusercontent.com/ZGkjBrNz0OvTXJfAoLlPh6kpAqxXtwEIb_xNm_w3xYFsAKUyFSjIQ1jiE60x-F3ATn0wSSDg__pHkuehwozWPH3V1-wIDqb-Qhu8kQ9xJTWfD2fFscAv9EVraISt0ssoTQ=w260'}
                                                                        alt={`Photo by Sweet Publishing`}
                                                                        className=""
                                                                        width={300}
                                                                        height={400}
                                                                    />
                                                                    <RadioGroupItem value="default" id="r1" />
                                                                    <Label htmlFor="r1">?</Label>
                                                                </div>
                                                                <div>
                                                                    <Image
                                                                        src={'https://lh5.googleusercontent.com/ZGkjBrNz0OvTXJfAoLlPh6kpAqxXtwEIb_xNm_w3xYFsAKUyFSjIQ1jiE60x-F3ATn0wSSDg__pHkuehwozWPH3V1-wIDqb-Qhu8kQ9xJTWfD2fFscAv9EVraISt0ssoTQ=w260'}
                                                                        alt={`Photo by Sweet Publishing`}
                                                                        className=""
                                                                        width={300}
                                                                        height={400}
                                                                    />
                                                                    <RadioGroupItem value="default" id="r2" />
                                                                    <Label htmlFor="r2">?</Label>
                                                                </div>
                                                                <div>
                                                                    <Image
                                                                        src={'https://lh5.googleusercontent.com/ZGkjBrNz0OvTXJfAoLlPh6kpAqxXtwEIb_xNm_w3xYFsAKUyFSjIQ1jiE60x-F3ATn0wSSDg__pHkuehwozWPH3V1-wIDqb-Qhu8kQ9xJTWfD2fFscAv9EVraISt0ssoTQ=w260'}
                                                                        alt={`Photo by Sweet Publishing`}
                                                                        className=""
                                                                        width={300}
                                                                        height={400}
                                                                    />
                                                                    <RadioGroupItem value="default" id="r3" />
                                                                    <Label htmlFor="r3">?</Label>
                                                                </div>
                                                                <div>
                                                                    <Image
                                                                        src={'https://lh5.googleusercontent.com/ZGkjBrNz0OvTXJfAoLlPh6kpAqxXtwEIb_xNm_w3xYFsAKUyFSjIQ1jiE60x-F3ATn0wSSDg__pHkuehwozWPH3V1-wIDqb-Qhu8kQ9xJTWfD2fFscAv9EVraISt0ssoTQ=w260'}
                                                                        alt={`Photo by Sweet Publishing`}
                                                                        className=""
                                                                        width={300}
                                                                        height={400}
                                                                    />
                                                                    <RadioGroupItem value="default" id="r4" />
                                                                    <Label htmlFor="r4">?</Label>
                                                                </div>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                            defaultValue={''}

                                        /> */}
                                    </>
                                )
                            }



                            {/* <FormField
                                control={form.control}
                                name={`color${towel.id}`}
                                render={({ field }) => (
                                    <FormItem className="mt-4">
                                        <FormLabel className="rubik-regular">EMBROIDERY</FormLabel>
                                        <FormControl>
                                            <RadioGroup defaultValue="comfortable">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="default" id="r1" />
                                                    <Label htmlFor="r1">Custom Embroidery</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="comfortable" id="r2" />
                                                    <Label htmlFor="r2">Template Embroidery</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="compact" id="r3" />
                                                    <Label htmlFor="r3">Without Embroidery</Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                                defaultValue={''}
                            /> */}
                        </div>
                    )
                }

                {/* <div className="">
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
                </div> */}

                <Button type="submit" className="">Submit</Button>
            </form>
        </Form >
    )
}

function OrderPage(): React.ReactNode {
    return (
        <div className="container mt-4 lg:px-96">
            <div>
                <Image
                    src={'https://lh5.googleusercontent.com/wHhu9azUrZv5HrO2snSGT7V1kjwb_e62QCpG6fUyj6OgcFmgkBq_BQ9_W5dmtGU3W12NQj6Qyp6DuwHYUkDspN4k8CnL3Za2UqVomlmhSmAMeztRK3jJyeIYpjhGnTR0Mw=w1064'}
                    alt={`Photo by Sweet Publishing`}
                    className="rounded"
                    width={1000}
                    height={250}
                />
            </div>
            <div className="mt-4 ps-1">
                <p className="text-3xl rubik-regular ">TOWEL ORDER FORM</p>
                <p className="text-base rubik-regular">Please fill in the form below to order towels. Select the type of towel, quantity and color you want.</p>
                <p className="text-red-600 text-base rubik-regular">* Indicates required question</p>
            </div>

            <div className="mt-4 mb-8">
                <ProfileForm />
            </div>

        </div>
    )
}

export default OrderPage