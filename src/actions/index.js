export const addUser = (username) => ({
  type: 'ADD_USER',
  payload: {
    username,
  },
});

export const logOut = () => ({ type: 'LOGOUT' });
