import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '@/setup/router/private/privateRoute';
import { DashboardPage } from '@/app/pages/dashboard';
import { CreatePostPage } from '@/app/pages/createPost';
import { UpdateShopPage } from '@/app/pages/updateShop';
import { UpdatePostPage } from '@/app/pages/updatePost';

export const PrivateRouter: FC = () => {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/shop/create-post/:id" element={<CreatePostPage />} />
				<Route path="/shop/edit-shop/:id" element={<UpdateShopPage />} />
				<Route path="/post/edit-post/:id" element={<UpdatePostPage />} />
			</Route>
		</Routes>
	);
};