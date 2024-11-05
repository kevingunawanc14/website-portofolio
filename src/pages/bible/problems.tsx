import React from 'react'
import Navbar from './components/navbar';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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
import { Earth, Swords, CircleAlert, Flame, Sparkle } from 'lucide-react';

export default function Problems() {

  const problems = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  return (
    <>
      <Navbar />
      <div className='container'>

        <Tabs defaultValue="creation" className="mt-3 ">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="creation" className='poppins-semibold'><Earth size={20} className='me-1'></Earth> Creation</TabsTrigger>
            <TabsTrigger value="conflict" className='poppins-semibold'><CircleAlert size={20} className='me-1'></CircleAlert>Conflict </TabsTrigger>
            <TabsTrigger value="miracles" className='poppins-semibold'><Sparkle size={20} className='me-1'></Sparkle>Miracles </TabsTrigger>
            <TabsTrigger value="battle" className='poppins-semibold'><Swords size={20} className='me-1'></Swords>Battle </TabsTrigger>
            <TabsTrigger value="demon" className='poppins-semibold'><Flame size={20} className='me-1'></Flame>Demon </TabsTrigger>

          </TabsList>
          <TabsContent value="creation">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='poppins-medium'>Status</TableHead>
                  <TableHead className='poppins-medium'>Problem</TableHead>
                  <TableHead className='poppins-medium'>Solution</TableHead>
                  <TableHead className='poppins-medium'>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((invoice) => (
                  <TableRow key={invoice.invoice} >
                    <TableCell className='poppins-regular' >{invoice.invoice}</TableCell>
                    <TableCell className='poppins-regular'>{invoice.paymentStatus}</TableCell>
                    <TableCell className='poppins-regular'>{invoice.paymentMethod}</TableCell>
                    <TableCell className='poppins-regular'>{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="conflict">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead>Solution</TableHead>
                  <TableHead>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="miracles">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead>Solution</TableHead>
                  <TableHead>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="battle">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead>Solution</TableHead>
                  <TableHead>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TabsContent>
          <TabsContent value="demon">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead>Solution</TableHead>
                  <TableHead>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>

      </div>
    </>
  )
}
