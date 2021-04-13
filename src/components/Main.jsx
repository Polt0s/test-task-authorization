import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import sendingRemoveUser from '../requestServer/sendingRemoveUser.js';

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(sendingRemoveUser());
    history.push('/');
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Main;
