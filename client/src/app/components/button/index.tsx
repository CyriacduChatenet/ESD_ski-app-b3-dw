import { FC } from "react";

interface IProps {
    label: string;
}

export const Button: FC<IProps> = ({ label }) => {
    return (
        <button className="px-8 py-2 rounded-lg bg-indigo-700 text-white font-bold">{label}</button>
    );
};