import { useFetch as useFetchHook } from '@/setup/hooks/useFetch.hook';

class AuthService {
	useFetch = new useFetchHook();

	async signin(credentials: Object) {
		fetch(`http://localhost:4000/auth/signin`, {
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
		.then(res => {
		    localStorage.setItem('acessToken', res.acessToken);
		})
		.catch(err => console.error(err))
	}

	async resetPassword(credentials: Object) {
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
}

export default AuthService;
