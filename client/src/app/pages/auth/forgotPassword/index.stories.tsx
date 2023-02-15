import { ForgotPasswordForm } from '@/app/components/organisms/forgotPasswordForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForgotPasswordPage } from './index';

export default {
	title: 'pages/ForgotPassword',
	component: ForgotPasswordPage,
} as ComponentMeta<typeof ForgotPasswordPage>;

export const Primary: ComponentStory<typeof ForgotPasswordPage> = () => (
    <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
    <h1 className='text-center font-semibold text-4xl mb-8'>Forgot password</h1>
    <ForgotPasswordForm/>
    <p className='mt-4'>i have an account : <span className='text-indigo-700 font-semibold'>Signin</span></p>
</div>
);
