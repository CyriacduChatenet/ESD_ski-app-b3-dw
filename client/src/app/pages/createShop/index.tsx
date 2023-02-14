import { FC } from 'react';

import { ShopForm } from '@/app/components/organisms/shopForm';
import { ShopService } from '@/setup/services/shop.service';
import { useNavigate, useParams } from 'react-router-dom';

export const CreateShopPage: FC = () => {
	const navigate = useNavigate();
    const params = useParams();
	const shopService = new ShopService();

	const handleSubmit = (credentials: Object): void => {
        shopService.create(`${import.meta.env.VITE_APP_API_URL}/shops/`, credentials)
        navigate('/dashboard');
	};

	return (
			<div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
				<h1 className='text-center font-semibold text-4xl mb-8'>Create shop</h1>
				<ShopForm handleSubmit={handleSubmit}/>
			</div>
	);
};
