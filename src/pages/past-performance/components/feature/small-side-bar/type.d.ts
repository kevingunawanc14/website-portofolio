export interface ItemProps {
    id: number,
    tagId: string;
    title: string;
    status: boolean;
}

export interface HoverSideBarProps {
    state: number | null;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { ItemProps, HoverSideBarProps };
