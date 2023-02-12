import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { PrivateRouter } from './private';
import { PublicRouter } from './public';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<>
				<PrivateRouter/>
				<PublicRouter/>
				</>
			</Layout>
		</BrowserRouter>
	);
};
