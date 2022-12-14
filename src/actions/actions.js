import axios from "axios";

const url = `http://127.0.0.1`;
const headers = { 'Content-Type': 'application/json' };

export const getData = async (data) => {
    try {
        const response = await axios.get(`${url}/data`,
            {
                headers
            }
        )
        console.log(response);
        return response;
    } catch (e) {
        console.log('getData', e);
    }
}

export const createData = async (data) => {
    try {
        const response = await axios.post(`${url}/data`,
            {
                data
            },
            {
                headers
            }
        )
        console.log(response);
        return response;
    } catch (e) {
        console.log('getData', e);
    }
}