import React, { useState } from 'react';
import './Signupform.css';

function SignupForm() {
    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    });
    const [arr, setArr] = useState([]);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);

    const register = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!isValidPhone) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        setArr([...arr, state]);
        console.log(state);
        setState({
            fullName: "",
            email: "",
            password: "",
            phone: "",
            address: ""
        });
    };

    const blurPassword = () => {
        setIsValidPassword(state.password.length > 8);
    };

    const blurEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(state.email));
    };

    const blurPhone = () => {
        const phoneRegex = /^\d{10}$/;
        setIsValidPhone(phoneRegex.test(state.phone));
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={submit} className="signup-form">
                <h3 className="form-title">SignUp Form</h3>
                <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        value={state.fullName}
                        name="fullName"
                        className="form-control"
                        id="fullName"
                        onChange={register}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        value={state.email}
                        name="email"
                        className={`form-control ${isValidEmail ? '' : 'invalid'}`}
                        id="email"
                        onChange={register}
                        onBlur={blurEmail}
                        required
                    />
                    {!isValidEmail && (
                        <label className="error-message">
                            Please enter a valid email address
                        </label>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        value={state.password}
                        name="password"
                        className={`form-control ${isValidPassword ? '' : 'invalid'}`}
                        id="password"
                        onChange={register}
                        onBlur={blurPassword}
                        required
                    />
                    {!isValidPassword && (
                        <label className="error-message">
                            Password must be greater than 8 characters
                        </label>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        value={state.phone}
                        name="phone"
                        className={`form-control ${isValidPhone ? '' : 'invalid'}`}
                        id="phone"
                        onChange={register}
                        onBlur={blurPhone}
                        required
                    />
                    {!isValidPhone && (
                        <label className="error-message">
                            Please enter a valid 10-digit phone number
                        </label>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        value={state.address}
                        name="address"
                        className="form-control"
                        id="address"
                        onChange={register}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-submit" />
            </form>
        </div>
    );
}

export default SignupForm;
