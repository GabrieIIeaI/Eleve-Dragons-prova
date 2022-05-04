import { GET_USERS, GET_USERS_ERROR, ADD_NEW_USER_LOCAL } from "../types";

const initialState = {
    list: [],
    loading: true,
}

export default function useReducer (state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case GET_USERS_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        case ADD_NEW_USER_LOCAL:
            return {
                ...state,
                list: action.payload,
                loading: false,
            }
        default: return state
    }
}