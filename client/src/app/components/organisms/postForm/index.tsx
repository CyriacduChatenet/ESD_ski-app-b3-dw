import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';
import { Button } from '@/app/components/atoms/button';
import { PostService } from '@/setup/services/post.service';
import { ShopService } from '@/setup/services/shop.service';


export const PostForm: FC = () => {
    const params = useParams();
	const navigate = useNavigate();

	const postService = new PostService();
	const shopService = new ShopService();

    const [credentials, setCredentials] = useState({
        available: false,
        shop: [params.id]
    });

    const handleChange = (e?: ChangeEvent<any>) => {
        e?.preventDefault();
        const { name, value } = e?.target;
        setCredentials({...credentials, [name]: value});
    };

	const handleSubmit = async (e?: FormEvent<any>) => {
		e?.preventDefault();
        postService.createAndUpdate(`${import.meta.env.VITE_APP_API_URL}/shops/${params.id}`, `${import.meta.env.VITE_APP_API_URL}/posts`, credentials)
        navigate('/dashboard');
	};

	return (
		<form
			action=""
			className="flex flex-col items-center justify-around h-96 mt-16"
			onSubmit={handleSubmit}
		>
			<FormInputLabel label={'Title'}>
				<FormInput type={'text'} name={'title'} placeholder={'Title'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Image url'}>
				<FormInput type={'text'} name={'imageUrl'} placeholder={'Image url'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Weight'}>
				<FormInput type={'number'} name={'weight'} placeholder={'Weight'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Size'}>
				<FormInput type={'number'} name={'size'} placeholder={'Size'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Style'}>
				<FormInput type={'text'} name={'style'} placeholder={'Style'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Price'}>
				<FormInput type={'number'} name={'price'} placeholder={'Price'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Description'}>
				<FormInput type={'text'} name={'description'} placeholder={'Description'} onChange={handleChange} />
			</FormInputLabel>
			<Button label={'create post'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'} my={'my-8'} />
		</form>
	);
};
