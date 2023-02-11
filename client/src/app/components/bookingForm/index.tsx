import { FC, useState } from "react";

import { BookingService } from "@/setup/services/booking.service";

interface IProps {
    post_id: string;
}

export const BookingForm: FC<IProps> = ({ post_id }) => {
    const [credentials, setCrdentials] = useState({
        post:[`${post_id}`],
        available: false,
    });

    const bookingService = new BookingService();

    const handleChange = (e: any) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCrdentials({...credentials, [name]: value});
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        bookingService.createAndUpdate(`${import.meta.env.VITE_APP_API_URL}/bookings`, `${import.meta.env.VITE_APP_API_URL}/posts/${post_id}`, credentials);
    };

    return (
        <form action=""  onSubmit={handleSubmit}>
             <input type="tel" name="phoneNumber" className="border border-solid border-gray-400 px-4 py-1.5 mr-4 rounded-md" placeholder="phone number" onChange={handleChange} />
             <input type="submit" className="px-8 py-2 rounded-lg bg-indigo-700 text-white font-bold" value="Reserved" />
        </form>
    );
};