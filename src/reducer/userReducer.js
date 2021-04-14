const initState = {
  currentUser: {},
  isAuth: false,
  users: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        currentUser: {
          username: action.payload.username,
        },
        isAuth: true,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default userReducer;
