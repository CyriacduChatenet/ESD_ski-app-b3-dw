import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/button';
import { FormInput } from '../../atoms/input';
import { FormInputLabel } from '../../molecules/formInputLabel';
import { SigninForm } from './index';

export default {
	title: 'organismes/SigninForm',
	component: SigninForm,
} as ComponentMeta<typeof SigninForm>;

export const Primary: ComponentStory<typeof SigninForm> = () => (
	<form action="" className="flex flex-col items-center justify-around h-52">
		<FormInputLabel label={'Email'}>
			<FormInput type={'email'} name={'email'} placeholder={'Email'} />
		</FormInputLabel>
		<FormInputLabel label={'Password'}>
			<FormInput type={'password'} name={'password'} placeholder={'Password'} />
		</FormInputLabel>
			<Button label={'Signin'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'} />
	</form>
);
