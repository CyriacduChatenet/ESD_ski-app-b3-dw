import { FC } from 'react';

import { Button } from '@/app/components/atoms/button';
import { FormInput } from '@/app/components/atoms/input';
import { FormInputLabel } from '@/app/components/molecules/formInputLabel';

export const ForgotPasswordForm: FC = () => {
	return (
		<form action="" className="flex flex-col items-center justify-around h-52">
			<FormInputLabel label={'Email'}>
				<FormInput type={'text'} name={'email'} placeholder={'Email'} />
			</FormInputLabel>
            <Button label={'Forgot password'} background_color={'bg-indigo-700'} py={'py-2'} px={'px-8'}/>
		</form>
	);
};
