import { FC } from "react";

interface IProps {
    label?: string | number;
    children?: JSX.Element;
}

export const TableCelular: FC<IProps> = ({label, children}) => {
    return (
        <td className="border border-solid border-gray-400 px-4 bg-white">
            <p>{label}</p>
            {children}
        </td>
    );
};