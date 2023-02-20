import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ForgotPasswordPage } from '@/app/pages/auth/forgotPassword';
import { ResetPasswordPage } from '@/app/pages/auth/resetPassword';
import { SigninPage } from '@/app/pages/auth/signin';
import { SignupPage } from '@/app/pages/auth/signup';
import { HomePage } from '@/app/pages/home';
import { PostPage } from '@/app/pages/post';
import { CreateShopPage } from '@/app/pages/createShop';

export const PublicRouter: FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<HomePage />} />
			<Route path={'/signin'} element={<SigninPage />} />
			<Route path={'/signup'} element={<SignupPage />} />
			<Route path={'/forgot-password'} element={<ForgotPasswordPage />} />
			<Route path={'/reset-password/:resetToken'} element={<ResetPasswordPage />} />
			<Route path={'/post/:id'} element={<PostPage />} />
			<Route path="/shop/create-shop/:id" element={<CreateShopPage />} />
		</Routes>
	);
};
