import { FC } from "react";

interface IProps {
    tableHead: JSX.Element;
    tableBody: JSX.Element;
};

export const Table: FC<IProps> = ({ tableHead, tableBody }) => {
    return (
        <table className="table-auto mt-4">
        <thead>
            <tr>
               {tableHead}
            </tr>
        </thead>
        <tbody>
            {tableBody}
        </tbody>
    </table>
    );
};