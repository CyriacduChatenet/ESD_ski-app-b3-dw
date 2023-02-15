import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '@/setup/services/auth.service';
import { Button } from '@/app/components/atoms/button';
import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';

export const SignupForm: FC = () => {
	const [credentials, setCredentials] = useState({});
	const navigate = useNavigate()

	const authService = new AuthService();

	const handleChange = (e?: ChangeEvent<any>) => {
		e?.preventDefault();
		const { name, value } = e?.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const handleSubmit = (e:FormEvent) => {
		e.preventDefault();
		authService.signup(credentials);
		navigate('/signin')
	};
	return (
		<form action="" className="flex flex-col items-center justify-around h-96" onSubmit={(e) => handleSubmit(e)}>
			<FormInputLabel label={'Username'}>
				<FormInput type={'text'} name={'username'} placeholder={'Username'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Email'}>
				<FormInput type={'email'} name={'email'} placeholder={'Email'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Password'}>
				<FormInput type={'password'} name={'password'} placeholder={'Password'} onChange={handleChange} />
			</FormInputLabel>
			<FormInputLabel label={'Confirm password'}>
				<FormInput type={'password'} name={''} placeholder={'Confirm password'} />
			</FormInputLabel>
				<Button label={'Signup'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'} />
		</form>
	);
};
