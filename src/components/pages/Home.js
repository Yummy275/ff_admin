import React, { useEffect, useState } from 'react';
import { CustomerGrid } from '../CustomerGrid';
import { Loading } from '../Loading';
import { styles } from '../../helpers/styles';
import { getCustomers } from '../../helpers/api';

export const Home = ({ setPage }) => {
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(1);
    const [displayedCustomers, setDisplayedCustomers] = useState([]);

    useEffect(() => {
        //get first set of customers
        const initialCustomers = async () => {
            const customers = await getCustomers();
            setDisplayedCustomers(customers);
        };
        initialCustomers();
    }, []);

    const searchSubmit = (e) => {};

    return (
        <div className="mt-5">
            <div className="d-flex flex-column gap-4 align-items-center">
                <button
                    onClick={() => setPage('create')}
                    className={styles.button}
                >
                    Add New Customer
                </button>
                <form
                    onSubmit={(e) => searchSubmit(e)}
                    style={{ width: '500px' }}
                    className="d-flex gap-1"
                >
                    <input
                        className="form-control"
                        placeholder="Search customers"
                    />
                    <button className={styles.button}>Find</button>
                </form>
            </div>
            <div className="p-3">
                <CustomerGrid customers={displayedCustomers} />
            </div>
        </div>
    );
};
