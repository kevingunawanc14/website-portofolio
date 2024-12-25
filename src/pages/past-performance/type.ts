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