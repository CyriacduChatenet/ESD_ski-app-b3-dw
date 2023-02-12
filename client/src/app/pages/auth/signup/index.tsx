import { SignupForm } from "@/app/components/organisms/signupForm";
import { FC } from "react";
import { Link } from "react-router-dom";

export const SignupPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
        <h1 className='text-center font-semibold text-4xl mb-8'>Signup</h1>
        <SignupForm/>
        <p className='mt-4'>i have an account : <Link className='text-indigo-700 font-semibold' to={'/signin'}>Signin</Link></p>
    </div>
    );
};