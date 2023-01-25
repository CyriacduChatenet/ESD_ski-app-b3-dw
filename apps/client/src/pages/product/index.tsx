import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@/components/button";
import useInputs from '@/contexts/inputs.context';

const ProductPage: FC = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  const { addresse } = useInputs()

  const handleFetchData = () => {
    fetch("http://localhost:3000/api/posts/63cfa0b698bd576d01a3a6f7")
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    handleFetchData();
    console.log(params)
  }, []);
  return (
    <div className="px-28 pt-8 grid grid-cols-12 grid-rows-6 grid-flow-col gap-8 h-screen bg-lightGray">
      <section className="col-span-12">
        <Link to={"/"}>
          <Button label="Return" />
        </Link>
      </section>
      <aside className=" col-span-4 row-span-4">
        <form action="" className="flex flex-col items-center justify-around h-1/2">
          <input type="text" placeholder="Enter your name" className="w-full px-10 rounded-md py-2 border-1 border solid border-gray" />
          <textarea name="" id="" cols={30} rows={5} placeholder="Enter comment" className="w-full px-10 rounded-md py-2 border solid border-gray"></textarea>
          <input type="submit" value="Add comment" className="px-20 py-2 bg-primary-default text-white font-bold rounded-md" />
        </form>
        <div className="h-1/2 overflow-y-scroll">
          {
            data.map((product: any, index) => <div key={index}>
            {
              product.comments.filter((comment: any) => comment.post[0] === params.id).map((comment: any, index: number) => <article key={index} className="flex justify-between w-full my-2 py-2 pl-4 bg-white">
                <div className="w-9/12">
                <p><b>{comment.username}</b></p>
                <p>{comment.description}</p>
                </div>
                <div className="w-2/12">
                  <p> stars : {comment.stars}</p>
                </div>
              </article>)
            }
            </div>)
          }
        </div>
      </aside>
      <main className="col-span-8 row-span-4 bg-white">
      {data.map((product: any, index) => <div key={index}>
        <div className="w-full h-72 rounded-md" style={{backgroundImage: `url(${product.image_url})`, backgroundPositionY: '20%', backgroundSize: 'cover'}}></div>
        <h1 className="mt-4 ml-4 text-xl">{product.title} de {product.style} - {product.weight} kg - {product.size} cm - <span className="text-primary-default"><b>{product.price}€ / j</b></span></h1>
        <p className="pl-4 pt-4">{addresse}</p>
        <p className="pl-4 pt-4">{product.description}</p>
      </div>)}
      <form action="" className="w-full flex items-center justify-center mt-4">
        <input type="tel" name="" id="" placeholder="Enter your phone number" className="px-4 py-2 rounded-md w-60 mr-4 border-1 border solid border-gray" />
        <input type="submit" value="Booking" className="px-10 py-2 ml-4 font-bold bg-primary-default text-white rounded-md" />
      </form>
      </main>
    </div>
  );
};

export default ProductPage;
