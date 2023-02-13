import { FC } from 'react';

import { ShopList } from '@/app/components/organisms/shopList';
import { Button } from '@/app/components/atoms/button';
import { Link } from 'react-router-dom';

export const DashboardPage: FC = () => {
	return (
		<div className="w-full px-20 py-4">
			<div className='w-full flex justify-between mb-12 mt-4'>
				<h1 className="text-3xl font-bold">Shops</h1>
				<Link to={'/shop/create-shop'}><Button label="Add shop" px="px-8" py="py-2 " background_color='bg-indigo-700' /></Link>
			</div>
			<ShopList />
		</div>
	);
};
