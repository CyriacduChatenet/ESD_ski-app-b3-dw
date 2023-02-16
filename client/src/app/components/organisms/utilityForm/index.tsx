import { ChangeEvent, FC } from "react";

import useFilter from "@/setup/contexts/filter.context";
import { Option } from "@/setup/types/option.type";
import { DropdownSelect } from "../../molecules/select";

export const UtilityForm: FC = () => {
    const { credentials, setCredentials } = useFilter();

    const weightDropdown: {name: string, options: Option[]} = {
        name: 'weight',
        options: [
            { label: 'Weight', value: 0},
            { label: 45, value: 45},
            { label: 50, value: 50},
            { label: 55, value: 55},
            { label: 60, value: 60},
            { label: 65, value: 65},
            { label: 70, value: 70},
            { label: 75, value: 75},
            { label: 80, value: 80},
        ],
    }

    const styleDropdown: {name: string, options: Option[]} = {
        name: 'style',
        options: [
            { label: 'Style', value: ''},
            { label: 'Freeride', value: 'freeride'},
            { label: 'Freestyle', value: 'freestyle'},
            { label: 'Piste', value: 'piste'},
            { label: 'All', value: 'all'}
        ],
    }

    const sizeDropdown: {name: string, options: Option[]} = {
        name: 'size',
        options: [
            { label: 'Size', value: 0},
            { label: 140, value: 140},
            { label: 145, value: 145},
            { label: 150, value: 150},
            { label: 155, value: 155},
            { label: 160, value: 160},
            { label: 165, value: 165},
            { label: 170, value: 170},
            { label: 175, value: 175},
            { label: 180, value: 180},
            { label: 185, value: 185},
            { label: 190, value: 190},
        ],
    }

    const handleChange = (e: ChangeEvent<any>) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };

    return (
        <form action="" className="w-full h-full flex items-center justify-around">
            <input type="text" name="addresse" placeholder="Search by address" className="w-80 py-1 px-4 rounded-lg" onChange={handleChange}/>
            <DropdownSelect name={weightDropdown.name} optionsArray={weightDropdown.options}/>
            <DropdownSelect name={styleDropdown.name} optionsArray={styleDropdown.options}/>
            <DropdownSelect name={sizeDropdown.name} optionsArray={sizeDropdown.options}/>
        </form>
    );
};