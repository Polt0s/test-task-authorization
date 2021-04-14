import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import SignInForm from './SignInForm.jsx';
import Main from './Main.jsx';
import auth from '../requestServer/authentication.js';
import sendingRemoveUser from '../requestServer/sendingRemoveUser.js';

const App = () => {
  const isAuth = useSelector((state) => state.stateUser.isAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendingRemoveUser());
  };

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <Router>
      <div className="container-lg h-100 p-3">
        <div className="d-flex flex-column h-100">
          <Nav className="mb-3 navbar navbar-expand-lg navbar-light bg-light">
            <a className="mr-auto navbar-brand">
              Test-Task-Authorization
          </a>
            {isAuth
              && <NavLink to="/"><button type="button" className="btn btn-primary" onClick={handleClick}>Sign out</button></NavLink>}
          </Nav>
          {!isAuth
            && <Switch>
              <Route path="/" component={SignInForm} />
            </Switch>
          }
          <Switch>
            <Route path="/menu" component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
