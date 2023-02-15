import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "@/app/components/atoms/input";
import { FormInputLabel } from "@/app/components/molecules/formInputLabel";
import { Button } from "@/app/components/atoms/button";
import AuthService from "@/setup/services/auth.service";

export const SigninForm: FC = () => {
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
		authService.signin(credentials);
		navigate('/dashboard');
	};
    return (
        <form action="" className="flex flex-col items-center justify-around h-52" onSubmit={(e) => handleSubmit(e)}>
            <FormInputLabel label={"Email"}>
                <FormInput type={"email"} name={"email"} placeholder={"Email"} onChange={handleChange}/>
            </FormInputLabel>
            <FormInputLabel label={"Password"}>
                <FormInput type={"password"} name={"password"} placeholder={"Password"} onChange={handleChange}/>
            </FormInputLabel>
            <Button label={"Signin"} background_color={"bg-indigo-700"} py={"py-2"} px={"px-8"}/>
        </form>
    );
};