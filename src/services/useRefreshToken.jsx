import api from './Api';
import useAuth from './useAuth';

const useRefreshToken = () => {

    const { setAuth } = useAuth();
    const { auth } = useAuth()
    
    const refresh = async () => {
        const response = await api.post('/auth/jwt/refresh/',{
            refresh: auth?.tokens?.refresh
        },
        {
            withCredentials: true,
        });
        console.log(response.data.access)
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access);
            return { ...prev, token: response.data.access }
        });
        return response.data.access;
    }

    return refresh;
}
 
export default useRefreshToken;