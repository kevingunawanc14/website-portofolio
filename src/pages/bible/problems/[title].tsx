import React, { useState, useEffect } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Navbar from '../components/navbar';
import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
} from "@radix-ui/react-icons"

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from 'next/image'
import { useRouter } from 'next/router';
import { string } from 'zod';
import { Skeleton } from "@/components/ui/skeleton"


export default function DetailProblem() {


    const problems = [
        {
            id: 1,
            title: "Which type of water was created first at the beginning of creation?",
            slug: "which-type-of-water-was-created-first-at-the-beginning-of-creation",
            category: "creation",
            answer: ["Pure Water", "Sea Water", "Rain Water"],
            photos: [
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/01_FB_Creation_1024.jpg?1635858803",
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/02_FB_Creation_1024.jpg?1635858803",
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/03_FB_Creation_1024.jpg?1635858803"
            ]
        },
        {
            id: 2,
            title: "How many humans did Jesus create at the beginning of creation?",
            slug: "how-many-humans-did-jesus-create-at-the-beginning-of-creation",
            category: "creation",
            answer: ["2", "1", "0"],
            photos: [
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/10_FB_Creation_1024.jpg?1635858803",
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/11_FB_Creation_1024.jpg?1635858803",
                "https://media.freebibleimages.org/stories/FB_Creation/source-jpeg/12_FB_Creation_1024.jpg?1635858803"
            ]
        },
        {
            id: 3,
            title: "What kind of apple did Jesus create there?",
            slug: "what-kind-of-apple-did-jesus-create-there",
            category: "creation",
            answer: ["Red Apple", "Golden Apple", "No specific kind"],
            photos: []
        },
        {
            id: 4,
            title: "Where did Adam and Eve go after they were kicked out of the Garden of Eden?",
            slug: "where-did-adam-and-eve-go-after-they-were-kicked-out-of-the-garden-of-eden",
            category: "creation",
            answer: ["To the east of Eden", "To a new land", "Wandered the Earth"],
            photos: []
        },
        {
            id: 5,
            title: "What was the total human population during Abraham's era?",
            slug: "what-was-the-total-human-population-during-abrahams-era",
            category: "creation",
            answer: ["Several thousand", "Hundreds", "Millions"],
            photos: []
        },
        {
            id: 6,
            title: "How many people survived the incident of Noah's Ark?",
            slug: "how-many-people-survived-the-incident-of-noahs-ark",
            category: "conflict",
            answer: ["8", "10", "50"],
            photos: []
        },
        {
            id: 7,
            title: "Did the tiger bite Daniel?",
            slug: "did-the-tiger-bite-daniel",
            category: "conflict",
            answer: ["No, it did not", "Yes, it did", "It's unclear"],
            photos: []
        },
        {
            id: 8,
            title: "What kind of tiger bit Daniel?",
            slug: "what-kind-of-tiger-bit-daniel",
            category: "conflict",
            answer: ["A Bengal tiger", "A Siberian tiger", "No tiger bit Daniel"],
            photos: []
        },
        {
            id: 9,
            title: "How many tigers trapped Daniel?",
            slug: "how-many-tigers-trapped-daniel",
            category: "conflict",
            answer: ["2", "5", "None"],
            photos: []
        },
        {
            id: 10,
            title: "Did Daniel forgive them?",
            slug: "did-daniel-forgive-them",
            category: "conflict",
            answer: ["Yes, he forgave them", "No, he did not", "He was undecided"],
            photos: []
        },
        {
            id: 11,
            title: "What kind of whale swallowed Jonah?",
            slug: "what-kind-of-whale-swallowed-jonah",
            category: "conflict",
            answer: ["A great fish", "A sperm whale", "A blue whale"],
            photos: []
        },
        {
            id: 12,
            title: "How much food did Jesus share in the story of the Feeding of the 5,000?",
            slug: "how-much-food-did-jesus-share-in-the-story-of-the-feeding-of-the-5000",
            category: "miracles",
            answer: ["5 loaves and 2 fish", "7 loaves", "10 fish"],
            photos: []
        },
        {
            id: 13,
            title: "Did everyone finish the food?",
            slug: "did-everyone-finish-the-food",
            category: "miracles",
            answer: ["No, there were leftovers", "Yes, they finished it all", "They were still hungry"],
            photos: []
        },
        {
            id: 14,
            title: "What kind of containers were used for the food?",
            slug: "what-kind-of-containers-were-used-for-the-food",
            category: "miracles",
            answer: ["Baskets", "Bowls", "Plates"],
            photos: []
        },
        {
            id: 15,
            title: "Who walked on water in the Bible?",
            slug: "who-walked-on-water-in-the-bible",
            category: "miracles",
            answer: ["Jesus", "Peter", "Moses"],
            photos: []
        },
        {
            id: 16,
            title: "How did Moses divide the sea?",
            slug: "how-did-moses-divide-the-sea",
            category: "miracles",
            answer: ["With his staff", "With a prayer", "With a stone"],
            photos: []
        },
        {
            id: 17,
            title: "How many paths were created after Moses divided the sea?",
            slug: "how-many-paths-were-created-after-moses-divided-the-sea",
            category: "miracles",
            answer: ["One path", "Two paths", "Multiple paths"],
            photos: []
        },
        {
            id: 18,
            title: "How did Daniel climb up from the cave to the top?",
            slug: "how-did-daniel-climb-up-from-the-cave-to-the-top",
            category: "conflict",
            answer: ["With ropes", "By being lifted", "Climbing rocks"],
            photos: []
        },
        {
            id: 21,
            title: "Which war cost the most in terms of troops?",
            slug: "which-war-cost-the-most-in-terms-of-troops",
            category: "battle",
            answer: ["Battle of Jericho", "David vs. Goliath", "War of the Philistines"],
            photos: []
        },
        {
            id: 22,
            title: "Which war was won without severe bloodshed?",
            slug: "which-war-was-won-without-severe-bloodshed",
            category: "battle",
            answer: ["Battle of Jericho", "Gideon's battle", "Battle of Ai"],
            photos: []
        },
        {
            id: 23,
            title: "How did the smallest defeat the largest?",
            slug: "how-did-the-smallest-defeat-the-largest",
            category: "battle",
            answer: ["With faith", "With a slingshot", "With strategy"],
            photos: []
        },
        {
            id: 24,
            title: "Which things are not used to win a battle?",
            slug: "which-things-are-not-used-to-win-a-battle",
            category: "battle",
            answer: ["Weapons", "Kindness", "Strength"],
            photos: []
        },
        {
            id: 25,
            title: "What happened when King Nebuchadnezzar lost?",
            slug: "what-happened-when-king-nebuchadnezzar-lost",
            category: "battle",
            answer: ["He went into exile", "He was humbled", "He regained his kingdom"],
            photos: []
        },
        {
            id: 26,
            title: "What type of weapon did Lucifer use to fight?",
            slug: "what-type-of-weapon-did-lucifer-use-to-fight",
            category: "demon",
            answer: ["Deception", "Flames", "Swords"],
            photos: []
        },
        {
            id: 27,
            title: "What happened to Lucifer?",
            slug: "what-happened-to-lucifer",
            category: "demon",
            answer: ["He was cast out of heaven", "He became a ruler", "He was redeemed"],
            photos: []
        },
        {
            id: 28,
            title: "Why did Judas betray Jesus?",
            slug: "why-did-judas-betray-jesus",
            category: "demon",
            answer: ["For money", "For power", "Out of fear"],
            photos: []
        },
        {
            id: 29,
            title: "In the Book of Revelation, who leads the final battle against Satan and his demons?",
            slug: "in-the-book-of-revelation-who-leads-the-final-battle-against-satan-and-his-demons",
            category: "demon",
            answer: ["Jesus", "Archangel Michael", "Gabriel"],
            photos: []
        },
        {
            id: 30,
            title: "According to the Gospels, what do demons often do when confronted by Jesus?",
            slug: "according-to-the-gospels-what-do-demons-often-do-when-confronted-by-jesus",
            category: "demon",
            answer: ["They flee", "They tremble", "They beg for mercy"],
            photos: []
        }
    ];


    // const [detailQuestion, setDetailQuestion] = useState()
    // const [detailAnswers, setDetailAnswers] = useState()
    // const [detailPhotos, setDetailPhotos] = useState()
    const { query } = useRouter();


    const [details, setDetails] = useState<{ question: string, answers: string[], photos: string[] }>({
        question: "",
        answers: [],
        photos: []
    });

    useEffect(() => {

        const filteredProblems = problems.filter(problem => problem.slug == query.title)

        if (query.title) {
            setDetails(
                {
                    ...details,
                    question: filteredProblems[0].title,
                    answers: filteredProblems[0].answer,
                    photos: filteredProblems[0].photos,
                }
            )
        }

    }, [query, details])

    return (
        <>
            <Navbar />

            <div className=' '>
                <div className='container '>
                    <div className='flex justify-center mt-5'>
                        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {details.photos && details.photos.length > 0 ? (
                                    details.photos.map((photo, index) => (
                                        <figure key={index} className="shrink-0">
                                            <div className="overflow-hidden rounded-md">
                                                <Image
                                                    src={photo}
                                                    alt={`Photo by Sweet Publishing`}
                                                    className="h-40 w-60 sm:h-60 sm:w-60 object-cover"
                                                    width={300}
                                                    height={400}
                                                    priority={index === 0}
                                                />
                                            </div>
                                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                                Photo by{" "}
                                                <span className="font-semibold text-foreground">
                                                    Sweet Publishing
                                                </span>
                                            </figcaption>
                                        </figure>
                                    ))
                                ) : (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <figure key={index} className="shrink-0">
                                            <div className="overflow-hidden rounded-md">
                                                <Skeleton className="h-40 w-60 sm:h-60 sm:w-60 rounded-md" />
                                            </div>
                                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                                Photo{" "}
                                                <span className="font-semibold text-foreground">
                                                    not available yet
                                                </span>
                                            </figcaption>
                                        </figure>
                                    ))
                                )}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center text-lg sm:text-2xl poppins-semibold'>{details.question}</p>
                    </div>
                    <div className='justify-center mt-7 hidden sm:flex '>
                        {details.answers.length > 1 && (
                            <ToggleGroup type="single" size={'custom1'} variant="outline">
                                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5'>
                                    <ToggleGroupItem value="bold" aria-label="Toggle bold" className='min-w-60 poppins-regular '>
                                        {details.answers[0]}
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic" aria-label="Toggle italic" className='min-w-60 poppins-regular'>
                                        {details.answers[1]}
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" className='min-w-60 poppins-regular'>
                                        {details.answers[2]}
                                    </ToggleGroupItem>
                                </div>
                            </ToggleGroup>
                        )}
                    </div>

                    <div className='justify-center mt-7 flex sm:hidden '>
                        <ToggleGroup type="single" size={'custom2'} variant="outline">
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5'>
                                <ToggleGroupItem value="bold" aria-label="Toggle bold" className='min-w-60 poppins-regular '>
                                    Air
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic" aria-label="Toggle italic" className='min-w-60 poppins-regular'>
                                    Air Laut
                                </ToggleGroupItem>
                                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" className='min-w-60 poppins-regular'>
                                    Air Hujan
                                </ToggleGroupItem>
                            </div>
                        </ToggleGroup>
                    </div>

                </div>

                <div className='border-b-2 border-primary hidden sm:block'>
                </div>

                <div className='container  '>
                    <div className='h-24 md:h-32 content-center'>
                        <div className='flex justify-end '>
                            <Button size="default" className='poppins-regular w-full sm:w-max '>Submit</Button>

                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}
