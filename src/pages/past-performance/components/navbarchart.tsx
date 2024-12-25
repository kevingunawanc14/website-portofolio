import React, { useState } from 'react';
import { ItemProps } from '../type';
import { HoverState } from '../type';

function Navbarchart() {

    const [hoveredIndex, setHoveredIndex] = useState<HoverState>({ state: null });

    const [items, setItems] = useState<ItemProps[]>([
        { id: 1, tagId: 'earnings', title: 'Earnings and revenue history', status: false },
        { id: 2, tagId: 'free', title: 'Free Cash Flow vs Earnings', status: false },
        { id: 3, tagId: 'past', title: 'Past Earnings Growth Analysis', status: false },
        { id: 4, tagId: 'equity', title: 'Return on Equity', status: false },
        { id: 5, tagId: 'assets', title: 'Return on Assets', status: false },
        { id: 6, tagId: 'assets', title: 'Return on Capital Employed', status: false },
    ]);

    const handleScrollToId = (tagId: string, id: number) => {
        const element = document.getElementById(tagId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, status: true } : { ...item, status: false }
                )
            );
        }
    }

    return (
        <div className='grid grid-row-6 gap-[1px]'>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`poppins-regular text-slate-500 ms-[-1px] p-[5px] cursor-pointer  ${hoveredIndex.state === index ? 'transition delay-0 duration-500 border-red-600 border-l-[3px]' : ''}  ${item.status ? 'border-red-600 border-l-[3px]' : ''}`}
                    onMouseEnter={() => setHoveredIndex({ state: index })}
                    onMouseLeave={() => setHoveredIndex({ state: null })}
                    onClick={() => handleScrollToId(item.tagId, item.id)}
                >
                    <p
                        className={` ease-in-out poppins-regular text-[14px] ms-[10px] cursor-pointer ${hoveredIndex.state === index ? 'transition delay-0 duration-500 poppins-medium text-red-600 ' : ''} ${item.status ? 'poppins-medium text-red-600' : ''}`}
                    >
                        {item.title}
                    </p>
                </div>
            ))}

            {/* <div className='hover:border-red-600 hover:text-red-600 text-slate-500 hover:border-l-2 ms-[-1px] p-[5px] cursor-pointer '>
                <p className=' hover:font-medium poppins-regular text-[14px] ms-[10px]'>Free Cash Flow vs Earnings <br />Analysis</p>
            </div>

            <div className='hover:border-red-600 hover:text-red-600 text-slate-500 hover:border-l-2 ms-[-1px] p-[5px] cursor-pointer '>
                <p className=' hover:font-medium poppins-regular text-[14px] ms-[10px]'>Past Earnings Growth Analysis </p>
            </div>

            <div className='hover:border-red-600 hover:text-red-600 text-slate-500 hover:border-l-2 ms-[-1px] p-[5px] cursor-pointer '>
                <p className=' hover:font-medium poppins-regular text-[14px] ms-[10px]'>Return on Equity </p>
            </div>

            <div className='hover:border-red-600 hover:text-red-600 text-slate-500 hover:border-l-2 ms-[-1px] p-[5px] cursor-pointer '>
                <p className=' hover:font-medium poppins-regular text-[14px] ms-[10px]'>Return on Assets </p>
            </div>

            <div className='hover:border-red-600 hover:text-red-600 text-slate-500 hover:border-l-2 ms-[-1px] p-[5px] cursor-pointer '>
                <p className=' hover:font-medium poppins-regular text-[14px] ms-[10px]'>Return on Capital Employed </p>
            </div> */}


        </div>
    )
}

export default Navbarchart