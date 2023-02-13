import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '@/setup/router/private/privateRoute';
import { DashboardPage } from '@/app/pages/dashboard';
import { CreatePostPage } from '@/app/pages/createPost';
import { CreateShopPage } from '@/app/pages/createShop';

export const PrivateRouter: FC = () => {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/shop/create-post/:id" element={<CreatePostPage />} />
				<Route path="/shop/create-shop" element={<CreateShopPage />} />
			</Route>
		</Routes>
	);
};
