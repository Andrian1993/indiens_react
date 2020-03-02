import React, { Component, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Auth from '../modules/Auth';

function LoginDialog({
  logIn,
  openDialog,
  closeDialog
}) {
  const [userData, setUserData] = useState({
    password: '',
    email: '',
    error: ''
  });

  function handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleClick() {
    const user = {
      email: userData.email,
      password: userData.password
    };

    axios.post('/api/auth/login', user)
      .then((res) => {
        if (res.data.code === 200) {
          const { token } = res.data;
          setUserData({
            password: '',
            email: '',
            error: ''
          });
          Auth.authenticateUser(token);
          logIn(token);
        } else {
          setUserData({ ...userData, error: res.data.message });
        }
        console.log(res);
        console.log(res.data);
      });
  }


  return (
    <Dialog open={openDialog}>
      <DialogTitle>Log In</DialogTitle>
      <DialogContent className="signUpForm">
        <FormControl className="signUpFormElement">
          <InputLabel htmlFor="component-email">Email</InputLabel>
          <Input id="component-email" name="email" value={userData.email} onChange={handleChange} />
        </FormControl>

        <FormControl className="signUpFormElement">
          <InputLabel htmlFor="component-password">Password</InputLabel>
          <Input id="component-password" name="password" value={userData.password} onChange={handleChange} />
        </FormControl>

        <div className="error-message">{userData.error}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
                    Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
                    Log In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

/* class LoginDialog extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            email: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClick() {
        let user = {
            'email' : this.state.email,
            'password' : this.state.password
        };

        axios.post(`/api/auth/login`, user)
            .then(res => {
                if(res.data.code === 200) {
                    Auth.authenticateUser(res.data.token);
                } else {

                }
                console.log(res);
                console.log(res.data);
            })
    };


    render() {
        return (
                <Dialog open={this.props.openDialog}>
                    <DialogTitle>Log In</DialogTitle>
                    <DialogContent className="signUpForm">
                        <FormControl className="signUpFormElement">
                            <InputLabel htmlFor="component-email">Email</InputLabel>
                            <Input id="component-email" name='email' value={this.state.email} onChange={this.handleChange} />
                        </FormControl>

                        <FormControl className="signUpFormElement">
                            <InputLabel htmlFor="component-password">Password</InputLabel>
                            <Input id="component-password" name='password' value={this.state.password} onChange={this.handleChange} />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleLogIn} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClick} color="primary">
                            Log In
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
} */


export default LoginDialog;
