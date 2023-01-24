import Button from "@/components/button";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductPage: FC = () => {
    const [data, setData] = useState([]);

    const handleFetchData = () => {
        fetch('http://localhost:3000/api/posts/63cfa0b698bd576d01a3a6f7')
        .then(response => response.json())
        .then(response => setData(response))
    };

    useEffect(() => {
        handleFetchData();
    }, [])
  return (
    <div className="px-28 pt-8">
      <Link to={'/'}>
        <Button label="Return" />
      </Link>
      {data.map((product: any, index) => <div key={index}>
        <p>{product.title}</p>
      </div>)}
    </div>
  );
};

export default ProductPage;
