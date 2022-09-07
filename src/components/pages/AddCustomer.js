import React, { useState } from 'react';
import { NewCustomerForm } from '../forms/NewCustomerForm';
import { styles } from '../../helpers/styles';

export const AddCustomer = ({ goBackHome }) => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('add customer');
    };

    const formButtons = (
        <>
            <button type="submit" className={styles.button}>
                Create
            </button>
            <button
                onClick={goBackHome}
                type="button"
                className={styles.button}
            >
                Cancel
            </button>
        </>
    );

    return (
        <div className="mt-5 mx-auto" style={{ maxWidth: '500px' }}>
            <h1 className="mb-3 text-center">Add Customer</h1>
            <NewCustomerForm
                inputUpdate={handleInputChange}
                handleSubmit={handleSubmit}
                buttons={formButtons}
            />
        </div>
    );
};
