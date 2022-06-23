import axios from 'axios';
export const ConfirmEmailToken = (token) => {
    return axios.get(`http://localhost:5000/users/confirmEmailToken/${token}`);
}