import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

// Action Creators
export const signin = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);
        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
        // alert("Account Doesn't eixst!");
        let signInFail = document.getElementById("accountNoneExistent");
        signInFail.removeAttribute("hidden");
        setTimeout(() => { signInFail.setAttribute('hidden', ""); }, 3000);
    }
}

export const signup = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(userData);

        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}