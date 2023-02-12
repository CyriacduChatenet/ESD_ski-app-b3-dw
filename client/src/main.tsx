import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from '@/setup/router';

import '@/app/styles/index.css';
import { PostContextProvider } from '@/setup/contexts/post.context';
import { FilterContextProvider } from './setup/contexts/filter.context';
import { ShopContextProvider } from './setup/contexts/shop.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<FilterContextProvider>
			<PostContextProvider>
				<ShopContextProvider>
					<Router />
				</ShopContextProvider>
			</PostContextProvider>
		</FilterContextProvider>
	</React.StrictMode>
);
