import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Post } from '@/setup/types/post.type';
import { DashboardPostList } from '@/app/components/organisms/dashboardPostList';
import { ShopService } from '@/setup/services/shop.service';
import { Shop } from '@/setup/types/shop.type';
import useShop from '@/setup/contexts/shop.context';
import { Button } from '@/app/components/atoms/button';

interface IProps {
    id: string;
	name: string;
	addresse: string;
	posts: Post[];
}

export const ShopAccordion: FC<IProps> = ({ name, addresse, posts, id }) => {
    const { data, setData } = useShop();
	const navigate = useNavigate();
    const shopService = new ShopService();

	const handleUpdate = (id: string) => {
		navigate(`/shop/edit-shop/${id}`)
	};

    const handleDelete = () => {
        shopService.deleteOne(`${import.meta.env.VITE_APP_API_URL}/shops`, id);
        setData(data.filter((shop: Shop) => shop._id !== id));
    };
	return (
		<details className="bg-indigo-100 my-4 px-5 py-4 rounded-lg">
			<summary className="bg-indigo-100">
				<b>{name}</b> - {addresse}
				<div style={{marginLeft: '60rem'}}>
				<Button label='Create' background_color='bg-green-500' px='px-4' py='py-1' onClick={() => navigate(`/shop/create-post/${id}`)} />
				<Button label='Edit' background_color='bg-blue-500' px='px-4' py='py-1' ml='ml-8' onClick={() => handleUpdate(id)} />
				<Button label='Delete' background_color='bg-red-500' px='px-4' py='py-1' ml='ml-8' onClick={() => handleDelete()} />
				</div>
			</summary>
			<DashboardPostList posts={posts} />
		</details>
	);
};
