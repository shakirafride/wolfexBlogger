import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {Link, useHistory} from "react-router-dom";
import './style.scss';

const LoginPage = (props) => {

    const history = useHistory()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('You successfully Login on ModernMag !');
                history.push('/home');
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    return (
        <div className="loginWrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="loginForm">
                            <h2>Sign In</h2>
                            <p>Sign in to your account</p>
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={value.email}
                                        name="email"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('email', value.email, 'required|email')}
                                </div>
                                
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={value.password}
                                        name="password"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('password', value.password, 'required')}
                                </div>

                                <div className="form-group form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        checked={value.remember} 
                                        onChange={rememberHandler}
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                    <Link to="/forgot-password" className="float-right">Forgot Password?</Link>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>

                                <div className="text-center">
                                    <p>Don't have an account? <Link to="/register">Create free account</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;