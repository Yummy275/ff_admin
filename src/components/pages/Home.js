import React, { useEffect, useState } from 'react';
import { CustomerGrid } from '../CustomerGrid';
import { Loading } from '../Loading';
import { getCustomers } from '../../helpers/api';

export const Home = () => {
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

    return (
        <div>
            <h1>home</h1>
            <div className="p-3">
                <CustomerGrid customers={displayedCustomers} />
            </div>
        </div>
    );
};
