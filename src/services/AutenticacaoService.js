import axios from "axios";

const url = "https://localhost:8443/login/auth"

class AutenticacaoService {
    login(user){
        const config = {
            withCredintials: true
        }
        return axios.post(url + "/auth", user, config)
    }
}

export default new AutenticacaoService();