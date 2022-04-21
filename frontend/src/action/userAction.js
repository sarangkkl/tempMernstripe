import axios from 'axios';

import {
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST,
  CLEAR_ERRORS,
} from '../constants/AuthConstants';




// login action
export const loginTry = (cred) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/login", cred, config)
    dispatch({ type: LOGIN_SUCCESS, payload: data.user })
  } catch (error) {
    console.log(error)
    dispatch({
      
      type: LOGIN_FAIL,
      payload: error,
    })
  }
}

//  action for the user registration
export const registerUser = (cred) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST })
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post("/api/v1/register", cred, config)
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    })
  }
}

//  Loading the user in case the page refresh so that the user always login
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST })
    const { data } = await axios.get(`/api/v1/me`)
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });

  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
}

// Executing logout of the user will logout after this action

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
}





// Admin actions start here



// Clearing the errorr
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};