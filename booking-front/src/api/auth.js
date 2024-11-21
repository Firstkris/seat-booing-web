// import { toast } from 'react-toastify'
import axios from '../config/axios.js';

export const register = (user) => axios.post('/auth/register', user);
export const login = (loginData) => axios.post('/auth/login', loginData);

export const fetchUser = () => axios.get('/auth/me');
export const updateuser = (user) => axios.patch('/auth/update', user);
