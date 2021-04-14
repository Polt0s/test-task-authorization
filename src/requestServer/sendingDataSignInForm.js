import axios from 'axios';
import { addUser } from '../actions/index.js';

const sendingDataSignInForm = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://agile-garden-50413.herokuapp.com/api/token/login/', {
      username,
      password,
    });
    if (response.status === 200) {
      localStorage.setItem('token', response.data.auth_token);
      dispatch(addUser(response.data.auth_token));
    }
    return { status: response.status };
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export default sendingDataSignInForm;
