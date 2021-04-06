import { SEARCH_BOOK, FETCH_BOOKS, FETCH_POSTER, FETCH_BOOK, LOADING } from '../actions/types';

const initialState = {
    text: '',
    books: [],
    loading: false,
    poster: [],
    book: []
}

const fn = (state = initialState, action) => {
    switch (action.type) {
    case SEARCH_BOOK:
        return {
            ...state,
            text: action.payload,
            loading: false
        };
        case FETCH_BOOKS:
        return {
            ...state,
            books: action.payload,
            loading: false
        };
        case FETCH_POSTER:
        return {
            ...state,
            poster: action.payload,
            loading: false
        };
        case FETCH_BOOK:
        return {
            ...state,
            book: action.payload,
            loading: false
        };
        case LOADING:
        return {
            ...state,
            loading: true
        };
    default:
        return state};

    }
export default fn;
    