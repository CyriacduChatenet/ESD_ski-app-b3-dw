import { FC } from 'react';

import { PostList } from '@/app/components/organisms/postsList';
import { UtilityBar } from '@/app/components/organisms/utilityBar';

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
