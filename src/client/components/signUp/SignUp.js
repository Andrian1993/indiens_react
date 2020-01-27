import React, { useState, useEffect } from 'react';
import { Switch, Route, Prompt } from 'react-router-dom';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import SignUpType from './SignUpType';
import SignUpPortfolio from './SignUpPortfolio';
import Sign from '../modules/Sign';

function SignUp(props) {
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState(Sign.getUserInfo());
  const [userType, setUserType] = useState(Sign.getUserType());
  const [signed, setSigned] = useState(false);
  const [promptMessage, setPromptMessage] = useState(false);
  const [userPortfolio, setUserPortfolio] = useState({
    experience: '',
    projects: [
      {
        type: '',
        name: '',
        role: ''
      }
    ]
  });

  useEffect(() => {
    console.log('render');
    // Указываем, как сбро сить этот эффект:
    return function CloseOnSigning() {
      // console.log('test');
      if (sessionStorage.getItem('userInfo') && !signed) {
        // console.log('cancel signing');
        // Sign.deleteUserInfo();
        // setPromptMessage(true);
      }
    };
  }, [promptMessage]);

  function promptChange() {
    // setPromptMessage(!promptMessage);
  }

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

  function addProject() {
    const { projects } = userPortfolio;
    projects.push({
      type: '',
      name: '',
      role: ''
    });
    setUserPortfolio({
      ...userPortfolio, projects
    });
  }

  function deleteProject(event, projectIndex) {
    const projects = userPortfolio.projects.filter((project, index) => {
      if (index !== projectIndex) return project;
      return null;
    });

    setUserPortfolio({
      ...userPortfolio, projects
    });
  }

  function changeProject(event, index) {
    const { name } = event.target;
    const { value } = event.target;
    const { projects } = userPortfolio;
    projects[index][name] = value;

    setUserPortfolio({
      ...userPortfolio, projects
    });
  }

  function changeExperience(event) {
    const { name } = event.target;
    const { value } = event.target;

    setUserPortfolio({
      ...userPortfolio, [name]: value
    });
  }

  function handleChangeCheckbox(event) {
    setCheck(event.target.checked);
  }

  function saveUser(callback) {
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
    promptChange();
    props.history.push(`${props.match.path}/${url}`);
  }

  function goBack() {
    promptChange();
    props.history.goBack();
  }

  return (
    <React.Fragment>
      <Prompt
        when={promptMessage}
        message="Are you sure you want to leave?"
      />
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
              portfolio={userPortfolio}
              addProject={addProject}
              deleteProject={deleteProject}
              changeProject={changeProject}
              changeExperience={changeExperience}
              changeCheckbox={handleChangeCheckbox}
              check={check}
              saveUser={saveUser}
              signed={signed}
              signUser={signUser}
              goBack={goBack}
              goNext={goNext}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default SignUp;
