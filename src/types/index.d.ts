export interface Towels {
    id: number,
    y?
}

export interface Books {
    id: number;
    book: string;
    totalChapters: number;
    progress: number;
    testament?: string
    name?: string
}

export interface detailBook  {
    id: number,
    chapter: number,
    status:boolean,
    ascendant?: string,
    totalChapter?: number,
    bookId?:number
 
}

// export interface listCheckedChapters extends detailBook {
//     bookId: number
// }


// past performance interface
import { ReactNode } from 'react';

export interface HeaderProps {
    title: string; 
}

export interface TitleProps {
    title: string;
    description: ReactNode; 
    svg:ReactNode
}

export interface ItemProps {
    id: number,
    tagId: string;
    title: string;
    status: boolean;
}

export interface HoverState {
    state: number | null;
}

export interface CopyRightProps {
    year: number;
}