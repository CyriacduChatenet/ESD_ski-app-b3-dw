import { SigninForm } from '@/app/components/organisms/signinForm';
import { SignupForm } from '@/app/components/organisms/signupForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignupPage } from '.';

export default {
	title: 'pages/Signup',
	component: SignupPage,
} as ComponentMeta<typeof SignupPage>;

export const Primary: ComponentStory<typeof SignupPage> = () => (
    <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
    <h1 className='text-center font-semibold text-4xl mb-8'>Signup</h1>
    <SignupForm/>
    <p className='mt-4'>i have an account : <p className='text-indigo-700 font-semibold'>Signin</p></p>
</div>
);
