import axios from 'axios';

const BASE_URL = 'http://localhost:3210';

const apis = {
    clinics: axios.get(`${BASE_URL}/clinics`),
};

export default apis;