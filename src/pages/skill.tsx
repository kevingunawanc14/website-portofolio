import * as React from "react"
import { InfiniteSlider } from '@/components/ui/motion-primitive/slider';


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


function Skill() {

  const algorithms = [
    { id: 1, name: "String", value: 50 },
    { id: 2, name: "Sorting", value: 50 },
    { id: 3, name: "Hash Map", value: 70 },
    { id: 4, name: "Two Pointer", value: 50 },
    { id: 5, name: "Database", value: 10 },
    { id: 6, name: "Sliding Window", value: 50 },
    { id: 7, name: "Prefix Sum", value: 10 },
    { id: 8, name: "Greedy", value: 50 },
    { id: 9, name: "Matrix", value: 50 },
    { id: 10, name: "Heap", value: 5 },
    { id: 11, name: "Stack", value: 5 },
    { id: 12, name: "Queue", value: 5 },
    { id: 13, name: "Recursion", value: 30 },
    { id: 14, name: "Math", value: 50 },
    { id: 15, name: "Number Theory", value: 5 },
    { id: 16, name: "Binary Search", value: 5 },
    { id: 17, name: "Linked List", value: 5 },
    { id: 18, name: "Depth-First Search", value: 5 },
    { id: 19, name: "Breadth-First Search", value: 5 },
    { id: 20, name: "Graph", value: 5 },
    { id: 21, name: "Tree", value: 5 },
    { id: 22, name: "Backtracking", value: 5 },
    { id: 23, name: "Union Find", value: 5 },
    { id: 24, name: "Divide and Conquer", value: 5 },
    { id: 25, name: "Dynamic Programming", value: 5 },
  ];

  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <p className="text-primary text-4xl md:text-5xl mb-4 font-bold poppins-medium tracking-tight">Skill</p>
        </div>
        <div className="">
          <InfiniteSlider gap={0} durationOnHover={75} reverse>
            <div
              id="skill"
              className="grid grid-cols-1 sm:grid-cols-5 gap-6 m-3 overflow-x-hidden">
              {algorithms
                .filter((algo) => algo.id >= 1 && algo.id <= 5) // Filter IDs from 1 to 5
                .map((algo) => (
                  <motion.div
                    key={algo.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                    <Card key={algo.id} className="w-72 h-max ">
                      <CardHeader>
                        <CardTitle className="text-xl rubik-regular">{algo.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress value={algo.value} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </InfiniteSlider>

          <InfiniteSlider gap={0} durationOnHover={75}>
            <div
              className="grid grid-cols-1 sm:grid-cols-5 gap-6 m-3 overflow-x-hidden">
              {algorithms
                .filter((algo) => algo.id >= 6 && algo.id <= 10) // Filter IDs from 1 to 5
                .map((algo) => (
                  <motion.div
                    key={algo.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                    <Card key={algo.id} className="w-72 h-max">
                      <CardHeader>
                        <CardTitle className="text-xl rubik-regular">{algo.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress value={algo.value} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </InfiniteSlider>

          <InfiniteSlider gap={0} durationOnHover={75} reverse>
            <div

              className="grid grid-cols-1 sm:grid-cols-5 gap-6 m-3 overflow-x-hidden">
              {algorithms
                .filter((algo) => algo.id >= 11 && algo.id <= 15) // Filter IDs from 1 to 5
                .map((algo) => (
                  <motion.div
                    key={algo.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                    <Card key={algo.id} className="w-72 h-max">
                      <CardHeader>
                        <CardTitle className="text-xl rubik-regular">{algo.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress value={algo.value} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

            </div>
          </InfiniteSlider>

          <InfiniteSlider gap={0} durationOnHover={75}>
            <div
              className="grid grid-cols-1 sm:grid-cols-5 gap-6 m-3 overflow-x-hidden">
              {algorithms
                .filter((algo) => algo.id >= 16 && algo.id <= 20) // Filter IDs from 1 to 5
                .map((algo) => (
                  <motion.div
                    key={algo.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                    <Card key={algo.id} className="w-72 h-max">
                      <CardHeader>
                        <CardTitle className="text-xl rubik-regular">{algo.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress value={algo.value} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </InfiniteSlider>

          <InfiniteSlider gap={0} durationOnHover={75} reverse>
            <div
              className="grid grid-cols-1 sm:grid-cols-5 gap-6 m-3">
              {algorithms
                .filter((algo) => algo.id >= 21 && algo.id <= 25) // Filter IDs from 1 to 5
                .map((algo) => (
                  <>
                    <motion.div
                      key={algo.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                    >
                      <Card className="w-72 h-max">
                        <CardHeader>
                          <CardTitle className="text-xl rubik-regular">{algo.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Progress value={algo.value} />
                        </CardContent>
                      </Card>
                    </motion.div >
                  </>
                ))}
            </div >
          </InfiniteSlider >
        </div>


      </div>


    </>

  )
}

export default Skill