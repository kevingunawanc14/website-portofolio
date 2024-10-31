import React from 'react'
import Navbar from './components/navbar';
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
// import styles from '../../styles/cust';
import { TextShimmer } from '@/components/ui/motion-primitive/text-shimmer';
import { Ellipsis } from 'lucide-react';

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

function Index() {

  const bible = [
    { id: 1, testament: "Old", name: "Genesis" },
    { id: 2, testament: "Old", name: "Exodus" },
    { id: 3, testament: "Old", name: "Leviticus" },
    { id: 4, testament: "Old", name: "Numbers" },
    { id: 5, testament: "Old", name: "Deuteronomy" },
    // { id: 6, testament: "Old", name: "Joshua" },
    // { id: 7, testament: "Old", name: "Judges" },
    // { id: 8, testament: "Old", name: "Ruth" },
    // { id: 9, testament: "Old", name: "1 Samuel" },
    // { id: 10, testament: "Old", name: "2 Samuel" },
    // { id: 11, testament: "Old", name: "1 Kings" },
    // { id: 12, testament: "Old", name: "2 Kings" },
    // { id: 13, testament: "Old", name: "1 Chronicles" },
    // { id: 14, testament: "Old", name: "2 Chronicles" },
    // { id: 15, testament: "Old", name: "Ezra" },
    // { id: 16, testament: "Old", name: "Nehemiah" },
    // { id: 17, testament: "Old", name: "Esther" },
    // { id: 18, testament: "Old", name: "Job" },
    // { id: 19, testament: "Old", name: "Psalms" },
    // { id: 20, testament: "Old", name: "Proverbs" },
    // { id: 21, testament: "Old", name: "Ecclesiastes" },
    // { id: 22, testament: "Old", name: "Song of Solomon" },
    // { id: 23, testament: "Old", name: "Isaiah" },
    // { id: 24, testament: "Old", name: "Jeremiah" },
    // { id: 25, testament: "Old", name: "Lamentations" },
    // { id: 26, testament: "Old", name: "Ezekiel" },
    // { id: 27, testament: "Old", name: "Daniel" },
    // { id: 28, testament: "Old", name: "Hosea" },
    // { id: 29, testament: "Old", name: "Joel" },
    // { id: 30, testament: "Old", name: "Amos" },
    // { id: 31, testament: "Old", name: "Obadiah" },
    // { id: 32, testament: "Old", name: "Jonah" },
    // { id: 33, testament: "Old", name: "Micah" },
    // { id: 34, testament: "Old", name: "Nahum" },
    // { id: 35, testament: "Old", name: "Habakkuk" },
    // { id: 36, testament: "Old", name: "Zephaniah" },
    // { id: 37, testament: "Old", name: "Haggai" },
    // { id: 38, testament: "Old", name: "Zechariah" },
    // { id: 39, testament: "Old", name: "Malachi" },
    // { id: 40, testament: "New", name: "Matthew" },
    // { id: 41, testament: "New", name: "Mark" },
    // { id: 42, testament: "New", name: "Luke" },
    // { id: 43, testament: "New", name: "John" },
    // { id: 44, testament: "New", name: "Acts" },
    // { id: 45, testament: "New", name: "Romans" },
    // { id: 46, testament: "New", name: "1 Corinthians" },
    // { id: 47, testament: "New", name: "2 Corinthians" },
    // { id: 48, testament: "New", name: "Galatians" },
    // { id: 49, testament: "New", name: "Ephesians" },
    // { id: 50, testament: "New", name: "Philippians" },
    // { id: 51, testament: "New", name: "Colossians" },
    // { id: 52, testament: "New", name: "1 Thessalonians" },
    // { id: 53, testament: "New", name: "2 Thessalonians" },
    // { id: 54, testament: "New", name: "1 Timothy" },
    // { id: 55, testament: "New", name: "2 Timothy" },
    // { id: 56, testament: "New", name: "Titus" },
    // { id: 57, testament: "New", name: "Philemon" },
    // { id: 58, testament: "New", name: "Hebrews" },
    // { id: 59, testament: "New", name: "James" },
    // { id: 60, testament: "New", name: "1 Peter" },
    // { id: 61, testament: "New", name: "2 Peter" },
    // { id: 62, testament: "New", name: "1 John" },
    // { id: 63, testament: "New", name: "2 John" },
    // { id: 64, testament: "New", name: "3 John" },
    // { id: 65, testament: "New", name: "Jude" },
    // { id: 66, testament: "New", name: "Revelation" }
  ];

  const [books, setBooks] = useState<Books[]>(bible);
  return (
    <>
      <Navbar />
      <div className='container'>

        <div className="grid grid-cols-2 gap-4 h-screen  content-center">
          <div>
            <p className='font-bold text-6xl '>BibleLingo</p>
            <p className='font-bold text-4xl mt-6'>The free,fun, and unique way to learn bible!</p>
            {/* A unique way to learn bible */}
            <Button variant="outline" size="lg" className='mt-10 text-2xl rounded'>Get Started</Button>


          </div>
          <div className={`max-h-64 mt-[-10rem]`}>

            <Sheet>

              {
                books.map(book =>

                  <div key={book.id} className="flex justify-center mt-3">
                    <div>
                      <SheetTrigger asChild>
                        <Card className="w-52 h-16 p-2 rounded-[8px] cursor-pointer">
                          <TextShimmer
                            duration={2}
                            className='text-center font-bold [--base-color:theme(colors.black)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.black)] dark:[--base-gradient-color:theme(colors.white)]'
                          >
                            {/* <p className="text-center font-bold">{book.name}</p> */}
                            {book.name}
                          </TextShimmer>
                          <Progress value={10} className="w-full h-2 mt-2" />
                        </Card>
                      </SheetTrigger>

                      {book.id < 5 ? (
                        <div className="flex justify-center mt-3">
                          <ChevronDownIcon className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className='flex justify-center mt-3'>
                          <Button variant="outline" size="default">
                            <Ellipsis /> More
                          </Button>
                        </div>

                      )}

                    </div>

                  </div>

                )
              }

              <SheetContent className=" sm:max-w-fit overflow-scroll" side={'right'}>
                <SheetHeader>
                  <SheetTitle>
                    <p className="text-center text-lg font-bold">Genesis</p>
                  </SheetTitle>
                  <SheetDescription>
                    <p className="text-center text-base font-bold">0 / 50</p>

                    <Progress value={10} className="w-full h-3 mt-2" />
                    {/* Make changes to your profile here. Click save when you're done. */}
                  </SheetDescription>
                </SheetHeader>
                <Table>
                  <TableCaption>A list chapters from Genesis.</TableCaption>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/0">
                      <TableHead className="w-[50px]">Status</TableHead>
                      <TableHead>Chapter</TableHead>
                      <TableHead>Key Point</TableHead>
                      <TableHead>Notes</TableHead>

                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell >   <Checkbox id="terms" className="h-5 w-5 ms-2" /></TableCell>
                        <TableCell>Genesis {invoice.chapters}</TableCell>
                        <TableCell>Genesis {invoice.chapters}</TableCell>
                        <TableCell>Genesis {invoice.chapters}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </SheetContent>
            </Sheet>


          </div>
        </div>

      </div>
    </>
  )
}

export default Index