import { FC } from "react";

const BookingForm: FC = () => {
    return (
        <form action="" className="w-full flex items-center justify-center mt-4">
        <input type="tel" name="" id="" placeholder="Enter your phone number" className="px-4 py-2 rounded-md w-60 mr-4 border-1 border solid border-gray" />
        <input type="submit" value="Booking" className="px-10 py-2 ml-4 font-bold bg-primary-default text-white rounded-md" />
      </form>
    );
};

export default BookingForm;