import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect } from 'react';
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
import { CgDanger } from "react-icons/cg";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { useRouter } from 'next/router';
import { Loader2 } from "lucide-react"

let objects: any = z.object({
    senderName: z.string().optional(),
    senderPhoneNumber: z.string().optional(),
    receiverName: z.string().min(1, "This is a required question"),
    receiverPhoneNumber: z.string().min(1, "This is a required question"),
    location: z.string().min(1, "This is a required question"),
    type: z.enum(["delivery", "selfpickup"], {
        required_error: "This is a required question",
    }),
    typeTowel1: z
        .string({
            required_error: "This is a required question",
        }),
    ztypeTowelDetail1: z.enum([
        'BATH TOWEL 70cm x 140cm 550gsm',
        'HAND TOWEL 35cm x 70cm 550gsm',
        'BATH TOWEL 70cm x 140cm 600gsm',
        'HAND TOWEL 35cm x 70cm 600gsm',
        'BATH MAT 80cm x 50cm 900gsm',
        'ONLY SOLD IN SET ( one of each )',
        'BATH TOWEL 70cm x 140cm 550gsm',
        'HOODED BATH TOWEL 75cm x 75cm 550gsm',
        'WASH CLOTH 25cm x 25cm',
        'HAND MITTEN 550gsm',
        'BeBe SET ( 1 Hooded Bath Towel, 2 Wash Cloth, 1 Hand Mitten)',
    ], {
        required_error: "This is a required question",
    }),
    quantityTowelDetail1: z.string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => !isNaN(val), { message: "Quantity must be a valid number" })
        .pipe(z.number().min(1, "Must be a number greater than 0").max(1000, "Must be a number greater less than 1000")),
    colorTowelDetail1: z.enum(['White', 'Light Grey', 'Powder Blue', 'Pink', 'Sage Green', 'Blue Powder', 'Charcoal Grey', 'Beige'], {
        required_error: "This is a required question",
    }),


});

