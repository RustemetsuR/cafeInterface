import axios from 'axios';

const axiosMenu = axios.create({
    baseURL: 'https://menu-redux.firebaseio.com/',
});

export default axiosMenu;