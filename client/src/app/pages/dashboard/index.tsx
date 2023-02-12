import { FC } from 'react';

import { ShopList } from '@/app/components/shops/shopList';
import { Button } from '@/app/components/button';

export const DashboardPage: FC = () => {
	return (
		<div className="w-full px-20 py-4">
			<div className='w-full flex justify-between mb-12 mt-4'>
				<h1 className="text-3xl font-bold">Shops</h1>
				<Button label="Add shop" px="px-8" py="py-2 " background_color='bg-indigo-700' />
			</div>
			<ShopList />
		</div>
	);
};
