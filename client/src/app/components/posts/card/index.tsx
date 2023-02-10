import { FC } from 'react';

interface IProps {
	address: string;
	thumbnail_url: string;
    style: string;
    size: number;
    weight: number;
    price: number;
    title: string;
}

export const PostCard: FC<IProps> = ({ address, thumbnail_url, style, size, weight, price, title }) => {
	return (
		<article className="grid grid-cols-12 gap-4 w-full h-28 px-8 py-4 my-4 rounded-lg bg-indigo-100">
			<img src={thumbnail_url} alt="" className="col-span-2 h-20" />
			<div className="col-span-10 flex flex-col justify-evenly">
				<h3 className="font-bold uppercase">ski {title} - {style} - {size} cm - {weight} kg - <span className='text-indigo-600'>{price}€/jour</span></h3>
				<p>{address}</p>
			</div>
		</article>
	);
};
