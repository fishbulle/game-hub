import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '22a5fefe863242449e0e9aed56a6cef2'
    }
})