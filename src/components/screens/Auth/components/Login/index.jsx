// * react
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

// * services
import { AuthService } from '@services/auth';

// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';

// * styles/mui
import styles from './Login.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = observer(() => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();

    const { data: response, mutate } = useMutation(
        (data) => AuthService.login(data),
        {
            onError(error) {
                console.error(error);
                alert(error.response.data.detail);
            },
        },
    );

    const onSubmit = (data) => {
        mutate(data);
    };

    useEffect(() => {
        if (response) {
            auth.setToken(response.data.access_token);
            window.localStorage.setItem('token', response.data.access_token);
            navigate('/');
        }
    }, [response]);

    return (
        <div className={styles.login}>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="standard"
                            label="Логин"
                            onChange={(e) => onChange(e)}
                            value={value}
                            variant="standard"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="standard-password-input"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={(e) => onChange(e)}
                            value={value}
                        />
                    )}
                />
                <Button type="submit" variant="contained">
                    Войти
                </Button>
            </form>
        </div>
    );
});

export default Login;
