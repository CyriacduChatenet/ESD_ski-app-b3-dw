import { FC } from 'react';

import { PostList } from '@/app/components/posts';

export const HomePage: FC = () => {
	return (
		<div className="px-40">
			<PostList />
		</div>
	);
};
