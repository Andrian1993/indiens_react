import React, { Component, useState } from 'react';
import axios from 'axios';
import '../../css/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import step1 from '../../img/join/step1.png';
import Sign from '../modules/Sign';

const SignUpForm = ({
  user,
  goBack,
  goNext,
  handleChange
}) => {
  const [errors, setErrors] = useState({});

  function validateCheck(data) {
    const payload = {
      errors: {},
      success: false
    };

    if (data.password !== data.passwordConfirm) {
      payload.errors.pwconfirm = 'Password confirmation doesn\'t match.';
    }


    if (!data.password) {
      payload.errors.password = 'Please provide a password.';
    } else if (data.password.length < 8) {
      payload.errors.password = 'Password must have at least 8 characters.';
    }

    if (!data.passwordConfirm) {
      payload.errors.pwconfirm = 'Please confirm the password.';
    }

    if (!data.email) {
      payload.errors.email = 'Please provide an email.';
    }

    if (!data.name) {
      payload.errors.name = 'Please provide a name.';
    }

    if (!data.tel) {
      payload.errors.tel = 'Please provide a phone number.';
    }

    payload.success = Object.entries(payload.errors).length === 0 && payload.errors.constructor === Object;

    return payload;
  }

  function submitSignup() {
    const data = {
      name: user.name,
      password: user.password,
      email: user.email
    };

    axios.post('/api/auth/checkUserExist', data)
      .then((res) => {
        if (res.data.code === 200) {
          // Sign.saveUserId(res.data.data);
          goNext('type');
        } else if (res.data.code === 401) {
          setErrors({ message: res.data.message });
        } else {
          setErrors({ message: res.data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClick() {
    const payload = validateCheck(user);
    if (payload.success) {
      setErrors({});
      Sign.saveUserInfo(user);
      submitSignup();
    } else {
      const errorsObj = payload.errors;
      setErrors(errorsObj);
    }
  }


  return (
    <div>
      <div className="join_title">
        <h3>
            Now let's check some things you can do
          <br />
            as an Indian.
        </h3>
        <img src={step1} alt="step1" />
        <p>
                    STEP 1
          <br />
                    Enter user info
        </p>
      </div>

      <div className="signUpForm">
        <FormControl className="signUpFormElement">
          <TextField id="component-email" label="Email" name="email" value={user.email} onChange={handleChange} error={errors.email} helperText={errors.email ? errors.email : ' '} />
        </FormControl>

        <FormControl className="signUpFormElement">
          <TextField id="component-password" label="Password" name="password" value={user.password} onChange={handleChange} error={errors.password} helperText={errors.password ? errors.password : ' '} />
        </FormControl>

        <FormControl className="signUpFormElement">
          <TextField id="component-passwordConfirm" label="Confirm Password" name="passwordConfirm" value={user.passwordConfirm} onChange={handleChange} error={errors.pwconfirm} helperText={errors.pwconfirm ? errors.pwconfirm : ' '} />
        </FormControl>

        <FormControl className="signUpFormElement">
          <TextField id="component-tel" label="Phone number" name="tel" value={user.tel} onChange={handleChange} error={errors.tel} helperText={errors.tel ? errors.tel : ' '} />
        </FormControl>

        <FormControl className="signUpFormElement">
          <TextField id="component-name" label="Name" name="name" value={user.name} onChange={handleChange} error={errors.name} helperText={errors.name ? errors.name : ' '} />
        </FormControl>

        <div className="error-message">{errors.message}</div>

        <div layout="row" className="join_btn type">
          <Button variant="contained" className="gray" style={{ width: '20%' }} onClick={() => goBack('/')}>
                        Back
          </Button>
          <Button variant="contained" style={{ width: '70%' }} onClick={handleClick}>
                        Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
