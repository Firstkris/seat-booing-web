import axios from "../config/axios";

const URL = import.meta.env.VITE_API_URL
export const getRoute = async (route, start) => {

    try {

        if (start) {
            console.log(start);
            const res = await axios.get(`${URL}/search/${route}/${start}`)
            return res
        } else {


            const res = await axios.get(`${URL}/search/${route}`)
            return res
        }


    } catch (error) {
        console.log(error);
    }
}

export const getSchedule = async (searchData) => {
    try {
        const result = axios.post(`${URL}/search`, searchData)
        return result
    } catch (error) {
        console.log(error);
    }
}

// export const 