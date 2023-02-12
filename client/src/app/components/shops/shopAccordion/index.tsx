import { Dispatch, FC, SetStateAction } from 'react';

import { Post } from '@/setup/types/post.type';
import { DashboardPostList } from '@/app/components/shops/shopList/postList';
import { ShopService } from '@/setup/services/shop.service';
import { Shop } from '@/setup/types/shop.type';
import useShop from '@/setup/contexts/shop.context';
import { Button } from '../../button';

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
				<div style={{marginLeft: '60rem'}}>
				<Button label='Create' background_color='bg-green-500' px='px-4' py='py-1' />
				<Button label='Edit' background_color='bg-blue-500' px='px-4' py='py-1' ml='ml-8' />
				<Button label='Delete' background_color='bg-red-500' px='px-4' py='py-1' ml='ml-8' onClick={() => handleDelete()} />
				</div>
			</summary>
			<DashboardPostList posts={posts} />
		</details>
	);
};