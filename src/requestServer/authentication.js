import { addUser } from '../actions/index.js';

const auth = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(addUser(token));
  }
  return null;
};

export default auth;
