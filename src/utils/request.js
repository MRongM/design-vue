import axios from 'axios'

export async function fetchGet(endpoint, params) {
    const response = await axios.get(endpoint, {
        params
    })
    return response.data
}
