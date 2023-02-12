import { FC } from "react";

interface IProps {
    label: string
};

export const TableEntry: FC<IProps> = ({ label }) => {
    return (
        <th className="px-4 py-2 bg-indigo-400 text-white">{label}</th>
    );
};