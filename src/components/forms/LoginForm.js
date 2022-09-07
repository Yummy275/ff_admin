import React from 'react';
import { styles } from '../../helpers/styles';

export const LoginForm = ({ handleSubmit, updateInputs }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="d-flex flex-column gap-2">
                <input
                    placeholder="Username"
                    className="form-control"
                    id="username"
                    onChange={(e) => updateInputs(e)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="password"
                    onChange={(e) => updateInputs(e)}
                />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className={styles.button}>Login</button>
            </div>
        </form>
    );
};
