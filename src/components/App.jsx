import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import SignInForm from './SignInForm.jsx';
import Main from './Main.jsx';

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <Router>
      <div className="container-lg h-100 p-3">
        <div className="d-flex flex-column h-100">
          <Nav className="mb-3 navbar navbar-expand-lg navbar-light bg-light">
            <a className="mr-auto navbar-brand">
              Test-Task-Authorization
          </a>
          </Nav>
          {!isAuth
            && <Switch>
              <Route path="/" component={SignInForm} />
              {/* <Redirect to="/" push /> */}
            </Switch>
          }
          {isAuth
            && <Switch>
              <Route exact path="/menu" component={Main} />
              {/* <Redirect to="/menu" push /> */}
            </Switch>
          }
        </div>
      </div>
    </Router>
  );
};

export default App;
