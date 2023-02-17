import { useFetch as useFetchHook } from '@/setup/hooks/useFetch.hook';

class AuthService {
	useFetch = new useFetchHook();

	async signin(credentials: Object) {
		fetch(`${import.meta.env.VITE_APP_API_URL}/auth/signin`, {
		    method: 'POST',
		    headers: { 'Content-Type' : 'application/json'},
		    body: JSON.stringify(credentials)
		}).then(res => res.json())
		.then(res => {
		    localStorage.setItem('acessToken', res.acessToken);
		})
		.catch(err => console.error(err))
	}

	async signup(credentials: Object) {
		fetch(`${import.meta.env.VITE_APP_API_URL}/auth/signup`, {
		    method: 'POST',
		    headers: { 'Content-Type' : 'application/json'},
		    body: JSON.stringify(credentials)
		}).then(res => res.json())
		.catch(err => console.error(err))
	}

	async forgotPassword(credentials: Object) {
		fetch(`${import.meta.env.VITE_APP_API_URL}/auth/forgot-password`, {
		    method: 'POST',
		    headers: { 'Content-Type' : 'application/json'},
		    body: JSON.stringify(credentials)
		}).then(res => res.json())
		.then(res => {
		    localStorage.setItem('reset_token', res.reset_token);
		})
		.catch(err => console.error(err))
	}

	async resetPassword(credentials: any, resetToken: string) {
		const tokenInDB = await this.useFetch.get(`${import.meta.env.VITE_APP_API_URL}/auth/reset-token-password/${resetToken}`)
		this.useFetch.patch(`${import.meta.env.VITE_APP_API_URL}/user/${tokenInDB.user._id}`, credentials, String(localStorage.getItem('acessToken')))
	}
}

export default AuthService;
