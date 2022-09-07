import React from 'react';

export const CustomerGrid = ({ customers }) => {
    return (
        <table className="table table-hover fs-5">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => {
                    return (
                        <tr>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>
                                {customer.street +
                                    ' ' +
                                    customer.city +
                                    ' ' +
                                    customer.state +
                                    ' ' +
                                    customer.zip}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
