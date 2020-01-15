import {
    FETCH_CHARACTER_PENDING,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_ERROR,
} from '../actions/character.actions';

const initialState = {
    character: {
        name: "R2-D2"
    },
    pending: false,
    error: null
};

export default function (state = initialState, action) {
	switch (action.type) {
        case FETCH_CHARACTER_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case FETCH_CHARACTER_SUCCESS: {
			return {
                ...state,
                pending: false,
                character: action.payload
			}
        }
        case FETCH_CHARACTER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
		default:
			return state;
	}
}

export const getCharacter = state => state.character;
export const getCharacterPending = state => state.pending;
export const getCharacterError = state => state.error;