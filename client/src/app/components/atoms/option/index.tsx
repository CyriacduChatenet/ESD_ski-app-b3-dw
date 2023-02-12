import { FC } from "react";

import { Option } from "@/setup/types/option.type";

export const DropdownOption: FC<Option> = ({label, value}) => {
    return (
        <option value={value}>{label}</option>
    );
};