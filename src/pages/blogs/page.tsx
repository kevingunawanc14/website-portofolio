import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { useState } from 'react';
import { useEffect } from 'react';

// Mock function to simulate API data fetching
async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "9a74db7f",
            amount: 200,
            status: "pending",
            email: "jane@example.com",
        },
    ];
}

export default function DemoPage() {
    const [data, setData] = useState<Payment[]>([]); // State to store fetched data

    // Fetch data on component mount
    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            setData(result);
        }
        fetchData();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
