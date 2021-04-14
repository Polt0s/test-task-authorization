import axios from 'axios';
import { setUsers } from '../actions/index.js';

const gettingUsers = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://agile-garden-50413.herokuapp.com/api/users',
      {
        headers: { Authorization: `Token ${token}` },
      });
    dispatch(setUsers(response.data));
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export default gettingUsers;
