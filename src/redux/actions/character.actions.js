import axios from 'axios';

export const FETCH_CHARACTER_PENDING = 'FETCH_CHARACTER_PENDING';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

// Action Creators
const fetchCharacterPending = () => {
    return {
        type: FETCH_CHARACTER_PENDING
    }
}

const fetchCharacterSuccess = (character) => {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        payload: character
    }
}

const fetchCharacterError = (error) => {
    return {
        type: FETCH_CHARACTER_ERROR,
        error: error
    }
}

// Actions
export const fetchCharacterAction = (uid) => {
    return (dispatch) => {
        dispatch(fetchCharacterPending());
        return axios.get("https://swapi.co/api/people/" + uid)
            .then((character) => {
                dispatch(fetchCharacterSuccess(character.data));
            }).catch(error => {
                dispatch(fetchCharacterError(error));
            });
    }
}