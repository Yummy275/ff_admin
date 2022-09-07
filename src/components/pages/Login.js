import React, { useState } from 'react';
import { LoginForm } from '../forms/LoginForm';
import { login } from '../../helpers/api';

export const Login = ({ loginUpdate }) => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginResult = await login(inputs);
        if (loginResult.error) {
            return console.log('error)');
        }
        loginUpdate();
    };

    return (
        <div className="mt-5 mx-auto" style={{ maxWidth: '500px' }}>
            <h1>Login</h1>
            <LoginForm
                updateInputs={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};
