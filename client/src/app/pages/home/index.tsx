import { FC } from 'react';

import { PostList } from '@/app/components/posts';
import { UtilityBar } from '@/app/components/utilityBar';

export const HomePage: FC = () => {
	return (
		<>
			<UtilityBar />
			<div className="px-40">
				<PostList />
			</div>
		</>
	);
};
