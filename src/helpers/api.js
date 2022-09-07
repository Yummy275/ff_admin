const baseUrl = process.env.REACT_APP_API_URL;

const urls = {
    login: `${baseUrl}/user/login`,
    createNewCustomer: `${baseUrl}/customer/create`,
    getCustomers: `${baseUrl}/customer/get-list`,
};

export const login = async (userInputs) => {
    const loginReq = await fetch(urls.login, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(userInputs),
    });
    const reqJson = await loginReq.json();
    return reqJson;
};

export const queryCreateCustomer = async (customerData) => {
    const createReq = await fetch(urls.createNewCustomer, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(customerData),
    });
    const reqJson = await createReq.json();
    return reqJson;
};

export const getCustomers = async () => {
    const customersReq = await fetch(urls.getCustomers, {
        credentials: 'include',
    });
    const customers = await customersReq.json();
    if (customers.error) {
        return console.log(customersReq);
    }
    return customers;
};
