import React, { ReactNode } from 'react'
import Navbar from '../components/navbar';
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
import { CircleCheckBig } from 'lucide-react';
import Link from "next/link"

export default function Problems() {

  const problems = [
    {
      id: 1,
      status: <StatusComponent status={false} />,
      title: "Which type of water was created first at the beginning of creation ?",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "creation"
    },
    {
      id: 2,
      status: <StatusComponent status={false} />,
      title: "How many humans did Jesus create at the beginning of creation ?",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "creation"
    },
    {
      id: 3,
      status: <StatusComponent status={false} />,
      title: "What kind of apple did Jesus create there ?",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "creation"
    },
    {
      id: 4,
      status: <StatusComponent status={false} />,
      title: "Where did Adam and Eve go after they were kicked out of the Garden of Eden ?",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "creation"
    },
    {
      id: 5,
      status: <StatusComponent status={false} />,
      title: "What was the total human population during Abraham's era ?",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "creation"
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
                <TableRow className='hover:bg-transparent'>
                  <TableHead className='poppins-medium'>Status</TableHead>
                  <TableHead className='poppins-medium'>Problem</TableHead>
                  <TableHead className='poppins-medium'>Difficulty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((problem) => (
                  <TableRow key={problem.id} className='hover:bg-transparent' >
                    <TableCell className='poppins-regular' >{problem.status}</TableCell>
                    <TableCell className='poppins-regular  '>
                      <Link href="/bible/problems/title-question" legacyBehavior passHref>
                        <span className='cursor-pointer hover:text-blue-600'>
                          {problem.title}
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className='poppins-regular'>{problem.difficulty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="conflict">

          </TabsContent>
          <TabsContent value="miracles">

          </TabsContent>
          <TabsContent value="battle">

          </TabsContent>
          <TabsContent value="demon">

          </TabsContent>
        </Tabs>

      </div>
    </>
  )
}

interface StatusProps {
  status?: boolean;
}

const StatusComponent = ({ status }: StatusProps): ReactNode => {
  return (
    <div>
      {
        status === true ? (
          <CircleCheckBig size={18} color='green' />
        ) : (
          null
        )
      }
    </div>
  );
};

interface DifficultyProps {
  difficulty: string;
}

const DifficultyComponent = ({ difficulty }: any): ReactNode => {
  return (
    <div>
      {
        difficulty === 'easy' ? (
          <p className='text-green-600 poppins-regular'>Easy</p>
        ) : difficulty === 'medium' ? (
          <p className='text-orange-600  poppins-regular'>Medium</p>
        ) : (
          <p className='text-red-600  poppins-regular'>Hard</p>
        )
      }

    </div>
  );
};

