import { FC } from "react";

export const SigninForm: FC = () => {
    return (
        <form action="" className="flex flex-col items-center justify-around h-52">
            <label htmlFor="">
                <p>Email</p>
                <input type="text" name="email" placeholder="Email" className="border border-solid border-gray-400 px-4 py-1.5 rounded-md" />
            </label>
            <label htmlFor="">
                <p>Password</p>
                <input type="password" name="password" placeholder="Password" className="border border-solid border-gray-400 px-4 py-1.5 rounded-md" />
            </label>
            <input type="submit" value="Signin" className="px-8 py-2 w-52 rounded-lg bg-indigo-700 text-white font-bold" />
        </form>
    );
};