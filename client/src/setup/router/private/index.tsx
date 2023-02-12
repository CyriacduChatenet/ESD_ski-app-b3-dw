import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '@/setup/router/private/privateRoute';
import { DashboardPage } from '@/app/pages/dashboard';

export const PrivateRouter: FC = () => {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
			</Route>
		</Routes>
	);
};
