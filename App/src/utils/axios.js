import Axios from 'axios'

const getToken = () =>{
    const token = localStorage.getItem("token")
    return token
}
const instance = Axios.create({
    baseURL:"http://localhost:3001"
}) 
instance.interceptors.request.use(async(config) => {
    const token = getToken()
    config.headers = {
        token: token
    } 
    return config
})

export default instance