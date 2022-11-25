import api from './Api';
import useAuth from './useAuth';

const useRefreshToken = () => {

    const { setAuth } = useAuth();
    
    const refresh = async () => {
        const response = await api.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.tokens.access);
            return { ...prev, token: response.data.tokens.access }
        });
        return response.data.tokens.access;
    }

    return refresh;
}

export default useRefreshToken;