import { FC } from "react";

interface IProps {
    image_url: string;
    title: string;
    style:  string;
    weight: number;
    size: number;
    price: number;
    addresse: string;
    description: string;
}

const ProductCard: FC<IProps> = ({ image_url, title, style, weight, size, price, addresse, description }) => {
    return (
        <div>
        <div className="w-full h-72 rounded-md" style={{backgroundImage: `url(${image_url})`, backgroundPositionY: '20%', backgroundSize: 'cover'}}></div>
        <h1 className="mt-4 ml-4 text-xl">{title} de {style} - {weight} kg - {size} cm - <span className="text-primary-default"><b>{price}€ / j</b></span></h1>
        <p className="pl-4 pt-4">{addresse}</p>
        <p className="pl-4 pt-4">{description}</p>
      </div>
    );
}

export default ProductCard;