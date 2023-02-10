import { FC } from "react";

export const BookingForm: FC = () => {
    return (
        <form action="">
             <input type="tel" name="phoneNumber" className="border border-solid border-gray-400 px-4 py-1.5 mr-4 rounded-md" placeholder="phone number" />
             <input type="submit" className="px-8 py-2 rounded-lg bg-indigo-700 text-white font-bold" value="Reserved" />
        </form>
    );
};