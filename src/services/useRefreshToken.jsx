import api from './Api';
import useAuth from './useAuth';

const useRefreshToken = () => {

    const { setAuth } = useAuth();
    const { auth } = useAuth()
    
    const refresh = async () => {
        const response = await api.post('/auth/jwt/refresh/',{
            refresh: auth?.data?.refresh
        });
        setAuth(prev => {
            return { ...prev, data: response.data }
        });
        return response?.data;
    }
    return refresh;
}
 
export default useRefreshToken;