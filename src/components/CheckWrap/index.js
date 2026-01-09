import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

import './style.scss';

const CheckWrap = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        card_holder: 'Jhon Doe',
        card_number: '589622144',
        cvv: '856226',
        expire_date: '',
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
                card_holder: '',
                card_number: '',
                cvv: '',
                expire_date: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('Order Recived sucessfully!');
                push('/order_received');
            }  else {
                toast.info('user not existed!');
                alert('user not existed! credential is : user@*****.com | vendor@*****.com | admin@*****.com');
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <div className="cardbp mt-20">
            <div>
                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <label>Card holder Name</label>
                                <input
                                    className="form-control"
                                    name="card_holder"
                                    value={value.card_holder}
                                    onChange={(e) => changeHandler(e)}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <label>Card Number</label>
                                <input
                                    className="form-control"
                                    name="card_number"
                                    value={value.card_number}
                                    onChange={(e) => changeHandler(e)}
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <label>CVV</label>
                                <input
                                    className="form-control"
                                    name="cvv"
                                    value={value.cvv}
                                    onChange={(e) => changeHandler(e)}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <label>Expire Date</label>
                                <input
                                    className="form-control"
                                    name="expire_date"
                                    value={value.expire_date}
                                    onChange={(e) => changeHandler(e)}
                                    type="date"
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="formFooter mt-20">
                                <button className="btn btn-primary btn-lg w-100 mt-20" type="submit">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CheckWrap;