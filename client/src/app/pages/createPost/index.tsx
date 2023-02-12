import { FC } from 'react';

import { CreatePostForm } from '@/app/components/organisms/createPostForm';

export const CreatePostPage: FC = () => {
	return (
			<div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
				<h1 className='text-center font-semibold text-4xl mb-8'>Create post</h1>
				<CreatePostForm/>
			</div>
	);
};
