import { FC } from "react";
import { Link } from "react-router-dom";

import { ResetPasswordForm } from "@/app/components/organisms/resetPasswordForm";

export const ResetPasswordPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
        <h1 className='text-center font-semibold text-4xl mb-8'>Reset password</h1>
        <ResetPasswordForm/>
        <p className='mt-4'>i have an account : <Link className='text-indigo-700 font-semibold' to={'/signin'}>Signin</Link></p>
    </div>
    );
};