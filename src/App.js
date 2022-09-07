import { useState } from 'react';
import './App.css';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { AddCustomer } from './components/pages/AddCustomer';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [page, setPage] = useState('');

    const displayPage = () => {
        if (page === '') return <Home setPage={setPage} />;
        if (page === 'create')
            return <AddCustomer goBackHome={() => setPage('')} />;
    };

    return (
        <div className="App">
            {loggedIn ? (
                displayPage()
            ) : (
                <Login loginUpdate={() => setLoggedIn(true)} />
            )}
        </div>
    );
}

export default App;
