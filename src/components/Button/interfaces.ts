export type IButton = {
    onClick: () => void;
    color?: "primary" | "secondary";
    children: React.ReactNode;
}

export type ISelectColor = {
    [key: string]: {font: string, background: string}
}

export type SButton = {
    colorButton: {font: string, background: string}
}