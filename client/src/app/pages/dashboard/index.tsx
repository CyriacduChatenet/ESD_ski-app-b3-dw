import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShopList } from '@/app/components/organisms/shopList';
import { Button } from '@/app/components/atoms/button';
import TokenService from '@/setup/services/token.service';

export const DashboardPage: FC = () => {
	const tokenService = new TokenService();
	const navigate = useNavigate();
	
	return (
		<div className="w-full px-20 py-4">
			<div className="w-full flex justify-between mb-12 mt-4">
				<h1 className="text-3xl font-bold">Shops</h1>
				<div onClick={() => {
					tokenService.removeAccessToken()
					navigate('/signin')
				}}>
					<Button label="Logout" px="px-8" py="py-2 " background_color="bg-indigo-700" />
				</div>
			</div>
			<ShopList />
		</div>
	);
};