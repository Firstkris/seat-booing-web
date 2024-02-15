import axios from '../config/axios.js'

export const register = (user) => axios.post("/auth/register", user)