import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BookingService } from "@/setup/services/booking.service";

interface IProps {
    post_id: string;
}

export const BookingForm: FC<IProps> = ({ post_id }) => {
    const [credentials, setCredentials] = useState({
        post:[`${post_id}`],
        available: false,
    });

    const navigate = useNavigate();

    const bookingService = new BookingService();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        bookingService.createAndUpdate(`${import.meta.env.VITE_APP_API_URL}/bookings`, `${import.meta.env.VITE_APP_API_URL}/posts/${post_id}`, credentials);
        navigate('/');
    };

    return (
        <form action=""  onSubmit={handleSubmit}>
             <input type="tel" name="phoneNumber" className="border border-solid border-gray-400 px-4 py-1.5 mr-4 rounded-md" placeholder="phone number" onChange={handleChange} />
             <input type="submit" className="px-8 py-2 rounded-lg bg-indigo-700 text-white font-bold" value="Reserved" />
        </form>
    );
};