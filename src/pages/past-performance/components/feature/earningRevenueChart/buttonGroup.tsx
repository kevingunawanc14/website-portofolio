import React from 'react'
import { Button } from "@/components/ui/button"

interface ButtonGroupProps {
    activeButtons: string[];
    onButtonClick: (label: string) => void;
}

function ButtonGroup({ activeButtons, onButtonClick }: ButtonGroupProps) {


    return (
        <div className="flex justify-center">
            <Button
                className={`rounded-[10px] rounded-r-none bg-white border-2 text-slate-400   text-[12px] hover:bg-gray-200 border-slate-300 ${activeButtons.indexOf('revenue') !== -1 ? 'text-black bg-gray-200 poppins-medium' : ''}`}
                onClick={() => onButtonClick('revenue')}
            >
                <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                </svg>
                Revenue
            </Button>
            <Button
                className={`border-2 border-l-0 rounded-none bg-white text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 ${activeButtons.indexOf('earnings') !== -1 ? 'text-black bg-gray-200 poppins-medium' : ''}`}
                onClick={() => onButtonClick('earnings')}
            >
                <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                </svg>
                Earnings
            </Button>
            <Button
                className={`border-2 border-x-0 rounded-none bg-white text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 ${activeButtons.indexOf('freecashflow') !== -1 ? 'text-black bg-gray-200 poppins-medium' : ''}`}
                onClick={() => onButtonClick('freecashflow')}
            >
                <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                </svg>
                Free Cash Flow
            </Button>
            <Button
                className={`rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 ${activeButtons.indexOf('cashfromops') !== -1 ? 'text-black bg-gray-200 poppins-medium' : ''}`}
                onClick={() => onButtonClick('cashfromops')}
            >
                <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                </svg>
                Cash From Op
            </Button>
        </div>
    )
}

export default ButtonGroup