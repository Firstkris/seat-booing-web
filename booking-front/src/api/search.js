import { toast } from 'react-toastify';
import axios from '../config/axios';

const URL = import.meta.env.VITE_API_URL;
export const getRoute = async (route, start) => {
    try {
        if (start) {
            const res = await axios.get(`${URL}/search/${route}/${start}`);
            return res;
        } else {
            const res = await axios.get(`${URL}/search/${route}`);
            return res;
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const getSchedule = async (searchData) => {
    try {
        const result = await axios.post(`${URL}/search`, searchData);
        return result;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// export const
