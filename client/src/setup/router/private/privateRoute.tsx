import { Outlet, Navigate } from 'react-router-dom';
import TokenService from '@/setup/services/token.service'

export const PrivateRoutes = () => {
    const tokenService = new TokenService();
    let auth = {'token': tokenService.checkAccessToken()}
    return(
        auth.token ? <Outlet/> : <Navigate to="/signin"/>
    )
}