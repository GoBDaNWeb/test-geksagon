// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';

// * styles
import styles from './Layout.module.scss';

// * components
import Header from './Header';
import Clipboard from './Clipboard';

const Layout = observer(({ children }) => {
    return (
        <div className={styles.layout}>
            {auth.token && <Header />}
            {children}
            <Clipboard />
        </div>
    );
});

export default Layout;
