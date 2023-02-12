import { FC } from "react";
import { FormInput } from "../../atoms/input";

interface IProps {
    label: string;
    children?: JSX.Element;
};

export const FormInputLabel: FC<IProps> = ({label, children}) => {
    return (
        <label htmlFor="">
                <p>{label}</p>
                {children}
            </label>
    );
};