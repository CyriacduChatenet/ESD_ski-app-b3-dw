import { SigninForm } from '@/app/components/organisms/signinForm';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const SigninPage: FC = () => {
	return (
			<div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
				<h1 className='text-center font-semibold text-4xl mb-8'>Signin</h1>
				<SigninForm/>
				<p className='mt-4'>no account : <Link className='text-indigo-700 font-semibold' to={'/signup'}>Signup</Link></p>
				<Link className='text-indigo-700 font-semibold mt-4' to={'/forgot-password'}>Forgot password</Link>
			</div>
	);
};
