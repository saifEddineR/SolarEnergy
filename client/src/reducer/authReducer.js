import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  CHECK_USER,
  GET_PRODUCTS,
  GET_PROJECTS,
  GET_SERVICES,
  ESTEEM_DATA,
} from '../action/types';
let initState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  projects: null,
  products: null,
  services: null,
  errors: null,
  userEsteem: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, isAuth: true, token: payload.token };
    case CHECK_USER:
      return { ...state, isAuth: true };
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
    // get data cases ______________
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_PROJECTS:
      return { ...state, projects: payload };
    case GET_SERVICES:
      return { ...state, services: payload };
    case ESTEEM_DATA:
      return { ...state, userEsteem: payload };
    default:
      return state;
  }
};

export default authReducer;
