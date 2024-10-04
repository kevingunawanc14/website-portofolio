/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"
import {
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useRouter } from 'next/router';
import Link from 'next/link';

interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Article {
    id: number;
    title: string;
    categories: Category[];
}

interface filterCategorize {
    id: number;
    name: string;
}

function LandingPage() {
    const router = useRouter();

    const handleNavigationHome = () => {
        router.push('/landingPage');
    };

    const [originalArticles, setOriginalArticles] = useState<Article[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<filterCategorize[]>([]);

    const fetchAllArticles = async () => {
        let allArticles: Article[] = [];
        for (let id = 1; id <= 50; id++) {
            try {
                const response = await fetch(`https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${id}`);
                const data = await response.json();
                console.log('data', data)
                allArticles.push(data.data);
            } catch (error) {
                console.error(error);
            }
        }
        setOriginalArticles(allArticles);
        setArticles(allArticles);
        console.log('allArticles', allArticles);
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/categories');
            const data = await response.json();
            setCategories(data.data);
            console.log('data', data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {

        fetchCategories();
        fetchAllArticles();
    }, []);

    const filterArticles = (categoryId: number) => {

        const filtered = originalArticles.filter(article =>
            article.categories && Array.isArray(article.categories) && article.categories.some(category => category.id === categoryId)
        );
        setArticles(filtered);

    };

    useEffect(() => {
        if (articles) {
            console.log('articles', articles);
        }
    }, [articles]);

    return (
        <>
            <div className="">
                <Button onClick={() => handleNavigationHome()} className="w-full mt-1">Home</Button>
            </div>

            <div className="grid sm:grid-cols-2 mt-5">
                <div className="justify-self-center  ">
                    <Carousel className="max-w-44 sm:max-w-sm cursor-pointer">
                        <CarouselContent>
                            {articles.length > 0 ? (
                                articles.slice(0, 5).map((article, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Link href={`/detailPage/${article.id}?category_id=${article.categories && article.categories.length > 0 ? article.categories[0].id : ''}`} passHref>
                                                <Card className="">
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <p className="text-2xl sm:text-4xl font-semibold">{article.title}</p>
                                                    </CardContent>
                                                    <CardFooter className="flex justify-between">
                                                        Categories: {
                                                            article.categories && article.categories.length > 0
                                                                ? article.categories.map((category) => category.name).join(', ')
                                                                : 'No categories available'
                                                        }
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))
                            ) : (
                                <p>Loading articles...</p>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="grid grid-rows-3 justify-items-center ">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <Card key={category.id} className="w-[200px] mt-3 mb-3">
                                <CardHeader>
                                    <CardTitle>{category.name}</CardTitle>
                                    <CardDescription>categories</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between">
                                    <Button onClick={() => filterArticles(category.id)}>Filter</Button>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <p>Loading categories...</p>
                    )}
                </div>
            </div>


        </>
    )
}

export default LandingPage



