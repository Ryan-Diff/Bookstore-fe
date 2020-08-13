/* eslint-disable*/

import request from 'superagent';

const URL = 'https://safe-savannah-52610.herokuapp.com';

export function fetchBooks() {
    return request.get(`${URL}/books`);
}

export function fetchBook(id) {
    return request.get(`${URL}/guitars/${id}`);
}
