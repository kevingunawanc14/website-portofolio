import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Quote {
    id: number;
    quote: string;
    author: string;
}

function Index() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    // const [quotes, setQuotes] = useState<Quote[]>([]);

    // useEffect(() => {
    //     const fetchQuotes = async () => {
    //         try {
    //             const response = await fetch('https://dummyjson.com/quotes');
    //             const data = await response.json();
    //             console.log('data.quotes', data.quotes)

    //             setQuotes(data.quotes);
    //         } catch (error) {

    //         }
    //     };
    //     fetchQuotes();
    // }, []);

    return (
        <div className='p-[20px]'>
            <ResponsiveContainer width="99%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 1,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Index

/*

recharts
story book

data = json dummy / crypto api

to show chart we need data

chart = show data

storybook = bundle component

bundle component = chart, etc



*/