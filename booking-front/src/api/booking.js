import axios from "../config/axios";
const URL = import.meta.env.VITE_API_URL

export const findAllAvailableSeat = (searchData) => {
    try {
        const result = axios.post(`${URL}/booking/allavailableseat`, searchData)
        return result
    } catch (error) {
        console.log(error);
    }
}