import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '@/setup/router/private/privateRoute';
import { DashboardPage } from '@/app/pages/dashboard';
import { CreatePostPage } from '@/app/pages/createPost';

export const PrivateRouter: FC = () => {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/shop/create-post/:id" element={<CreatePostPage />} />
			</Route>
		</Routes>
	);
};
