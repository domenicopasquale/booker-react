vimport { SEARCH_BOOK, FETCH_BOOKS, FETCH_POSTER, FETCH_BOOK, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../.env';

export const searchBook = text => dispatch => {
    dispatch({
        type: SEARCH_BOOK,
        payload: text
    })
};

export const fetchBooks = text => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${APIKey}`)
        .then(response => dispatch({
            type: FETCH_BOOKS,
            payload: response.data.items
        }))
        .catch(err => console.log(err))
}

export const fetchPoster = id => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${APIKey}`)
        .then(response => dispatch({
            type: FETCH_POSTER,
            payload: response.data.volumeInfo.imageLinks
        }))
        .catch(err => console.log(err))
};

export const fetchBook = id => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${APIKey}`)
        .then(response => dispatch({
            type: FETCH_BOOK,
            payload: response.data.volumeInfo
        }))
        .catch(err => console.log(err))
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}
