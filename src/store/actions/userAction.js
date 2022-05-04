import { GET_USERS, GET_USERS_ERROR } from "../types";
import axios from "axios";


//Dar get na lista de usuarios do BD
export const getUser = () => async dispatch => {
    try {
        const res = await axios.get("https://gorest.co.in/public/v2/users")
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error
        })
    }
}

//Acrescentar um novo usuário para a lista local
export const addUser = (data, list_local) => async dispatch => {
    try {
        list_local.push(data);
        console.log(list_local);
        dispatch({
            type: GET_USERS,
            payload: list_local
        })
    }
    catch(error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error
        })
    }
}