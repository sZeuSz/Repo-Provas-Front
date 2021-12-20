import axios from 'axios';

const URL = 'https://repository-tests.herokuapp.com';

export function getProfessorsRequest() {
    return axios.get(`${URL}/professors`);
}

export function getProfessorsTestsRequest(id) {
    return axios.get(`${URL}/professors/${id}/tests-by-categories`)
}

export function getDisciplinesRequest() {
    return axios.get(`${URL}/disciplines`);
}

export function getDisciplinesTestsRequest(id) {
    return axios.get(`${URL}/disciplines/${id}/tests`);
}