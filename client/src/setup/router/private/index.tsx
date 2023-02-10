import { FC } from 'react';
import { Route } from 'react-router-dom';

import { DashboardPage } from '@/app/pages/dashboard';

interface IProps {
	path: string;
	element: JSX.Element;
};

export const PrivateRoute: FC<IProps> = ({path, element}) => {
	return (
		<Route path={path} element={element} />
	);
};
