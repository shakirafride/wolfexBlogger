import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {Link, useHistory} from "react-router-dom";
import './style.scss';

const SignUpPage = (props) => {

    const history = useHistory()

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                full_name: '',
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            history.push('/login');
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
                            <h2>Sign Up</h2>
                            <p>Create your account</p>
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        value={value.full_name}
                                        name="full_name"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('full name', value.full_name, 'required|alpha')}
                                </div>

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

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm your password"
                                        value={value.confirm_password}
                                        name="confirm_password"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                </div>

                                <div className="text-center">
                                    <p>Already have an account? <Link to="/login">Return to Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUpPage;