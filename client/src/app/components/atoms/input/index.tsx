import { FC } from "react";

interface IProps {
    type: string;
    name: string;
    placeholder: string;
    w?: string;
    onChange?: () => void;
}

export const FormInput: FC<IProps> = ({ type, name, placeholder, w, onChange}) => {
    return (
        <input type={type} name={name} className={`border border-solid border-gray-400 px-4 py-1.5 mr-4 ${w} rounded-md`} placeholder={placeholder} onChange={onChange} />
    );
};