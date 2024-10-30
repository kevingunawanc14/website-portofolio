import { useState } from "react"

import { Button } from "@/components/ui/button"
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Books } from "@/types"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Roadmap() {

    const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

    type SheetSide = (typeof SHEET_SIDES)[number]

    const bible = [
        { id: 1, testament: "Old", name: "Genesis" },
        { id: 2, testament: "Old", name: "Exodus" },
        { id: 3, testament: "Old", name: "Leviticus" },
        { id: 4, testament: "Old", name: "Numbers" },
        { id: 5, testament: "Old", name: "Deuteronomy" },
        { id: 6, testament: "Old", name: "Joshua" },
        { id: 7, testament: "Old", name: "Judges" },
        { id: 8, testament: "Old", name: "Ruth" },
        { id: 9, testament: "Old", name: "1 Samuel" },
        { id: 10, testament: "Old", name: "2 Samuel" },
        { id: 11, testament: "Old", name: "1 Kings" },
        { id: 12, testament: "Old", name: "2 Kings" },
        { id: 13, testament: "Old", name: "1 Chronicles" },
        { id: 14, testament: "Old", name: "2 Chronicles" },
        { id: 15, testament: "Old", name: "Ezra" },
        { id: 16, testament: "Old", name: "Nehemiah" },
        { id: 17, testament: "Old", name: "Esther" },
        { id: 18, testament: "Old", name: "Job" },
        { id: 19, testament: "Old", name: "Psalms" },
        { id: 20, testament: "Old", name: "Proverbs" },
        { id: 21, testament: "Old", name: "Ecclesiastes" },
        { id: 22, testament: "Old", name: "Song of Solomon" },
        { id: 23, testament: "Old", name: "Isaiah" },
        { id: 24, testament: "Old", name: "Jeremiah" },
        { id: 25, testament: "Old", name: "Lamentations" },
        { id: 26, testament: "Old", name: "Ezekiel" },
        { id: 27, testament: "Old", name: "Daniel" },
        { id: 28, testament: "Old", name: "Hosea" },
        { id: 29, testament: "Old", name: "Joel" },
        { id: 30, testament: "Old", name: "Amos" },
        { id: 31, testament: "Old", name: "Obadiah" },
        { id: 32, testament: "Old", name: "Jonah" },
        { id: 33, testament: "Old", name: "Micah" },
        { id: 34, testament: "Old", name: "Nahum" },
        { id: 35, testament: "Old", name: "Habakkuk" },
        { id: 36, testament: "Old", name: "Zephaniah" },
        { id: 37, testament: "Old", name: "Haggai" },
        { id: 38, testament: "Old", name: "Zechariah" },
        { id: 39, testament: "Old", name: "Malachi" },
        { id: 40, testament: "New", name: "Matthew" },
        { id: 41, testament: "New", name: "Mark" },
        { id: 42, testament: "New", name: "Luke" },
        { id: 43, testament: "New", name: "John" },
        { id: 44, testament: "New", name: "Acts" },
        { id: 45, testament: "New", name: "Romans" },
        { id: 46, testament: "New", name: "1 Corinthians" },
        { id: 47, testament: "New", name: "2 Corinthians" },
        { id: 48, testament: "New", name: "Galatians" },
        { id: 49, testament: "New", name: "Ephesians" },
        { id: 50, testament: "New", name: "Philippians" },
        { id: 51, testament: "New", name: "Colossians" },
        { id: 52, testament: "New", name: "1 Thessalonians" },
        { id: 53, testament: "New", name: "2 Thessalonians" },
        { id: 54, testament: "New", name: "1 Timothy" },
        { id: 55, testament: "New", name: "2 Timothy" },
        { id: 56, testament: "New", name: "Titus" },
        { id: 57, testament: "New", name: "Philemon" },
        { id: 58, testament: "New", name: "Hebrews" },
        { id: 59, testament: "New", name: "James" },
        { id: 60, testament: "New", name: "1 Peter" },
        { id: 61, testament: "New", name: "2 Peter" },
        { id: 62, testament: "New", name: "1 John" },
        { id: 63, testament: "New", name: "2 John" },
        { id: 64, testament: "New", name: "3 John" },
        { id: 65, testament: "New", name: "Jude" },
        { id: 66, testament: "New", name: "Revelation" }
    ];

    const [books, setBooks] = useState<Books[]>(bible);


    return (
        <div className="py-4">
            <Sheet>

                {
                    books.map(book =>

                        <div key={book.id} className="flex justify-center mt-3">
                            <div>
                                <SheetTrigger asChild>
                                    <Card className="w-52 h-16 p-2 rounded-[8px] cursor-pointer">
                                        <p className="text-center font-bold">{book.name}</p>
                                        <Progress value={10} className="w-full h-2 mt-2" />
                                    </Card>
                                </SheetTrigger>

                                {
                                    book.id < 66 &&
                                    <div className="flex justify-center mt-3">
                                        <ChevronDownIcon className="h-4 w-4" />
                                    </div>
                                }

                            </div>

                        </div>

                    )
                }

                <SheetContent className="sm:max-w-6/12" side={'right'}>
                    <SheetHeader>
                        <SheetTitle>Dynamic</SheetTitle>
                        <SheetDescription>
                            {/* Make changes to your profile here. Click save when you're done. */}
                        </SheetDescription>
                    </SheetHeader>
                    {/* <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div> */}
                    <SheetFooter>
                        <SheetClose asChild>
                            {/* <Button type="submit">Save changes</Button> */}
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>


        </div>
    )
}
