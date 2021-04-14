import axios from 'axios';
import { logOut } from '../actions/index.js';

const sendingRemoveUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post('http://agile-garden-50413.herokuapp.com/api/token/logout/', null,
      {
        headers: { Authorization: `Token ${token}` },
      });
    dispatch(logOut());
    return response;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export default sendingRemoveUser;
