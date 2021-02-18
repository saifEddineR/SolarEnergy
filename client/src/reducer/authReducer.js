import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
} from '../action/types';
let initState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuth: false,
  errors: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, isAuth: true, token: payload.token };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { ...state, isAuth: false, errors: payload };
    case LOAD_USER_SUCCESS:
      return { ...state, user: payload, errors: null };
    case LOAD_USER_FAIL:
      return { ...state, user: payload };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        isAuth: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default authReducer;
