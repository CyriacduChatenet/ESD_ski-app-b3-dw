import { FC, MouseEventHandler } from "react";

interface IProps {
    label: string;
    background_color: string;
    py:string;
    px:string;
    ml?: string;
    my?:string
    w?:string;
    onClick?: () => void;
}

export const Button: FC<IProps> = ({ label, background_color, px, py, ml, my, w, onClick }) => {
    return (
        <button className={`${px} ${py} rounded-lg ${background_color} ${ml} ${my} ${w} text-white font-bold`} onClick={onClick}>{label}</button>
    );
};