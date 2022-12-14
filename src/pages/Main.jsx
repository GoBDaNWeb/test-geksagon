// * react
import { Navigate } from 'react-router-dom';

// * store
import { observer } from 'mobx-react-lite';
import auth from '../store/auth';

// * components
import Main from '../components/screens/Main';

const MainPage = observer(() => {
    if (!auth.token) {
        return <Navigate to="/auth" />;
    }
    return <Main />;
});

export default MainPage;
