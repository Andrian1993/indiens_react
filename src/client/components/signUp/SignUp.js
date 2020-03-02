import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import SignUpType from './SignUpType';
import SignUpPortfolio from './SignUpPortfolio';
import Sign from '../modules/Sign';

function SignUp(props) {
  const { history } = props;
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState(Sign.getUserInfo());
  const [userType, setUserType] = useState(Sign.getUserType());
  const [signed, setSigned] = useState(false);
  const promptMessage = 'Are you sure you want to leave?';

  history.block(({ pathname }) => {
    if (sessionStorage.getItem('userInfo') && !signed && (pathname.indexOf('/SignUp') == -1)) return promptMessage;
  });

  useEffect(() => function CloseFunction() {
    Sign.deleteUserInfo();
  }, []);

  function handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    setUser({ ...user, [name]: value });
  }

  function handleChangeType(event) {
    setUserType(event.target.value);
  }

  function handleChangeCheckbox(event) {
    setCheck(event.target.checked);
  }

  function saveUser(userPortfolio, callback) {
    const data = { ...user, ...userPortfolio, ...{ type: userType } };

    axios.post('/api/auth/signup', data)
      .then((res) => {
        if (res.data.code === 200) {
          // Sign.saveUserId(res.data.data);
          // goNext('type')
          callback(null, res.data.id);
        } else if (res.data.code === 401) {
          callback({ message: res.data.message }, null);
        } else {
          callback({ message: res.data.message }, null);
        }
      })
      .catch(error => (error));
  }

  function signUser() {
    setSigned(!signed);
  }


  function goNext(url) {
    props.history.push(`${props.match.path}/${url}`);
  }

  function goBack(url) {
    props.history.push(url);
  }

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={props.match.path}
          render={props => (
            <SignUpForm
              {...props}
              user={user}
              goBack={goBack}
              goNext={goNext}
              handleChange={handleChange}
            />
          )}
        />
        <Route
          path={`${props.match.path}/type`}
          render={props => (
            <SignUpType
              {...props}
              userType={userType}
              handleChange={handleChangeType}
              goBack={goBack}
              goNext={goNext}
            />
          )}
        />
        <Route
          path={`${props.match.path}/portfolio`}
          render={props => (
            <SignUpPortfolio
              {...props}
              changeCheckbox={handleChangeCheckbox}
              check={check}
              saveUser={saveUser}
              signed={signed}
              signUser={signUser}
              goBack={goBack}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default SignUp;
