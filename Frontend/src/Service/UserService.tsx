
import axiosInstance from "../Interceptor/AxiosInterceptor";
const USERMS_BASE = "https://userms-qa11.onrender.com";


const registerUser = async (user: any) => {
    return axiosInstance.post('/user/register', user)
        .then((response: any) => response.data)
        .catch((error: any) => { throw error; })
}
const loginUser = async (user: any) => {
    return axiosInstance.post('/user/login', user)
        .then((response: any) => response.data)
        .catch((error: any) => { throw error; })
}

const getUserProfile = async (id: any) => {
    return axiosInstance.get('/user/getProfile/' + id)
        .then((response: any) => response.data)
        .catch((error: any) => { throw error; })
}
const getRegistrationCounts = async () => {
    return axiosInstance.get('/user/getRegistrationCounts')
        .then((response: any) => response.data)
        .catch((error: any) => { throw error; })
}
export { registerUser, loginUser, getUserProfile, getRegistrationCounts };