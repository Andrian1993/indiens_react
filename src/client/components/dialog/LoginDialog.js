import React, {Component} from 'react';
import axios from "axios";
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



class LoginDialog extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            email: ''
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

        axios.post(`http://localhost:4000/auth/login`, user)
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
                <Dialog open={this.props.openDialog} onEnter={console.log('Hey.')}>
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
}

export default LoginDialog;
