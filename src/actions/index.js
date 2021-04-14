export const addUser = (username) => ({
  type: 'ADD_USER',
  payload: {
    username,
  },
});

export const logOut = () => ({ type: 'LOGOUT' });

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: {
    users,
  },
});
