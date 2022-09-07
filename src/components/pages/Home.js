import React, { useEffect, useState } from 'react';
import { CustomerGrid } from '../CustomerGrid';
import { Loading } from '../Loading';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(1);
    const [displayedCustomers, setDisplayedCustomers] = useState([]);

    useEffect(() => {
        //get first set of customers
    }, []);

    return (
        <div>
            <h1>home</h1>
            <CustomerGrid customers={displayedCustomers} />
        </div>
    );
};
