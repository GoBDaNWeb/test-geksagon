// * react
import { useState } from 'react';

// * styles
import styles from './Auth.module.scss';

// * components
import Login from './components/Login';
import Register from './components/Register';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

    const handleAuthForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={styles.auth}>
            <div className={styles.authPanel}>
                {isRegister ? <Register /> : <Login />}

                <h5 onClick={() => handleAuthForm()}>
                    {isRegister ? (
                        <>
                            Уже есть аккаунт? <span>войти</span>
                        </>
                    ) : (
                        <>
                            Нет аккаунта? <span>зарегестрироваться</span>
                        </>
                    )}
                </h5>
            </div>
        </div>
    );
};

export default Auth;
