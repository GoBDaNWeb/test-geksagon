// * react
import { Navigate } from 'react-router-dom';

// * store
import { observer } from 'mobx-react-lite';
import auth from '../store/auth';

// * components
import Squeeze from '../components/screens/Squeeze';

const SqueezePage = observer(() => {
    if (!auth.token) {
        return <Navigate to="/auth" />;
    }
    return <Squeeze />;
});

export default SqueezePage;
