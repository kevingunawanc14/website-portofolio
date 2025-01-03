export interface EarningAndRevenueHistoryProps {
    activeButtons: string[];
}

export interface CustomXAxisProps {
    x?: number;
    y?: number;
    stroke?: string;
    payload?: {
        value: string | number;
    };
    value?: any,
}

export interface ButtonGroupProps {
    activeButtons: string[];
    onButtonClick: (label: string) => void;
}