interface CollectionColor {
    color: string;
    image: string;
}
interface TowelDetail {
    id: number;
    name: string;
    description: string;
    collectionTypes: string[];
    collectionColors: CollectionColor[];
}
export function ProfileForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);


    const form = useForm<z.infer<typeof objects>>({
        resolver: zodResolver(objects),
        defaultValues: {
            type: '',
        },
    })

    const [detailTowel, setDetailTowel] = useState<TowelDetail[]>([{
        id: -1,
        name: '',
        description: '',
        collectionTypes: [],
        collectionColors: [],
    }]);

    const handleDetailTowels = (value: string, id: number) => {
        const filtered = objectTowels.filter((towel) => towel.name === value);
        // console.log('filtered', filtered[0])
        // console.log('id', id)
        const filteredId = { ...filtered[0], id }
        // console.log('fileteredId', filteredId)
        setDetailTowel((prevState) => {
            // Check if the id is already in the array
            const isIdPresent = prevState.some((towel) => towel.id === id);
            if (isIdPresent) {
                return prevState.map((towel) =>
                    towel.id === id ? filteredId : towel
                );
            }

            // If id is not present, add the new item
            return [...prevState, filteredId];
        });

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
                    color: 'White',
                    image: 'https://lh5.googleusercontent.com/ZGkjBrNz0OvTXJfAoLlPh6kpAqxXtwEIb_xNm_w3xYFsAKUyFSjIQ1jiE60x-F3ATn0wSSDg__pHkuehwozWPH3V1-wIDqb-Qhu8kQ9xJTWfD2fFscAv9EVraISt0ssoTQ=w260'
                },
                {
                    color: 'Light Grey',
                    image: 'https://lh3.googleusercontent.com/4bzl9KtXay69fN7i8101oJFgS_Kb6v5pgPw6TKWqNBJlAVfbsJyxx8-XLhag656nxeBcleG3_JL4p_6UKh8KX8Izl5kusDg0NMN5Dbgagh9tq5M6EwKFeQcQoYCCgfeNIA=w260'
                },
                {
                    color: 'Powder Blue',
                    image: 'https://lh3.googleusercontent.com/NEq3ikXkeXZSoPh_jXprz7Ph1rb-ASYWNkA7rWx8Yv8HEC-guD-EG4FUYd8NC62kDrDV3sUrTJZgRitOGR6yeFRLjvRhEZU7bxvjgbOjPZYCd6yEQTSBu6Zu29ExLOMk-w=w260'
                },
                {
                    color: 'Pink',
                    image: 'https://lh5.googleusercontent.com/jZVV5UpftNCg2hfx8l4D568tM3FgC2TgB9M4hy-1mqLAcZubbvrJU4xdSQLVEpRgBu912cGkEOEkeU_4ikzBCRBj0cdSK6Zgin0Zqim8KSxhOjQkU9-4Ky-koM2yYKSmYg=w260'
                }
            ]
        },
        {
            name: 'CARMEL BAMBOO TOWEL',
            description: 'The Carmel collection is designed to be gentle on the skin. Made from 70% bamboo and 30% cotton, with SILVADUR antimicrobial property. It is soft and absorbent, perfect for everyday use on any type of skin.',
            collectionTypes: [
                'BATH TOWEL 70cm x 140cm 600gsm',
                'HAND TOWEL 35cm x 70cm 600gsm'
            ],
            collectionColors: [
                {
                    color: 'White',
                    image: 'https://lh5.googleusercontent.com/O5zVn8gVe2AHHBevoT5X_L2lwJcJJPoCVWJD5IMBCspVefo8NjuUNN6a0nbPpJzlMx_MpvTW6g8QkXppFZz2o-GtDC__DVh_cJMLURJccXhmva8r2ziZgMfltjy1u1D0sQ=w260'
                },
                {
                    color: 'Light Grey',
                    image: 'https://lh5.googleusercontent.com/3BRD-f3TVlgbBxgHPPXHsYPHcxTeY79Yi4NLWEnZQoJJW2fnS5paEkSqK8XdIa-Q2-tvY4UtcsZw2CVZ932LepHKVw3qihPGO739tZqXM84JuFCgr04NcXEXO9VNXIuGqw=w260'
                },
                {
                    color: 'Sage Green',
                    image: 'https://lh4.googleusercontent.com/WECuFRZDbvwOVsOIhQ4UfHKHttXG_h6lQ9nTwJ_j-7eXaqZxsf5STN-CEzBjsrKJHIzJ1Nf0qYn0E73Uj3TFExfVL-fGuVPm1ZS2qfIeN2ZZWtJz8LX4gs4Gm4w6d5F4sw=w260'
                },
                {
                    color: 'Blue Powder',
                    image: 'https://lh3.googleusercontent.com/pAvWFTPKL9DMkr3fR5yY7ESgc3T7yLMYiBn_p99m__C35w5z5nFSFQsqkXFFUVjL2QKYU9a0fcbAXm7sPuycSZb2H_3BbyC6TVgDD8K0VNyJgKlv7WtZami-ouYmXqm15w=w260'
                }
            ]
        },
        {
            name: 'NAPA COTTON COLLECTION',
            description: '100% Cotton, OEKO-TEX class one certified. Napa premium cotton collection has very absorbent luxurious qualities that will complement your self care need.',
            collectionTypes: [
                'BATH MAT 80cm x 50cm 900gsm',
            ],
            collectionColors: [
                {
                    color: 'White',
                    image: 'https://lh5.googleusercontent.com/z69-obaAc_E2BFVOVb9FAMCghy14pubYeAySL0ivdRwsjSY1VUdwUC0nz_AoQlWY77hXTbh7Mz3q1UEAESsXKJ63gQvCkOoPAqNTCvKAmPeW3o70SkxHDw6Y7iVBlrPnGQ=w260'
                },
                {
                    color: 'Light Grey',
                    image: 'https://lh4.googleusercontent.com/mINCAna5wGOO8IiPG3eTKuoZb5PeJPMlMFxq0Q7G_qdwcuNTZjkEfYFmhDKEkbq61-IWc__m1rmfyZk4PWihS5nMZgVceHQ__PrvtAj1rraF1x9VwzhTLpwfJZDMrztWIw=w260'
                },
                {
                    color: 'Charcoal Grey',
                    image: 'https://lh3.googleusercontent.com/QqB2S-iBpIrSsxXVX9UJwbcZ6nfnoBA4Olzmr7ed33V-rSl4_0ib3n8xwZDt_wU4Jd3nwzcXo5e6IcGmY-53xNVkZ6RPAnvprho2G35Fc0ztKZnR2vdeEN3qKj2Mi6pbOQ=w260'
                },
                {
                    color: 'Beige',
                    image: 'https://lh6.googleusercontent.com/lWwnHhXr8lFIO-AEVriCoT8ToNny75ijj1BJ8EuwkyFTZKWihjWl4H4blgoKf-TUnta6_jTDt7ZaRxF_M__GWfiM7CKp-O-7hKYhPv-AMG7n_woAB1Tq3WCsG2wQgjCSfQ=w260'
                }
            ]
        },
        {
            name: 'OUMI ORGANIC TOWEL',
            description: 'Oumi towel is made from 100% GOTS certified organic cotton. Each towel is naturallu processed with coconut oil, contains zero harmful chemical, and brightening agents, making it completely safe, eco-friendly and sustainable. It has the perfect fluff, texture, and extremely absorbent.',
            collectionTypes: [
                'ONLY SOLD IN SET ( one of each )'
            ],
            collectionColors: [
                {
                    color: 'White',
                    image: 'https://lh5.googleusercontent.com/1NHrWwyhHopTERB18qW6nNdblm5ykXxQpPi7sYGKu9NUufs2CjTzk44jijanfQwhpA3G2KkQGD_-ijmvgY5n-TaqJqco6EEaChs8A_zTOYHERRHv7yrx0Dtt85gQFK3tlA=w260'
                },
            ]
        },
        {
            name: 'SOMA TOWEL COLLECTION',
            description: 'Made from 60% modal and 40% cotton, Modal, made out of birch tree cellulose is a premium material for towels. Soma towel is eco-friendly, very soft, absorbent, and dries quickly. It is the perfect towel for babies, kids, and the whole family.',
            collectionTypes: [
                'BATH TOWEL 70cm x 140cm 550gsm',
                'HOODED BATH TOWEL 75cm x 75cm 550gsm',
                'WASH CLOTH 25cm x 25cm',
                'HAND MITTEN 550gsm',
                'BeBe SET ( 1 Hooded Bath Towel, 2 Wash Cloth, 1 Hand Mitten)',
            ],
            collectionColors: [
                {
                    color: 'White',
                    image: 'https://lh3.googleusercontent.com/PaLsjgfYxa845qnBWQsB0FsRgdFTp7GaeQXmTqv8sx6Ln6rMUjCgtro1T59hIb1WUYMy59byD2uePVfitL5fyjtd8UyHSuxjLgnFFAoBlo9vdYGODd3R9VtfLB5Tzo5xgQ=w260'
                },
            ],
        },
    ]
    const router = useRouter();

    async function onSubmit(values: object): Promise<void> {

        console.log('values', values)
        // toast("Order Success", {
        //     description: "Hello, thanks for your order.",
        //     action: {
        //         label: "Close",
        //         onClick: () => console.log("close"),
        //     },
        // })

        // form.reset();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxhQL3f5xlEzMfqlkJMJJiD4jaussTJcN1zo9yVQgBAFr4nsaPONRxtqWd2WLUH-Wzi/exec'

        let get1 = remmapingObject(values, 'typeTowel')
        values = { ...get1, ...values }
        let get2 = remmapingObject(values, 'ztypeTowelDetail')
        values = { ...get2, ...values }
        let get3 = remmapingObject(values, 'quantityTowelDetail')
        values = { ...get3, ...values }
        let get4 = remmapingObject(values, 'colorTowelDetail')
        values = { ...get4, ...values }

        console.log('results after remappaing', values)


        function remmapingObject(values: any, type: string): Object {

            let remappedObject: any = {};
            let index = 1;

            const filteredObject = Object.keys(values)
                .filter(key => key.startsWith(type))
                .reduce((obj: any, key) => {
                    obj[key] = values[key];
                    return obj;
                }, {});

            console.log('filteredObject', filteredObject)


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
            setIsSubmitting(true); // Start submitting

            const response = await fetch(scriptURL, {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });

            const result = await response.json();
            router.push('/towel/tracker');


        } catch (error) {
            console.error('Fetch error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset submitting state after the process is complete
        }


    }

    const towelsForm: Array<Towels> = [
        { id: 1 },
    ];

    const [towels, setTowels] = useState(towelsForm);
    const [id, setId] = useState<number>(2);

    useEffect(() => {
        // console.log('detailTowel updated:', detailTowel);
        // console.log('towels', towels);
        // console.log('towels', detailTowel.filter(detail => 1 === detail.id)[0]);
        // console.log('towels', detailTowel.filter(detail => 2 === detail.id)[0]);
        // console.log('towels', detailTowel.filter(detail => 3 === detail.id)[0]);
        // console.log('towels', detailTowel.filter(detail => 4 === detail.id)[0]);
    }, [detailTowel, towels]);

    const addNewKey = (id: number): void => {
        const typeTowel = `typeTowel${id}`;
        const ztypeTowelDetail = `ztypeTowelDetail${id}`;
        const quantityTowelDetail = `quantityTowelDetail${id}`;
        const colorTowelDetail = `colorTowelDetail${id}`;

        let object = z.object({
            [typeTowel]: z.string({
                required_error: "This is a required question",
            }),

            [ztypeTowelDetail]: z.enum([
                'BATH TOWEL 70cm x 140cm 550gsm',
                'HAND TOWEL 35cm x 70cm 550gsm',
                'BATH TOWEL 70cm x 140cm 600gsm',
                'HAND TOWEL 35cm x 70cm 600gsm',
                'BATH MAT 80cm x 50cm 900gsm',
                'ONLY SOLD IN SET ( one of each )',
                'BATH TOWEL 70cm x 140cm 550gsm',
                'HOODED BATH TOWEL 75cm x 75cm 550gsm',
                'WASH CLOTH 25cm x 25cm',
                'HAND MITTEN 550gsm',
                'BeBe SET ( 1 Hooded Bath Towel, 2 Wash Cloth, 1 Hand Mitten)',
            ], {
                required_error: "This is a required question",
            }),

            [quantityTowelDetail]: z.string()
                .transform((val) => parseInt(val, 10))
                .refine((val) => !isNaN(val), { message: "Quantity must be a valid number" })
                .pipe(z.number().min(1, "Must be a number greater than 0").max(1000, "Must be a number greater less than 1000")),

            [colorTowelDetail]: z.enum(['White', 'Light Grey', 'Powder Blue', 'Pink', 'Sage Green', 'Blue Powder', 'Charcoal Grey', 'Beige'], {
                required_error: "This is a required question",
            }),
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
        const typeTowel = `typeTowel${id}`;
        const ztypeTowelDetail = `ztypeTowelDetail${id}`;
        const quantityTowelDetail = `quantityTowelDetail${id}`;
        const colorTowelDetail = `colorTowelDetail${id}`;
        console.log('typeTowel', typeTowel)
        console.log('quantityTowelDetail', quantityTowelDetail)

        objects = objects.omit({ [typeTowel]: true });
        objects = objects.omit({ [ztypeTowelDetail]: true });
        objects = objects.omit({ [quantityTowelDetail]: true });
        objects = objects.omit({ [colorTowelDetail]: true });

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
                    name="senderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="rubik-regular text-base">Sender Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
                            </FormControl>
                            <div className="flex justify-start">
                                {/* <div>
                                    <CgDanger color="hsl(0, 100%, 31%)" size={20} />
                                </div> */}
                                <FormMessage className="" />
                            </div>
                        </FormItem>
                    )}
                    defaultValue={''}
                />
                <FormField
                    control={form.control}
                    name="senderPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="rubik-regular text-base">Sender Phone Number</FormLabel>
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
                            <FormLabel className="rubik-regular text-base">Receiver Name <span className="text-lg text-red-600">*</span></FormLabel>
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
                            <FormLabel className="rubik-regular text-base">Receiver Phone Number <span className="text-lg text-red-600">*</span></FormLabel>
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
                            <FormLabel className="rubik-regular text-base">Location <span className="text-lg text-red-600">*</span></FormLabel>
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
                    name={`type`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="rubik-regular text-base">Delivery <span className="text-lg text-red-600">*</span></FormLabel>
                            <FormControl>
                                <RadioGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="delivery" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            DELIVERY
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="selfpickup" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            SELF PICKUP
                                        </FormLabel>
                                    </FormItem>
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
                                <div className="mb-3">
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
                                name={`typeTowel${towel.id}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="rubik-regular text-base">TYPE OF TOWEL YOU WANT TO ORDER : <span className="text-lg text-red-600">*</span></FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                handleDetailTowels(value, towel.id)
                                            }
                                            }
                                            value={field.value}
                                        >
                                            <FormControl >
                                                <SelectTrigger
                                                    {...field}

                                                >
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
                                detailTowel.filter(detail => towel.id === detail.id)[0] && (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name={`description${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular text-base">{detailTowel.filter(detail => towel.id === detail.id)[0].name}</FormLabel>
                                                    <div>
                                                        <p className="rubik-regular text-sm">{detailTowel.filter(detail => towel.id === detail.id)[0].description}</p>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`ztypeTowelDetail${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular text-base">{detailTowel.filter(detail => towel.id === detail.id)[0].name} TYPE : <span className="text-lg text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            className="flex flex-col space-y-1"
                                                            {...field}
                                                        >
                                                            {detailTowel.filter(detail => towel.id === detail.id)[0].collectionTypes.map((item, index) => (
                                                                <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value={item} />
                                                                    </FormControl>
                                                                    <FormLabel className="">
                                                                        {item}
                                                                    </FormLabel>
                                                                </FormItem>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`quantityTowelDetail${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular text-base">{detailTowel.filter(detail => towel.id === detail.id)[0].name} QUANTITIY :<span className="text-lg text-red-600">*</span></FormLabel>
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
                                            name={`colorTowelDetail${towel.id}`}
                                            render={({ field }) => (
                                                <FormItem className="mt-4">
                                                    <FormLabel className="rubik-regular text-base">{detailTowel.filter(detail => towel.id === detail.id)[0].name} COLLECTION COLORS <span className="text-lg text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            className="flex flex-col space-y-1"
                                                            {...field}

                                                        >
                                                            <div className="grid sm:grid-cols-2 gap-3">
                                                                {detailTowel.filter(detail => towel.id === detail.id)[0].collectionColors.map((item, index) => (
                                                                    <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                                                                        <div className="grid grid-cols-1">
                                                                            <div className="flex justify-start">
                                                                                <Image
                                                                                    src={item.image}
                                                                                    className="h-48"
                                                                                    width={1000}
                                                                                    height={1}
                                                                                    alt=""
                                                                                />
                                                                            </div>

                                                                            <div className="mt-1 grid grid-cols-12">
                                                                                <div>
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value={item.color} />
                                                                                    </FormControl>
                                                                                </div>


                                                                                <div className="col-span-11 mt-[-2px]">
                                                                                    <FormLabel className="">
                                                                                        {item.color}
                                                                                    </FormLabel>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </FormItem>
                                                                ))}
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}

                                        />
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

                <Button type="submit" className=""
                    disabled={isSubmitting}
                >
                    {/* <Loader2 className="animate-spin" /> */}
                    Submit
                </Button>
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
            <Toaster />

        </div>
    )
}

export default OrderPage