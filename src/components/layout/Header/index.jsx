// * react
import { Link } from 'react-router-dom';

// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';

// * styles/mui
import styles from './Header.module.scss';
import Button from '@mui/material/Button';

const Header = observer(() => {
    const exit = () => {
        window.localStorage.removeItem('token');
        auth.clearToken();
    };

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <Link to="/">Таблица</Link>
                <Link to="/squeeze">Создать ссылку</Link>
            </div>
            <div className={styles.auth}>
                <Button onClick={exit} variant="contained">
                    Выйти
                </Button>
            </div>
        </header>
    );
});

export default Header;
