import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '1511aa7f2f734e298d1412cecad15750'
    }
})