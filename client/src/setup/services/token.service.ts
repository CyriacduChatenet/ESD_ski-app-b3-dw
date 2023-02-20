import jwtDecode from 'jwt-decode';

class TokenService {
    getLocalAccessToken = () => {
        const accessToken = localStorage.getItem('acessToken');
        return accessToken;
    }
    
    isValidToken = (accessToken : string) => {
        try {
            const decode = jwtDecode(accessToken) as any;
            const currentTime = Date.now() / 1000;
            if(decode.exp < currentTime) {
                return false;
            } else {
                return true;
            }
        } catch (err) {
            return console.error(err);
        }
    };
    
    checkAccessToken = () => {
        const accessToken = this.getLocalAccessToken();
        if(accessToken) {
            return this.isValidToken(accessToken);
        } else {
            return false
        }
    }
    
    removeAccessToken = () => {
        return localStorage.removeItem('acessToken');
    }
}

export default TokenService;