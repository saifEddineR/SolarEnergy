import {
  GET_PRODUCTS,
  GET_PROJECTS,
  GET_SERVICES,
  ADD_PRODUCTS,
  ADD_PROJECTS,
  ADD_SERVICES,
  EDIT_PRODUCTS,
  EDIT_PROJECTS,
  EDIT_SERVICES,
  DELETE_PRODUCTS,
  DELETE_PROJECTS,
  DELETE_SERVICES,
} from './types';
import axios from 'axios';

export const editProduct = (data) => (dispatch) => {
  axios
    .post('/products', data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
      });
      // dispatch({
      //   type: EDIT_PRODUCTS,
      // });
    });
};
