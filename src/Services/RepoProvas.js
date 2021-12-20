import axios from 'axios';

const URL = 'http://localhost:4000';

export function getProfessorsRequest() {
    return axios.get(`${URL}/professors`);
}

export function getProfessorsTestsRequest(id) {
    return axios.get(`${URL}/professors/${id}/tests-by-categories`)
}