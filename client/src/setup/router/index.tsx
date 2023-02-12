import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '@/app/pages/home';
import { PostPage } from '@/app/pages/post';
import { SigninPage } from '@/app/pages/auth/signin';
import { SignupPage } from '@/app/pages/auth/signup';
import { ForgotPasswordPage } from '@/app/pages/auth/forgotPassword';
import { ResetPasswordPage } from '@/app/pages/auth/resetPassword';
import { Layout } from '@/app/layout';
import { DashboardPage } from '@/app/pages/dashboard';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/signin'} element={<SigninPage />} />
					<Route path={'/signup'} element={<SignupPage />} />
					<Route path={'/forgot-password'} element={<ForgotPasswordPage />} />
					<Route path={'/reset-password'} element={<ResetPasswordPage />} />
					<Route path={'/post/:id'} element={<PostPage />} />
					<Route path={'/dashboard'} element={<DashboardPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
