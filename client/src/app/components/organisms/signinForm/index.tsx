import { FC } from "react";

import { FormInput } from "@/app/components/atoms/input";
import { FormInputLabel } from "@/app/components/molecules/formInputLabel";
import { Button } from "@/app/components/atoms/button";

export const SigninForm: FC = () => {
    return (
        <form action="" className="flex flex-col items-center justify-around h-52">
            <FormInputLabel label={"Email"}>
                <FormInput type={"email"} name={"email"} placeholder={"Email"}/>
            </FormInputLabel>
            <FormInputLabel label={"Password"}>
                <FormInput type={"password"} name={"password"} placeholder={"Password"}/>
            </FormInputLabel>
            <Button label={"Signin"} background_color={"bg-indigo-700"} py={"py-2"} px={"px-8"}/>
        </form>
    );
};