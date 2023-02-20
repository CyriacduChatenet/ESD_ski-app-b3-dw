import { FC, useEffect, useState } from 'react';

import { ShopAccordion } from '@/app/components/molecules/shopAccordion';
import useShop from '@/setup/contexts/shop.context';
import TokenService from '@/setup/services/token.service';
import jwtDecode from 'jwt-decode';
import { UserService } from '@/setup/services/user.service';

export const ShopList: FC = () => {
    const { data, setData } = useShop();
	const [shop, setShop] = useState<any>({});
	const [isLoading, setIsLoading] = useState(false);

	const tokenService = new TokenService();
	const userService = new UserService();
	useEffect(() => {
		const fetch = async () => {
			const token = tokenService.getLocalAccessToken();
			const decodedToken = jwtDecode(String(token));
			const nowUser = await userService.findOne(`${import.meta.env.VITE_APP_API_URL}/user/email/${decodedToken.email}`);
			setShop(nowUser.shop);
			setIsLoading(true);
		};
		fetch();
	}, []);
	return (
		<>
		{isLoading ? <ShopAccordion name={shop.name} addresse={shop.addresse} posts={shop.posts} id={shop._id} /> : null}
		</>
	);
};
