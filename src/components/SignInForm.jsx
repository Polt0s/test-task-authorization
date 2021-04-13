import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import InputElements from './InputElement.jsx';
import sendingDataSignInForm from '../requestServer/sendingDataSignInForm.js';
import Main from './Main.jsx';

const SignInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isError, changeIsError] = useState('');
  // const [isSwitching, changeSwitching] = useState('filling');

  // const handleSubmin = () => {

  // };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-4"
          style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          Login to your personal account
      </div>
      </div>
      <div className="row justify-content-center pt-5">
        <div className="col-sm-4">
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={
              yup.object({
                username: yup.string().min(6).max(20).required('You have not entered your username'),
                password: yup.string().min(8).max(18).required('You did not enter your password'),
              })
            }
            onSubmit={(values) => {
              const { username, password } = values;
              dispatch(sendingDataSignInForm(username, password))
                .then((response) => {
                  if (response.status !== 200) {
                    changeIsError('wrong login or password');
                  }
                  history.push('/menu');
                  return (
                    <Main />
                  );
                });
            }}
            validateOnMount
          >
            {(formik) => (
              <Form className="p-3">
                <div className="form-group">
                  <InputElements
                    placeholder="name"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <InputElements
                    placeholder="******"
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <div className="invalid-feedback" style={{ color: 'red' }}>{isError}</div>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-primary" disabled={!formik.isValid}>
                  Sign in</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
