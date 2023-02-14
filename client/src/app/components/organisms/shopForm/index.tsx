import { ChangeEvent, FC, useState } from 'react';

import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';
import { Button } from '@/app/components/atoms/button';

interface IProps {
	handleSubmit: (credentials: Object) => void;
}

export const ShopForm: FC<IProps> = ({ handleSubmit }) => {

    const [credentials, setCredentials] = useState({});

    const handleChange = (e?: ChangeEvent<any>) => {
        const { name, value } = e?.target;
        setCredentials({...credentials, [name]: value});
    }; 
	return (
		<form
			action=""
			className="flex flex-col items-center justify-around h-20 mt-16"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(credentials);
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
