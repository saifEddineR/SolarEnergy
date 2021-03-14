import axios from 'axios';
import { ESTEEM_DATA } from './types';

export const esteemData = (userInput, files) => (dispatch) => {
  let filesArray = Object.values(files);
  let formData = new FormData();
  filesArray.map((file) => formData.append('photos', file));
  formData.append('userInput', JSON.stringify(userInput));
  formData.append('photos', filesArray);
  axios
    .post('/esteem', formData)
    .then((res) => dispatch({ type: ESTEEM_DATA, payload: res.data }))
    .catch((err) => console.log('errors:', err.data));
};
