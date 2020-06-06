import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create ({
   //baseURL: 'https://8229b4b46fd7.ngrok.io'
      baseURL: 'https://wm-track-server.herokuapp.com'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;