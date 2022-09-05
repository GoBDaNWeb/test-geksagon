// * react
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// * store
import { observer } from 'mobx-react-lite';
import auth from './store/auth';

// * components
import Layout from './components/layout/Layout';
import MainPage from './pages/Main';
import AuthPage from './pages/Auth';
import SqueezePage from './pages/Squeeze';

const App = observer(() => {
    useEffect(() => {
        auth.setToken(window.localStorage.getItem('token'));
    }, []);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/squeeze" element={<SqueezePage />} />
            </Routes>
        </Layout>
    );
});

export default App;
