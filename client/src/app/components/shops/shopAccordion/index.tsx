import { Dispatch, FC, SetStateAction } from 'react';

import { Post } from '@/setup/types/post.type';
import { DashboardPostList } from '@/app/components/shops/shopList/postList';
import { ShopService } from '@/setup/services/shop.service';
import { Shop } from '@/setup/types/shop.type';
import useShop from '@/setup/contexts/shop.context';

interface IProps {
    id: string;
	name: string;
	addresse: string;
	posts: Post[];
}

export const ShopAccordion: FC<IProps> = ({ name, addresse, posts, id }) => {
    const { data, setData } = useShop();
    const shopService = new ShopService();

    const handleDelete = () => {
        shopService.deleteOne(`${import.meta.env.VITE_APP_API_URL}/shops`, id);
        setData(data.filter((shop: Shop) => shop._id !== id));
    };
	return (
		<details className="bg-indigo-100 my-4 px-5 py-4 rounded-lg">
			<summary className="bg-indigo-100">
				<b>{name}</b> - {addresse}
				<button className="bg-green-500 text-white px-4 py-1 text-sm rounded-lg font-bold" style={{marginLeft: '60rem'}}>Create</button>
				<button className="bg-blue-500 text-white px-4 py-1 text-sm rounded-lg font-bold ml-8">Edit</button>
				<button className="bg-red-500 text-white px-4 py-1 text-sm rounded-lg font-bold ml-8" onClick={() => handleDelete()}>Delete</button>
			</summary>
			<DashboardPostList posts={posts} />
		</details>
	);
};
