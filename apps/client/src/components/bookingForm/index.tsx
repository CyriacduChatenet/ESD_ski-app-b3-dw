import { Dispatch, FC, SetStateAction, useState } from "react";

interface IProps {
  setBookings: Dispatch<SetStateAction<any[]>>;
  setAvailable : Dispatch<SetStateAction<boolean>>;
  bookings: any[]
  id: string
}

const BookingForm: FC<IProps> = ({ setBookings, bookings, id }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFetch = () => {
    setBookings(prevBookings => [...prevBookings, {phoneNumber, post: [id]}])
    fetch('http://localhost:3000/api/bookings', {
      headers: { 'Content-type' : 'application/json' },
      method: 'POST',
      body: JSON.stringify(bookings)
    })

    fetch(`http://localhost:3000/api/posts/${id}`, {
      headers: { 'Content-type' : 'application/json' },
      method: 'PUT',
      body: JSON.stringify({isAvalaible: false})
    })
  };

    return (
        <form action="" className="w-full flex items-center justify-center mt-4" onSubmit={(e) => {
          e.preventDefault();
          handleFetch();
        }}>
        <input type="tel" name="phoneNumber" id="" placeholder="Enter your phone number" onChange={(e) => setPhoneNumber(e.target.value)} className="px-4 py-2 rounded-md w-60 mr-4 border-1 border solid border-gray" />
        <input type="submit" value="Booking" className="px-10 py-2 ml-4 font-bold bg-primary-default text-white rounded-md" />
      </form>
    );
};

export default BookingForm;