import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from '@/setup/router';

import '@/app/styles/index.css';
import { PostContextProvider } from '@/setup/contexts/post.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<PostContextProvider>
			<Router />
		</PostContextProvider>
	</React.StrictMode>
);
