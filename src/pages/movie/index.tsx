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

    const [position, setPosition] = useState("")

    const [titleError, setTitleError] = useState(false);
    const [sourceError, setSourceError] = useState(false);

    const [listMovies, setListMovies] = useState<{ id?: string, title: string, source: string, type: string }[]>([]);
    // const { error, formMessageId } = useFormField()

    // 1. Define your form.

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            source: "",
            type: "watching",
        },
    })

    // const title = form.watch("title");
    // const source = form.watch("source");

    // console.log('usernameValue', usernameValue)


    // handle update movie status
    const handleUpdateMovie = (id: number, status: string) => {
        console.log('id', id)
        console.log('status', status)
        if (status === 'remove') {
            // delete
        } else {
            // update
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
                                    <FormLabel>Title</FormLabel>
                                    <FormControl className="">
                                        <Input
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
                                    <FormLabel>Source</FormLabel>
                                    <FormControl>
                                        <Input
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
                                    <FormLabel>Status</FormLabel>
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

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                            >+
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>

            <div className="flex justify-center mt-5">
                <Tabs defaultValue="watching" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="watching">Watching</TabsTrigger>
                        <TabsTrigger value="plan">Plan to watch</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <TabsContent value="watching">
                        {
                            listMovies
                                .filter(movie => movie.type === 'watching')
                                .map(movie => (
                                    <Card key={movie.id} className="">
                                        <CardContent className="p-3">
                                            <div className="">
                                                {/* <div className="grid">
                                                <div className="flex justify-end">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="outline">...</Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-56">
                                                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                                <DropdownMenuRadioItem value="top">Watching</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="bottom">Plan to watch</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="right">Completed</DropdownMenuRadioItem>
                                                            </DropdownMenuRadioGroup>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div> */}
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
                                    <Card key={movie.id} className="">
                                        <CardContent className="p-3">
                                            <div className="">
                                                {/* <div className="grid">
                                                <div className="flex justify-end">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="outline">...</Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-56">
                                                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                                <DropdownMenuRadioItem value="top">Watching</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="bottom">Plan to watch</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="right">Completed</DropdownMenuRadioItem>
                                                            </DropdownMenuRadioGroup>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div> */}
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
                                    <Card key={movie.id} className="">
                                        <CardContent className="p-3">
                                            <div className="">
                                                {/* <div className="grid">
                                                <div className="flex justify-end">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="outline">...</Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-56">
                                                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                                <DropdownMenuRadioItem value="top">Watching</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="bottom">Plan to watch</DropdownMenuRadioItem>
                                                                <DropdownMenuRadioItem value="right">Completed</DropdownMenuRadioItem>
                                                            </DropdownMenuRadioGroup>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div> */}
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

        </div>

    )
}

export default Index