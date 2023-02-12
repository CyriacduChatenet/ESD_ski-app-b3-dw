import { FC, PropsWithChildren } from "react";

interface IProps {
    style: string;
    children: JSX.Element;
}

export const Ul: FC<IProps> = ({style, children}) => {
    return (
        <ul className={`w-full h-full flex ${style}`}>
            {children}
        </ul>
    );
};