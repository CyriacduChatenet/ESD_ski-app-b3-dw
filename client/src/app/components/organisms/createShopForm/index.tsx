import { ChangeEvent, FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';
import { Button } from '@/app/components/atoms/button';
import { ShopService } from '@/setup/services/shop.service';

export const CreateShopForm: FC = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [credentials, setCredentials] = useState({});

    const shopService = new ShopService();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };

	const handleSubmit = () => {
        shopService.create(`${import.meta.env.VITE_APP_API_URL}/shops/`, credentials)
        navigate('/dashboard');
	};
	return (
		<form
			action=""
			className="flex flex-col items-center justify-around h-20 mt-16"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
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
