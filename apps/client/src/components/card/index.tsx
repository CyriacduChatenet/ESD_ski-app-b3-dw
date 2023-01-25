import { FC } from "react";

interface IProps {
  title: string;
  image_url: string;
  weight: number;
  size: number;
  style: string;
  price: number;
  description: string;
  addresse: string;
  isAvailable: boolean;
}

const Card: FC<IProps> = ({
  title,
  image_url,
  weight,
  size,
  style,
  price,
  description,
  addresse,
  isAvailable,
}) => {
  return (
    <article className="w-full h-36 p-8 my-4 flex items-center rounded-md shadow-md bg-white">
      <div>
        <img src={image_url} alt="" className="w-30 h-24" />
      </div>
      <div className=" flex flex-col pl-8">
        <p>
          <b>
            {title} - {style} - {size}cm - {weight}kg -{" "}
            <span className="text-primary-default">{price}€ /j</span>{" "}
            {isAvailable ? (
              <span className="px-10 text-green">Disponible</span>
            ) : (
              <span className="px-10 text-red">Rupture de stock</span>
            )}
          </b>
        </p>
        <p>{addresse}</p>
      </div>
    </article>
  );
};

export default Card;
