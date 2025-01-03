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
import Footer from '../components/footer';

export default function Problems() {

  const problems = [
    {
      id: 1,
      status: <StatusComponent status={false} />,
      title: "Which type of water was created first at the beginning of creation?",
      slug: "which-type-of-water-was-created-first-at-the-beginning-of-creation",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "creation",
    },
    {
      id: 2,
      status: <StatusComponent status={false} />,
      title: "How many humans did Jesus create at the beginning of creation?",
      slug: "how-many-humans-did-jesus-create-at-the-beginning-of-creation",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "creation"
    },
    {
      id: 3,
      status: <StatusComponent status={false} />,
      title: "What kind of apple did Jesus create there?",
      slug: "what-kind-of-apple-did-jesus-create-there",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "creation"
    },
    {
      id: 4,
      status: <StatusComponent status={false} />,
      title: "Where did Adam and Eve go after they were kicked out of the Garden of Eden?",
      slug: "where-did-adam-and-eve-go-after-they-were-kicked-out-of-the-garden-of-eden",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "creation"
    },
    {
      id: 5,
      status: <StatusComponent status={false} />,
      title: "What was the total human population during Abraham's era?",
      slug: "what-was-the-total-human-population-during-abrahams-era",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "creation"
    },
    {
      id: 6,
      status: <StatusComponent status={false} />,
      title: "How many people survived the incident of Noah's Ark?",
      slug: "how-many-people-survived-the-incident-of-noahs-ark",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "conflict",
    },
    {
      id: 7,
      status: <StatusComponent status={false} />,
      title: "Did the tiger bite Daniel?",
      slug: "did-the-tiger-bite-daniel",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "conflict"
    },
    {
      id: 8,
      status: <StatusComponent status={false} />,
      title: "What kind of tiger bit Daniel?",
      slug: "what-kind-of-tiger-bit-daniel",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "conflict"
    },
    {
      id: 9,
      status: <StatusComponent status={false} />,
      title: "How many tigers trapped Daniel?",
      slug: "how-many-tigers-trapped-daniel",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "conflict"
    },
    {
      id: 10,
      status: <StatusComponent status={false} />,
      title: "Did Daniel forgive them?",
      slug: "did-daniel-forgive-them",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "conflict"
    },
    {
      id: 11,
      status: <StatusComponent status={false} />,
      title: "What kind of whale swallowed Jonah?",
      slug: "what-kind-of-whale-swallowed-jonah",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "conflict"
    },
    {
      id: 12,
      status: <StatusComponent status={false} />,
      title: "How much food did Jesus share in the story of the Feeding of the 5,000?",
      slug: "how-much-food-did-jesus-share-in-the-story-of-the-feeding-of-the-5000",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "miracles",
    },
    {
      id: 13,
      status: <StatusComponent status={false} />,
      title: "Did everyone finish the food?",
      slug: "did-everyone-finish-the-food",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "miracles"
    },
    {
      id: 14,
      status: <StatusComponent status={false} />,
      title: "What kind of containers were used for the food?",
      slug: "what-kind-of-containers-were-used-for-the-food",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "miracles"
    },
    {
      id: 15,
      status: <StatusComponent status={false} />,
      title: "Who walked on water in the Bible?",
      slug: "who-walked-on-water-in-the-bible",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "miracles"
    },
    {
      id: 16,
      status: <StatusComponent status={false} />,
      title: "How did Moses divide the sea?",
      slug: "how-did-moses-divide-the-sea",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "miracles"
    },
    {
      id: 17,
      status: <StatusComponent status={false} />,
      title: "How many paths were created after Moses divided the sea?",
      slug: "how-many-paths-were-created-after-moses-divided-the-sea",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "miracles"
    },
    {
      id: 18,
      status: <StatusComponent status={false} />,
      title: "How did Daniel climb up from the cave to the top?",
      slug: "how-did-daniel-climb-up-from-the-cave-to-the-top",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "conflict"
    },
    {
      id: 21,
      status: <StatusComponent status={false} />,
      title: "Which war cost the most in terms of troops?",
      slug: "which-war-cost-the-most-in-terms-of-troops",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "battle"
    },
    {
      id: 22,
      status: <StatusComponent status={false} />,
      title: "Which war was won without severe bloodshed?",
      slug: "which-war-was-won-without-severe-bloodshed",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "battle"
    },
    {
      id: 23,
      status: <StatusComponent status={false} />,
      title: "How did the smallest defeat the largest?",
      slug: "how-did-the-smallest-defeat-the-largest",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "battle",
    },
    {
      id: 24,
      status: <StatusComponent status={false} />,
      title: "Which things are not used to win a battle?",
      slug: "which-things-are-not-used-to-win-a-battle",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "battle"
    },
    {
      id: 25,
      status: <StatusComponent status={false} />,
      title: "What happened when King Nebuchadnezzar lost?",
      slug: "what-happened-when-king-nebuchadnezzar-lost",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "battle"
    },
    {
      id: 26,
      status: <StatusComponent status={false} />,
      title: "What type of weapon did Lucifer use to fight?",
      slug: "what-type-of-weapon-did-lucifer-use-to-fight",
      difficulty: <DifficultyComponent difficulty="hard" />,
      category: "demon"
    },
    {
      id: 27,
      status: <StatusComponent status={false} />,
      title: "What happened to Lucifer?",
      slug: "what-happened-to-lucifer",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "demon"
    },
    {
      id: 28,
      status: <StatusComponent status={false} />,
      title: "Why did Judas betray Jesus?",
      slug: "why-did-judas-betray-jesus",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "demon"
    },
    {
      id: 29,
      status: <StatusComponent status={false} />,
      title: "In the Book of Revelation, who leads the final battle against Satan and his demons?",
      slug: "in-the-book-of-revelation-who-leads-the-final-battle-against-satan-and-his-demons",
      difficulty: <DifficultyComponent difficulty="medium" />,
      category: "demon",
    },
    {
      id: 30,
      status: <StatusComponent status={false} />,
      title: "According to the Gospels, what do demons often do when confronted by Jesus?",
      slug: "according-to-the-gospels-what-do-demons-often-do-when-confronted-by-jesus",
      difficulty: <DifficultyComponent difficulty="easy" />,
      category: "demon"
    },
  ];


  return (
    <>
      <Navbar />
      <div >
        <div className='container h-screen'>
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
                  {
                    problems
                      .filter(problem => problem.category == "creation")
                      .map(problem => (
                        <TableRow key={problem.id} className='hover:bg-transparent' >
                          <TableCell className='' >{problem.status}</TableCell>
                          <TableCell className='  '>
                            <Link href={`/bible/problems/${problem.slug}`} legacyBehavior passHref>
                              <span className='cursor-pointer hover:text-blue-600 poppins-medium'>
                                {problem.title}
                              </span>
                            </Link>
                          </TableCell>
                          <TableCell className='poppins-medium'>{problem.difficulty}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="conflict">
              <Table>
                <TableHeader>
                  <TableRow className='hover:bg-transparent'>
                    <TableHead className='poppins-medium'>Status</TableHead>
                    <TableHead className='poppins-medium'>Problem</TableHead>
                    <TableHead className='poppins-medium'>Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    problems
                      .filter(problem => problem.category == "conflict")
                      .map(problem => (
                        <TableRow key={problem.id} className='hover:bg-transparent' >
                          <TableCell className='' >{problem.status}</TableCell>
                          <TableCell className='  '>
                            <Link href={`/bible/problems/${problem.slug}`} legacyBehavior passHref>
                              <span className='cursor-pointer hover:text-blue-600 poppins-medium'>
                                {problem.title}
                              </span>
                            </Link>
                          </TableCell>
                          <TableCell className='poppins-medium'>{problem.difficulty}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="miracles">
              <Table>
                <TableHeader>
                  <TableRow className='hover:bg-transparent'>
                    <TableHead className='poppins-medium'>Status</TableHead>
                    <TableHead className='poppins-medium'>Problem</TableHead>
                    <TableHead className='poppins-medium'>Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    problems
                      .filter(problem => problem.category == "miracles")
                      .map(problem => (
                        <TableRow key={problem.id} className='hover:bg-transparent' >
                          <TableCell className='poppins-medium' >{problem.status}</TableCell>
                          <TableCell className='  '>
                            <Link href={`/bible/problems/${problem.slug}`} legacyBehavior passHref>
                              <span className='cursor-pointer hover:text-blue-600 poppins-medium'>
                                {problem.title}
                              </span>
                            </Link>
                          </TableCell>
                          <TableCell className='poppins-medium'>{problem.difficulty}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="battle">
              <Table>
                <TableHeader>
                  <TableRow className='hover:bg-transparent'>
                    <TableHead className='poppins-medium'>Status</TableHead>
                    <TableHead className='poppins-medium'>Problem</TableHead>
                    <TableHead className='poppins-medium'>Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    problems
                      .filter(problem => problem.category == "battle")
                      .map(problem => (
                        <TableRow key={problem.id} className='hover:bg-transparent' >
                          <TableCell className='poppins-medium' >{problem.status}</TableCell>
                          <TableCell className=' '>
                            <Link href={`/bible/problems/${problem.slug}`} legacyBehavior passHref>
                              <span className='cursor-pointer hover:text-blue-600 poppins-medium'>
                                {problem.title}
                              </span>
                            </Link>
                          </TableCell>
                          <TableCell className='poppins-medium'>{problem.difficulty}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="demon">
              <Table>
                <TableHeader>
                  <TableRow className='hover:bg-transparent'>
                    <TableHead className='poppins-medium'>Status</TableHead>
                    <TableHead className='poppins-medium'>Problem</TableHead>
                    <TableHead className='poppins-medium'>Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    problems
                      .filter(problem => problem.category == "demon")
                      .map(problem => (
                        <TableRow key={problem.id} className='hover:bg-transparent' >
                          <TableCell className='poppins-medium' >{problem.status}</TableCell>
                          <TableCell className='  '>
                            <Link href={`/bible/problems/${problem.slug}`} legacyBehavior passHref>
                              <span className='cursor-pointer hover:text-blue-600 poppins-medium'>
                                {problem.title}
                              </span>
                            </Link>
                          </TableCell>
                          <TableCell className='poppins-medium'>{problem.difficulty}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
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
          <p className='text-green-600 poppins-medium'>Easy</p>
        ) : difficulty === 'medium' ? (
          <p className='text-orange-600  poppins-medium'>Medium</p>
        ) : (
          <p className='text-red-600  poppins-medium'>Hard</p>
        )
      }

    </div>
  );
};

