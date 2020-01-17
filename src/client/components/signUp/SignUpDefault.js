import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import SignUpForm from './SignUpForm';
import { Redirect } from 'react-router-dom';

class SignUpDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedUp: false,
            user: {
                name: '',
                password: '',
                passwordConfirm: '',
                tel: '',
                email: ''
            },
            errors: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange = (event) => {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    };

    submitSignup() {
        var user = {
            name: this.state.user.name,
            password: this.state.user.password,
            email: this.state.user.email
        };

        axios.post(`http://localhost:4000/auth/signup`, user)
            .then(res => {
                if(res.data.code === 200) {
                    this.setState({
                        isSignedUp: true
                    })
                }
                else if(res.data.code === 401) {
                    const errors = {message: res.data.message};
                    this.setState({
                        errors
                    })
                }
                else {
                    const errors = {message: res.data.message};
                    this.setState({
                        errors
                    })
                }
            })
        /* .catch(error => {
         console.log(error.response)
     });*/
    }

    validateForm() {
        var payload = this.validateSignUpForm(this.state.user);
        if (payload.success) {
            this.setState({
                errors: {}
            });
            this.submitSignup();
        } else {
            const errors = payload.errors;
            this.setState({
                errors
            });
        }
    }

    validateSignUpForm(user) {
        const payload = {
            errors : {},
            success : false
        };
        if(user.password !== user.passwordConfirm){
            payload.errors.pwconfirm = 'Password confirmation doesn\'t match.';
        }


        if(!user.password){
            payload.errors.password = 'Please provide a password.';
        }
        else if(user.password.length < 8) {
            payload.errors.password = 'Password must have at least 8 characters.';
        }

        if(!user.email){
            payload.errors.email = 'Please provide an email.';
        }

        if(!user.name){
            payload.errors.name = 'Please provide a name.';
        }

        if(!user.tel){
            payload.errors.tel = 'Please provide a phone number.';
        }

        // payload.success = payload.errors ? false : true;
        payload.success = Object.entries(payload.errors).length === 0 && payload.errors.constructor === Object;

        return payload;
    }

    render() {
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: `${this.props.match.path}/type` }} />;
        }

        return (
            <SignUpForm
                errors={this.state.errors}
                user={this.state.user}
                handleClick={this.validateForm}
                handleChange={this.handleChange}
            />
        );
    }
}

export default SignUpDefault;