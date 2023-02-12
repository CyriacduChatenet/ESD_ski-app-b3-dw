import { FC, useEffect } from 'react';

import { ShopAccordion } from '@/app/components/shops/shopAccordion';
import { ShopService } from '@/setup/services/shop.service';
import { Shop } from '@/setup/types/shop.type';
import useShop from '@/setup/contexts/shop.context';

export const ShopList: FC = () => {
    const { data, setData } = useShop();
	const shopService = new ShopService();
	useEffect(() => {
		const fetch = async () => {
			const response = await shopService.findAll(`${import.meta.env.VITE_APP_API_URL}/shops`);
			setData(response);
		};
		fetch();
	}, []);
	return (
		<>
			{data.map((shop: Shop) => (
				<ShopAccordion key={shop._id} name={shop.name} addresse={shop.addresse} posts={shop.posts} id={shop._id} />
			))}
		</>
	);
};
