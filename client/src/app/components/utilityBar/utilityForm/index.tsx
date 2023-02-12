import { ChangeEvent, FC } from "react";

import useFilter from "@/setup/contexts/filter.context";

export const UtilityForm: FC = () => {
    const { credentials, setCredentials } = useFilter();

    const handleChange = (e: ChangeEvent<any>) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };

    return (
        <form action="" className="w-full h-full flex items-center justify-around">
            <input type="text" name="addresse" placeholder="Search by address" className="w-80 py-1 px-4 rounded-lg" onChange={handleChange}/>
            <select name="weight" className="py-1 px-4 rounded-lg" onChange={handleChange}>
                <option value="">Weight</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
                <option value={55}>55</option>
                <option value={60}>60</option>
                <option value={65}>65</option>
                <option value={70}>70</option>
                <option value={75}>75</option>
                <option value={80}>80</option>
            </select>
            <select name="style" className="py-1 px-4 rounded-lg" onChange={handleChange}>
                <option value="">Style</option>
                <option value="freeride">Freeride</option>
                <option value="freestyle">freestyle</option>
                <option value="piste">Piste</option>
                <option value="all">All</option>
            </select>
            <select name="size" className="py-1 px-4 rounded-lg" onChange={handleChange}>
                <option value="">Size</option>
                <option value={140}>140</option>
                <option value={145}>145</option>
                <option value={150}>150</option>
                <option value={155}>155</option>
                <option value={160}>160</option>
                <option value={165}>165</option>
                <option value={170}>170</option>
                <option value={175}>175</option>
                <option value={180}>180</option>
                <option value={185}>185</option>
                <option value={190}>190</option>
            </select>
        </form>
    );
};