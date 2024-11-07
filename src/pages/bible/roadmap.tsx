import { useState, useEffect } from "react"

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
import Navbar from './components/navbar';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"


const invoices = [
    { id: "1", status: "0", chapters: "1" },
    { id: "2", status: "0", chapters: "2" },
    { id: "3", status: "0", chapters: "3" },
    { id: "4", status: "0", chapters: "4" },
    { id: "5", status: "0", chapters: "5" },
    { id: "6", status: "0", chapters: "6" },
    { id: "7", status: "0", chapters: "7" },
    { id: "8", status: "0", chapters: "8" },
    { id: "9", status: "0", chapters: "9" },
    { id: "10", status: "0", chapters: "10" },
    { id: "11", status: "0", chapters: "11" },
    { id: "12", status: "0", chapters: "12" },
    { id: "13", status: "0", chapters: "13" },
    { id: "14", status: "0", chapters: "14" },
    { id: "15", status: "0", chapters: "15" },
    { id: "16", status: "0", chapters: "16" },
    { id: "17", status: "0", chapters: "17" },
    { id: "18", status: "0", chapters: "18" },
    { id: "19", status: "0", chapters: "19" },
    { id: "20", status: "0", chapters: "20" },
    { id: "21", status: "0", chapters: "21" },
    { id: "22", status: "0", chapters: "22" },
    { id: "23", status: "0", chapters: "23" },
    { id: "24", status: "0", chapters: "24" },
    { id: "25", status: "0", chapters: "25" },
    { id: "26", status: "0", chapters: "26" },
    { id: "27", status: "0", chapters: "27" },
    { id: "28", status: "0", chapters: "28" },
    { id: "29", status: "0", chapters: "29" },
    { id: "30", status: "0", chapters: "30" },
    { id: "31", status: "0", chapters: "31" },
    { id: "32", status: "0", chapters: "32" },
    { id: "33", status: "0", chapters: "33" },
    { id: "34", status: "0", chapters: "34" },
    { id: "35", status: "0", chapters: "35" },
    { id: "36", status: "0", chapters: "36" },
    { id: "37", status: "0", chapters: "37" },
    { id: "38", status: "0", chapters: "38" },
    { id: "39", status: "0", chapters: "39" },
    { id: "40", status: "0", chapters: "40" },
    { id: "41", status: "0", chapters: "41" },
    { id: "42", status: "0", chapters: "42" },
    { id: "43", status: "0", chapters: "43" },
    { id: "44", status: "0", chapters: "44" },
    { id: "45", status: "0", chapters: "45" },
    { id: "46", status: "0", chapters: "46" },
    { id: "47", status: "0", chapters: "47" },
    { id: "48", status: "0", chapters: "48" },
    { id: "49", status: "0", chapters: "49" },
    { id: "50", status: "0", chapters: "50" },
];

