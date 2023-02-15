import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/button';
import { FormInput } from '../../atoms/input';
import { FormInputLabel } from '../../molecules/formInputLabel';
import { SignupForm } from './index';

export default {
	title: 'organismes/SignupForm',
	component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

export const Primary: ComponentStory<typeof SignupForm> = () => (
    <form action="" className="flex flex-col items-center justify-around h-96">
    <FormInputLabel label={'Username'}>
        <FormInput type={'text'} name={'username'} placeholder={'Username'} />
    </FormInputLabel>
    <FormInputLabel label={'Email'}>
        <FormInput type={'email'} name={'email'} placeholder={'Email'} />
    </FormInputLabel>
    <FormInputLabel label={'Password'}>
        <FormInput type={'password'} name={'password'} placeholder={'Password'} />
    </FormInputLabel>
    <FormInputLabel label={'Confirm password'}>
        <FormInput type={'password'} name={''} placeholder={'Confirm password'} />
    </FormInputLabel>
    <Button label={'Signup'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'} />
</form>
);
