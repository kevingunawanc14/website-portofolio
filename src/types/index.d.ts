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
 
}