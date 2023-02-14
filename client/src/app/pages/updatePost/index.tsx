import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PostForm } from '@/app/components/organisms/postForm';
import { PostService } from '@/setup/services/post.service';

export const UpdatePostPage: FC = () => {
	const navigate = useNavigate();
    const params = useParams();
	const postService = new PostService();

	const handleSubmit = (credentials: Object): void => {
        postService.updateOne(`${import.meta.env.VITE_APP_API_URL}/posts${params.id}`, credentials)
        navigate('/dashboard');
	};
	return (
			<div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
				<h1 className='text-center font-semibold text-4xl mb-8'>Update post</h1>
				<PostForm handleSubmit={handleSubmit}/>
			</div>
	);
};
