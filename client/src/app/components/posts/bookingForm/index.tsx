import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BookingService } from "@/setup/services/booking.service";
import { Button } from "@/app/components/atoms/button";
import { FormInput } from "../../atoms/input";

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
            <FormInput type={"tel"} name={"phoneNumber"} placeholder={"phone number"} onChange={() => handleChange}/>
             <Button label="Reserved" px="px-8" py="py-2" background_color="bg-indigo-700"/>
        </form>
    );
};