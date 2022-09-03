import { Routes, Route } from 'react-router-dom';

// * acomponents
import Layout from './components/layout/Layout';
import MainPage from './pages/Main';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
