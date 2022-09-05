// * react
import { Navigate } from 'react-router-dom';

// * store
import { observer } from 'mobx-react-lite';
import auth from '../store/auth';

// * components
import Auth from '../components/screens/Auth';

const AuthPage = observer(() => {
    if (auth.token) {
        return <Navigate to="/" />;
    }
    return <Auth />;
});

export default AuthPage;