export default function Roadmap() {


    const bibleData = [
        { id: 1, book: "Genesis", totalChapters: 50, progress: 0 },
        { id: 2, book: "Exodus", totalChapters: 40, progress: 0 },
        { id: 3, book: "Leviticus", totalChapters: 27, progress: 0 },
        { id: 4, book: "Numbers", totalChapters: 36, progress: 0 },
        { id: 5, book: "Deuteronomy", totalChapters: 34, progress: 0 },
        { id: 6, book: "Joshua", totalChapters: 24, progress: 0 },
        { id: 7, book: "Judges", totalChapters: 21, progress: 0 },
        { id: 8, book: "Ruth", totalChapters: 4, progress: 0 },
        { id: 9, book: "1 Samuel", totalChapters: 31, progress: 0 },
        { id: 10, book: "2 Samuel", totalChapters: 24, progress: 0 },
        { id: 11, book: "1 Kings", totalChapters: 22, progress: 0 },
        { id: 12, book: "2 Kings", totalChapters: 25, progress: 0 },
        { id: 13, book: "1 Chronicles", totalChapters: 29, progress: 0 },
        { id: 14, book: "2 Chronicles", totalChapters: 36, progress: 0 },
        { id: 15, book: "Ezra", totalChapters: 10, progress: 0 },
        { id: 16, book: "Nehemiah", totalChapters: 13, progress: 0 },
        { id: 17, book: "Esther", totalChapters: 10, progress: 0 },
        { id: 18, book: "Job", totalChapters: 42, progress: 0 },
        { id: 19, book: "Psalms", totalChapters: 150, progress: 0 },
        { id: 20, book: "Proverbs", totalChapters: 31, progress: 0 },
        { id: 21, book: "Ecclesiastes", totalChapters: 12, progress: 0 },
        { id: 22, book: "Song of Solomon", totalChapters: 8, progress: 0 },
        { id: 23, book: "Isaiah", totalChapters: 66, progress: 0 },
        { id: 24, book: "Jeremiah", totalChapters: 52, progress: 0 },
        { id: 25, book: "Lamentations", totalChapters: 5, progress: 0 },
        { id: 26, book: "Ezekiel", totalChapters: 48, progress: 0 },
        { id: 27, book: "Daniel", totalChapters: 12, progress: 0 },
        { id: 28, book: "Hosea", totalChapters: 14, progress: 0 },
        { id: 29, book: "Joel", totalChapters: 3, progress: 0 },
        { id: 30, book: "Amos", totalChapters: 9, progress: 0 },
        { id: 31, book: "Obadiah", totalChapters: 1, progress: 0 },
        { id: 32, book: "Jonah", totalChapters: 4, progress: 0 },
        { id: 33, book: "Micah", totalChapters: 7, progress: 0 },
        { id: 34, book: "Nahum", totalChapters: 3, progress: 0 },
        { id: 35, book: "Habakkuk", totalChapters: 3, progress: 0 },
        { id: 36, book: "Zephaniah", totalChapters: 3, progress: 0 },
        { id: 37, book: "Haggai", totalChapters: 2, progress: 0 },
        { id: 38, book: "Zechariah", totalChapters: 14, progress: 0 },
        { id: 39, book: "Malachi", totalChapters: 4, progress: 0 },
        { id: 40, book: "Matthew", totalChapters: 28, progress: 0 },
        { id: 41, book: "Mark", totalChapters: 16, progress: 0 },
        { id: 42, book: "Luke", totalChapters: 24, progress: 0 },
        { id: 43, book: "John", totalChapters: 21, progress: 0 },
        { id: 44, book: "Acts", totalChapters: 28, progress: 0 },
        { id: 45, book: "Romans", totalChapters: 16, progress: 0 },
        { id: 46, book: "1 Corinthians", totalChapters: 16, progress: 0 },
        { id: 47, book: "2 Corinthians", totalChapters: 13, progress: 0 },
        { id: 48, book: "Galatians", totalChapters: 6, progress: 0 },
        { id: 49, book: "Ephesians", totalChapters: 6, progress: 0 },
        { id: 50, book: "Philippians", totalChapters: 4, progress: 0 },
        { id: 51, book: "Colossians", totalChapters: 4, progress: 0 },
        { id: 52, book: "1 Thessalonians", totalChapters: 5, progress: 0 },
        { id: 53, book: "2 Thessalonians", totalChapters: 3, progress: 0 },
        { id: 54, book: "1 Timothy", totalChapters: 6, progress: 0 },
        { id: 55, book: "2 Timothy", totalChapters: 4, progress: 0 },
        { id: 56, book: "Titus", totalChapters: 3, progress: 0 },
        { id: 57, book: "Philemon", totalChapters: 1, progress: 0 },
        { id: 58, book: "Hebrews", totalChapters: 13, progress: 0 },
        { id: 59, book: "James", totalChapters: 5, progress: 0 },
        { id: 60, book: "1 Peter", totalChapters: 5, progress: 0 },
        { id: 61, book: "2 Peter", totalChapters: 3, progress: 0 },
        { id: 62, book: "1 John", totalChapters: 5, progress: 0 },
        { id: 63, book: "2 John", totalChapters: 1, progress: 0 },
        { id: 64, book: "3 John", totalChapters: 1, progress: 0 },
        { id: 65, book: "Jude", totalChapters: 1, progress: 0 },
        { id: 66, book: "Revelation", totalChapters: 22, progress: 0 }
    ];


    const [bible, setBible] = useState<{ id: number, book: string, totalChapters: number, progress: number }[]>(bibleData);
    const [detailBooksChapter, setDetailBooksChapter] = useState<{ id: number, chapter: number, status: boolean }[]>([]);
    const [detailBooksHeader, setDetailBooksHeader] = useState<{ id: number, book: string, totalChapters: number, progress: number }>({ id: 0, book: "", totalChapters: 0, progress: 0 });

    const [listChecked, setlistChecked] = useState<{ id?: number, chapter?: number, bookId: number }[]>([])

    const handleClick = (id: number) => {

        const selectedBook = bible.find(book => book.id === id);
        if (!selectedBook) return;

        setDetailBooksHeader(selectedBook)

        const chapters = [];

        for (let chapter = 1; chapter <= selectedBook.totalChapters; chapter++) {

            const isChecked = listChecked.some(
                (checkedItem) => checkedItem.chapter === chapter && checkedItem.bookId == id
            );

            chapters.push({
                id: chapter,
                chapter: chapter,
                status: isChecked
            });
        }

        setDetailBooksChapter(chapters)
    };

    useEffect(() => {
        // console.log('detailBooksChapter changed:', detailBooksChapter);
        // console.log('detailBooksHeader changed:', detailBooksHeader);
        console.log('listChecked changed:', listChecked);
    }, [detailBooksChapter, detailBooksHeader, listChecked]);

    const handleCheckboxChange = (chapterId: number, bookId: number) => {

        const updatedData = detailBooksChapter.map((item) => {
            if (item.id === chapterId) {
                return { ...item, status: !item.status };
            }
            return item;
        });

        const selectedBook = updatedData.find(bookChapter => bookChapter.id === chapterId);
        console.log('selectedBook', selectedBook)

        const nestedBookWithAscendant = {
            ...selectedBook,
            bookId: bookId,
        }
        const listCheckChapter = [nestedBookWithAscendant];

        const updatedList = [...listChecked];

        listCheckChapter.forEach(newItem => {
            const existingIndex = updatedList.findIndex(
                item => item.id === newItem.id && item.chapter === newItem.chapter && item.bookId == newItem.bookId
            );

            if (existingIndex > -1) {
                if (selectedBook?.status) {
                    updatedList[existingIndex] = newItem;
                } else {
                    updatedList.splice(existingIndex, 1);
                }
            } else if (selectedBook?.status) {
                updatedList.push(newItem);
            }
        });

        console.log('updatedList after', updatedList)


        if (selectedBook?.status) {

            setDetailBooksHeader(({
                ...detailBooksHeader,
                progress: detailBooksHeader.progress + 1,
            }));
            setBible(prev => (
                prev.map(prev =>
                    prev.id === bookId ? { ...prev, progress: prev.progress + 1 } : prev
                )
            ))
            setlistChecked(
                updatedList
            )

        } else {

            setDetailBooksHeader(detailBooksHeader => ({
                ...detailBooksHeader,
                progress: detailBooksHeader.progress - 1,
            }));
            setBible(prev => (
                prev.map(prev =>
                    prev.id === bookId ? { ...prev, progress: prev.progress - 1 } : prev
                )
            ))
            setlistChecked(
                updatedList
            )
        }

        setDetailBooksChapter(updatedData)
    };


    return (
        <div className="pb-4">

            <Navbar />

            <div className="mt-10">
                <Sheet>

                    {
                        bible.map(bible =>
                            <div key={bible.id} className="flex justify-center ">
                                <div>
                                    <SheetTrigger asChild>
                                        <Card className="w-52 h-16 p-2 rounded-[8px] cursor-pointer" onClick={() => handleClick(bible.id)}>
                                            <p className="text-center poppins-regular">{bible.book}</p>
                                            <Progress value={bible.progress / bible.totalChapters * 100} className="w-full h-2 mt-2" />
                                        </Card>
                                    </SheetTrigger>

                                    {
                                        bible.id < 66 &&
                                        <div className="flex justify-center mt-3">
                                            <ChevronDownIcon className="h-4 w-4" />
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        detailBooksHeader && (
                            <SheetContent className="overflow-scroll px-0" side={'right'}>
                                <SheetHeader className='px-6'>
                                    <SheetTitle className="text-center font-bold">
                                        {detailBooksHeader.book}
                                    </SheetTitle>
                                    <SheetDescription className="text-center text-base font-bold">
                                        {detailBooksHeader.progress} / {detailBooksHeader.totalChapters}
                                    </SheetDescription>
                                    <Progress value={detailBooksHeader.progress / detailBooksHeader.totalChapters * 100} className="w-full h-3 mt-2" />
                                </SheetHeader>
                                <Table>
                                    <TableCaption>A list chapters from {detailBooksHeader.book}.</TableCaption>
                                    <TableHeader>
                                        <TableRow className='hover:bg-transparent '>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Chapter</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {detailBooksChapter.map((detail) => (
                                            <TableRow key={detail.id} className={`h-16 ${detail.status ? 'hover:bg-accent bg-accent' : 'hover:bg-transparent'}`}
                                            >
                                                <TableCell >
                                                    <Checkbox
                                                        className="w-5 h-5 rounded"
                                                        checked={detail.status}
                                                        onCheckedChange={() => handleCheckboxChange(detail.id, detailBooksHeader.id)}
                                                    />
                                                </TableCell>
                                                <TableCell>{detailBooksHeader.book} {detail.chapter}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </SheetContent>
                        )
                    }
                </Sheet>
            </div>


        </div>
    )
}
