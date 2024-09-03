import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import { motion } from 'framer-motion';


function test2() {

  const algorithms = [
    { id: 1, name: "String" },
    { id: 2, name: "Sorting" },
    { id: 3, name: "Hash Map" },
    { id: 4, name: "Two Pointer" },
    { id: 5, name: "Database" },
    { id: 6, name: "Sliding Window" },
    { id: 7, name: "Prefix Sum" },
    { id: 8, name: "Greedy" },
    { id: 9, name: "Matrix" },
    { id: 10, name: "Heap" },
    { id: 11, name: "Stack" },
    { id: 12, name: "Queue" },
    { id: 13, name: "Recursion" },
    { id: 14, name: "Math" },
    { id: 15, name: "Number Theory" },
    { id: 16, name: "Binary Search" },
    { id: 17, name: "Linked List" },
    { id: 18, name: "Depth-First Search" },
    { id: 19, name: "Breadth-First Search" },
    { id: 20, name: "Graph" },
    { id: 21, name: "Tree" },
    { id: 22, name: "Backtracking" },
    { id: 23, name: "Union Find" },
    { id: 24, name: "Divide and Conquer" },
    { id: 25, name: "Dynamic Programming" },
  ];
  
  return (
    <>

        <motion.div  
          initial={{ x: "2%"}}
          animate={{ x: "-2%" }} 
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            delay: 1,
          }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-1 m-3 overflow-x-hidden">
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
        </motion.div>

        <motion.div
         initial={{ x: "-2%"}}
         animate={{ x: "2%" }} 
         transition={{
           repeat: Infinity,
           repeatType: "mirror",
           duration: 1,
           delay: 1.1,
         }}
         className="grid grid-cols-2 sm:grid-cols-5 gap-1 m-3">
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
        </motion.div>

        <motion.div
         initial={{ x: "2%"}}
         animate={{ x: "-2%" }} 
         transition={{
           repeat: Infinity,
           repeatType: "mirror",
           duration: 1,
           delay: 1.2,
         }}
         className="grid grid-cols-2 sm:grid-cols-5 gap-1 m-3">
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
        </motion.div>

        <motion.div
         initial={{ x: "-2%"}}
         animate={{ x: "2%" }} 
         transition={{
           repeat: Infinity,
           repeatType: "mirror",
           duration: 1,
           delay: 1.3,
         }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-1 m-3">
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
        </motion.div>

        <motion.div
           initial={{ x: "2%"}}
           animate={{ x: "-2%" }} 
           transition={{
             repeat: Infinity,
             repeatType: "mirror",
             duration: 1,
             delay: 1.4,
           }}
        className="grid grid-cols-2 sm:grid-cols-5 gap-1 m-3">
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
          <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-white">Binary Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={20} className="w-[100%]" />
            </CardContent>
            <CardFooter className="flex justify-between" >
            </CardFooter>
          </Card>
          </div>
        </motion.div>

      
       </>
  
  )
}

export default test2