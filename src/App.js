import { useState } from 'react';
import './App.css';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            {loggedIn ? (
                <Home />
            ) : (
                <Login loginUpdate={() => setLoggedIn(true)} />
            )}
        </div>
    );
}

export default App;
