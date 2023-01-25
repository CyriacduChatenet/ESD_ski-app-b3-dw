import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@/components/button";
import useInputs from "@/contexts/inputs.context";
import CommentForm from "@/components/commentForm";
import BookingForm from "@/components/bookingForm";
import ProductCard from "@/components/productCard";
import CommentCard from "@/components/commentCard";

const ProductPage: FC = () => {
  const [data, setData] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [available, setAvailable] = useState(true);

  const params = useParams();
  const { addresse } = useInputs();

  const handleFetchData = () => {
    fetch(`http://localhost:3000/api/posts/${params.id}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    handleFetchData();
    data.map((prod: any) => {
      setBookings(prod.bookings);
      setAvailable(prod.isAvailable);
    });
    console.log(data);
  }, []);
  return (
    <div className="px-28 pt-8 grid grid-cols-12 grid-rows-6 grid-flow-col gap-8 h-screen bg-lightGray">
      <section className="col-span-12">
        <Link to={"/"}>
          <Button label="Return" />
        </Link>
      </section>
      <aside className=" col-span-4 row-span-4">
        <CommentForm id={params.id} />
        <div className="h-1/2 overflow-y-scroll">
          {data.map((product: any, index) => (
            <div key={index}>
              {product.comments
                .filter((comment: any) => comment.post[0] === params.id)
                .map((comment: any, index: number) => (
                  <CommentCard
                    key={index}
                    username={comment.username}
                    description={comment.description}
                    stars={comment.stars}
                  />
                ))}
            </div>
          ))}
        </div>
      </aside>
      <main className="col-span-8 row-span-4 bg-white">
        {data.map((product: any, index: number) => (
          <ProductCard
            key={index}
            image_url={product.image_url}
            title={product.title}
            style={product.style}
            size={product.size}
            weight={product.weight}
            price={product.price}
            addresse={addresse}
            description={product.description}
          />
        ))}
        <BookingForm
          setBookings={setBookings}
          id={params.id}
          bookings={bookings}
        />
      </main>
    </div>
  );
};

export default ProductPage;
