/* eslint-disable*/

import request from 'superagent';

const URL = process.env.REACT_APP_API_URL|| 'https://safe-savannah-52610.herokuapp.com';

export function fetchBooks() {
    return request.get(`${URL}/books`);
}

export function fetchBook(id) {
    return request.get(`${URL}/books/${id}`);
}

export function addBook(bookData) {
    return request.post(`${URL}/books`, bookData)
}