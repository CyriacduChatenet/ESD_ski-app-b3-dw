import { ChangeEvent, FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';
import { Button } from '@/app/components/atoms/button';
import { ShopService } from '@/setup/services/shop.service';
import { UserService } from '@/setup/services/user.service';

export const ShopForm: FC = () => {
	const navigate = useNavigate();
	const params = useParams();

    const [credentials, setCredentials] = useState({
		user: params.id,
	});

	const shopService = new ShopService();
	const userService = new UserService();

    const handleChange = (e?: ChangeEvent<any>) => {
        const { name, value } = e?.target;
        setCredentials({...credentials, [name]: value});
    }; 

	const handleSubmit = async (e?: ChangeEvent<any>) => {
		e?.preventDefault();
        const shop = await shopService.create(`${import.meta.env.VITE_APP_API_URL}/shops/`, credentials);
		await userService.updateOne(`${import.meta.env.VITE_APP_API_URL}/user/${params.id}`, { shop: shop._id})
        navigate('/signin');
	};
	return (
		<form
			action=""
			className="flex flex-col items-center justify-around h-20 mt-16"
			onSubmit={handleSubmit}
		>
			<FormInputLabel label={'Name'}>
				<FormInput type={'text'} name={'name'} placeholder={'Name'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Addresse'}>
				<FormInput type={'text'} name={'addresse'} placeholder={'Addresse'} onChange={handleChange} />
			</FormInputLabel>
			<Button label={'Create shop'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'} my={'my-8'} />
		</form>
	);
};
