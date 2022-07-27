import axios from 'axios';
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../constants/todosConstant';

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get(API_URL);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAILED, payload: error.message });
    }
};