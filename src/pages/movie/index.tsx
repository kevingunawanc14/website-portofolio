import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { object, z } from "zod"
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Required",
    }),
    source: z.string().min(1, {
        message: "Required",
    }),
    type: z.enum(["watching", "plan", "completed"], {
        message: "Required",
    }),
})

function Index() {

    const [listMovies, setListMovies] = useState<{ id: string, title: string, source: string, type: string }[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            source: "",
            type: "watching",
        },
    })

    const handleUpdateMovieState = (id: string, state: string) => {
        if (state === 'delete') {
            const newData = listMovies.filter(listMovies => listMovies.id != id)
            setListMovies(newData)
            localStorage.setItem("listMovies", JSON.stringify(newData));
        } else {
            const newData = listMovies.map(listMovie => {
                if (listMovie.id == id) {
                    listMovie.type = state
                }
                return listMovie
            }
            )
            setListMovies(newData)
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {

        const newMovies = { id: crypto.randomUUID(), title: values.title, source: values.source, type: values.type }

        setListMovies((prevListMovies) => {
            const updatedListMovies = [...prevListMovies, newMovies];

            localStorage.setItem("listMovies", JSON.stringify(updatedListMovies));

            return updatedListMovies;
        });

        form.reset();
    }

    const exportToCSV = () => {
        const headers = ['id', 'title', 'source', 'type'];
        const rows = listMovies.map(item => [
            item.id,
            item.title,
            item.source,
            item.type,
        ]);

        const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'movieData.csv';
        link.click();
    };

    useEffect(() => {
        console.log('listMovies', listMovies)
    }, [listMovies])

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem("listMovies") || "[]");
        setListMovies(savedMovies);
    }, []);

    return (
        <div className="container  mt-5">
            <div>
                <Form {...form}>
                    <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="poppins-regular text-base">Title <span className="text-red-600">*</span></FormLabel>
                                    <FormControl className="">
                                        <Input
                                            className="poppins-regular"
                                            placeholder="bleach" {...field}

                                        />
                                    </FormControl>
                                    <FormMessage />

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="poppins-regular text-base">Source <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input
                                            className="poppins-regular"
                                            placeholder="netflix" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="poppins-regular text-base">Status  <span className="text-red-600">*</span></FormLabel>
                                    <Select
                                        value={field.value} // Bind the value from form's state
                                        onValueChange={field.onChange} // Update form state on change
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="watching">Watching</SelectItem>
                                            <SelectItem value="plan">Plan to watch</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between">
                            <div className="self-center">
                                {/* <Button
                                    type="button"
                                    className="rounded-full"
                                > */}
                                <PiDownloadSimpleBold className="cursor-pointer" size={30} onClick={() => exportToCSV()} />
                                {/* </Button> */}
                            </div>

                            <Button
                                type="submit"
                                className="rounded-full"
                            >
                                <PiPlusBold />

                            </Button>
                        </div>
                    </form>
                </Form>
            </div>

            <div className="flex justify-center mt-5">
                <Tabs defaultValue="watching" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3 poppins-regular">
                        <TabsTrigger value="watching">Watching</TabsTrigger>
                        <TabsTrigger value="plan">Plan to watch</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <TabsContent value="watching">
                        {
                            listMovies
                                .filter(movie => movie.type === 'watching')
                                .map(movie => (
                                    <Card key={movie.id} className="mt-3">
                                        <CardContent className="p-3">
                                            <div className="">
                                                <div className="grid">
                                                    <div className="flex justify-end">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button className="rounded-md">
                                                                    <PiDotsThreeOutlineVerticalFill />

                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56">
                                                                {/* <DropdownMenuRadioGroup value={position} onValueChange={setPosition}> */}
                                                                <DropdownMenuRadioGroup value={movie.type} onValueChange={(newType) => handleUpdateMovieState(movie.id, newType)}>
                                                                    <DropdownMenuRadioItem value="watching">Watching</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="plan">Plan to watch</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="delete"><span className="text-destructive">Remove</span>
                                                                    </DropdownMenuRadioItem>
                                                                </DropdownMenuRadioGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                                <p>{movie.title}</p>
                                            </div>
                                            <div className="">
                                                <p>{movie.source}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                        }
                    </TabsContent>
                    <TabsContent value="plan">
                        {
                            listMovies
                                .filter(movie => movie.type === 'plan')
                                .map(movie => (
                                    <Card key={movie.id} className="mt-3">
                                        <CardContent className="p-3">
                                            <div className="">
                                                <div className="grid">
                                                    <div className="flex justify-end">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button className="rounded-md">
                                                                    <PiDotsThreeOutlineVerticalFill />

                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56">
                                                                {/* <DropdownMenuRadioGroup value={position} onValueChange={setPosition}> */}
                                                                <DropdownMenuRadioGroup value={movie.type} onValueChange={(newType) => handleUpdateMovieState(movie.id, newType)}>
                                                                    <DropdownMenuRadioItem value="watching">Watching</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="plan">Plan to watch</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="delete"><span className="text-destructive">Remove</span></DropdownMenuRadioItem>
                                                                </DropdownMenuRadioGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                                <p>{movie.title}</p>
                                            </div>
                                            <div className="">
                                                <p>{movie.source}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                        }
                    </TabsContent>
                    <TabsContent value="completed">
                        {
                            listMovies
                                .filter(movie => movie.type === 'completed')
                                .map(movie => (
                                    <Card key={movie.id} className="mt-3">
                                        <CardContent className="p-3">
                                            <div className="">
                                                <div className="grid">
                                                    <div className="flex justify-end">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button className="rounded-md">
                                                                    <PiDotsThreeOutlineVerticalFill />

                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56">
                                                                {/* <DropdownMenuRadioGroup value={position} onValueChange={setPosition}> */}
                                                                <DropdownMenuRadioGroup value={movie.type} onValueChange={(newType) => handleUpdateMovieState(movie.id, newType)}>
                                                                    <DropdownMenuRadioItem value="watching">Watching</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="plan">Plan to watch</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                                                                    <DropdownMenuRadioItem value="delete"><span className="text-destructive">Remove</span></DropdownMenuRadioItem>
                                                                </DropdownMenuRadioGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                                <p>{movie.title}</p>
                                            </div>
                                            <div className="">
                                                <p>{movie.source}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                        }
                    </TabsContent>
                </Tabs>
            </div>

        </div >

    )
}

export default Index