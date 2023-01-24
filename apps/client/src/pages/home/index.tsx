import { FC, useEffect, useState } from "react";

import UtilityBar from "@/components/utilityBar";
import Card from "@/components/card";
import UseInputs from "@/contexts/inputs.context";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  const [data, setData] = useState([]);

  const { addresse, size, weight, style } = UseInputs();

  const handleFetchData = () => {
    fetch("http://localhost:3000/api/shops")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
        response.map((shop: any) => {
          shop.posts.map((product: any) => {
            console.log(product);
          });
        });
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <UtilityBar />
      <div className="pt-28 px-28">
        {addresse === "" || size === 0 || weight === 0 || style === "" ? (
          <>
            {data.map((shop: any) => (
              <div key={shop._id}>
                {shop.posts.map((post: any) => (
                  <Link to={`/product/${post._id}`} key={post._id}>
                    <Card
                      title={post.title}
                      size={post.size}
                      weight={post.weight}
                      style={post.style}
                      price={post.price}
                      description={post.description}
                      addresse={shop.addresse}
                      image_url={post.image_url}
                    />
                  </Link>
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {data
              .filter((shop: any) => shop.addresse === addresse)
              .map((shop: any) => (
                <div key={shop._id}>
                  {shop.posts
                    .filter(
                      (post: any) =>
                        post.size === size ||
                        post.weight === weight ||
                        post.style === style
                    )
                    .map((post: any) => (
                      <Link to={`/product/${post._id}`} key={post._id}>
                        <Card
                          title={post.title}
                          size={post.size}
                          weight={post.weight}
                          style={post.style}
                          price={post.price}
                          description={post.description}
                          addresse={shop.addresse}
                          image_url={post.image_url}
                        />
                      </Link>
                    ))}
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
