import { ChangeEvent, FC } from "react";

import useFilter from "@/setup/contexts/filter.context";
import { Option } from "@/setup/types/option.type";
import { DropdownOption } from "@/app/components/atoms/option";

interface IProps {
    name: string;
    optionsArray: Option[];
}

export const DropdownSelect: FC<IProps> = ({ name, optionsArray }) => {
    const { credentials, setCredentials } = useFilter();

    const handleChange = (e: ChangeEvent<any>) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };
    return (
        <select name={name} className="py-1 px-4 rounded-lg" onChange={handleChange}>
            {optionsArray.map((option: Option) => <DropdownOption label={option.label} value={option.value}/>)}
        </select>
    );
};