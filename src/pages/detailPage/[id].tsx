import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/router';
import { Share } from 'lucide-react';
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
    content: string;
    categories: Category[];
}

interface filterCategorize {
    id: number;
    name: string;
}

function DetailPage() {

    const router = useRouter();

    const handleNavigationHome = () => {
        router.push('/landingPage');
    };
    const { id, category_id } = router.query;
    const [article, setArticleDetail] = useState<Article>();
    const [similarArticle, setSimilarArticle] = useState<Article[]>([]);

    const [originalArticles, setOriginalArticles] = useState<Article[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

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
        console.log('all', allArticles)
        console.log('categoryId', category_id)

        const categoryId = parseInt(category_id as string, 10);


        const filteredArticles = allArticles.filter(article =>
            article.categories && Array.isArray(article.categories) &&
            article.categories.some(category => category.id === categoryId
                &&
                article.id !== parseInt(id as string, 10)
            )
        );

        setSimilarArticle(filteredArticles);
        console.log('filteredArticles', filteredArticles);
    };


    useEffect(() => {
        if (id) {

            const fetchArticleDetail = async () => {
                try {
                    const response = await fetch(`https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${id}`);
                    const data = await response.json();
                    setArticleDetail(data.data);
                    console.log('data', data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchArticleDetail();
            fetchAllArticles();

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    const handleShare = () => {
        const currentUrl = `${window.location.origin}${router.asPath}`;
        navigator.clipboard.writeText(currentUrl);
        alert('Article URL copied to clipboard!');
    };

    return (
        <>
            <div className="">
                <Button onClick={() => handleNavigationHome()} className="w-full mt-1">Home</Button>
            </div>

            <div className="grid sm:grid-cols-2 mt-5 m-4">
                <div className="justify-self-center ">
                    <p className='text-2xl'>Article Detail</p>
                    {article ? (
                        <Card>
                            <CardHeader>
                                <div className='flex justify-around'>
                                    <CardTitle>{article.title}</CardTitle>
                                    <span onClick={handleShare} className='cursor-pointer'>    <Share />
                                    </span>

                                </div>
                            </CardHeader>
                            <Card className="m-3">
                                <CardHeader>
                                    <CardDescription className=''>{article.content}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Card>
                    ) : (
                        <p>Loading article...</p>
                    )}
                </div>

                <div className="grid grid-rows-3 justify-items-center max-h-full ">
                    {similarArticle.length > 0 ? (
                        similarArticle.map((similarArticle) => (
                            <Card key={similarArticle.id} className="w-[200px] mt-3 mb-3  ">
                                <CardHeader>
                                    <CardTitle>{similarArticle.title}</CardTitle>
                                    <CardDescription>{'categories' + ' ' + similarArticle.categories[0]?.name}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between">
                                    <Link href={`/detailPage/${similarArticle.id}?category_id=${similarArticle.categories && similarArticle.categories.length > 0 ? similarArticle.categories[0].id : ''}`} passHref>
                                        <Button>Detail</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <p>Loading similar article...</p>
                    )}
                </div>
            </div >
        </>
    )
}

export default DetailPage