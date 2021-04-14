import React, { useEffect } from 'react';
import { Grid } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';
import { useDispatch, useSelector } from 'react-redux';
import gettingUsers from '../requestServer/gettingUsers.js';

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.stateUser.users);

  useEffect(() => {
    dispatch(gettingUsers());
  }, []);

  const result = [];

  users.map(({ id, username }) => result.push([String(id), username]));

  return (
    <div className="container-fluid">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-4"
          style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          List of Users
        </div>
      </div>
      <div className="row justify-content-center pt-5">
        <div className="col-sm-8">
          <Grid
            data={
              result.map((item) => item)
            }
            columns={['ID', 'Username']}
            search={true}
            sort={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
