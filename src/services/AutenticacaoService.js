import axios from "axios";

const url = "http://localhost:8443/login"

class AutenticacaoService {
    login(user){
        const config = {
            withCredentials: true
        }
        return axios.post(url + "/auth", user, config)
    }
}

export default new AutenticacaoService();