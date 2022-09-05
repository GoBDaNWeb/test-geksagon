// * react
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

// * services
import { AuthService } from '@services/auth';

// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';

// * styles/mui
import styles from './Register.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = observer(() => {
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm();

    const { mutate: registerMutate, data: registerData } = useMutation(
        (data) => AuthService.register(data),
        {
            onError(error) {
                console.error(error);
                alert(error.response.data.detail);
            },
        },
    );

    const { mutate: loginMutate, data: loginData } = useMutation(
        (data) => AuthService.login(data),
        {
            onError(error) {
                console.error(error);
                alert(error.response.data.detail);
            },
        },
    );

    const onSubmit = (data) => {
        registerMutate(data);
        setResponseData(data);
    };

    useEffect(() => {
        if (responseData) loginMutate(responseData);
    }, [registerData]);

    useEffect(() => {
        if (loginData) {
            auth.setToken(loginData.data.access_token);
            window.localStorage.setItem('token', loginData.data.access_token);
            navigate('/');
        }
    }, [loginData, registerData]);

    return (
        <div className={styles.register}>
            <h2>Регистрация</h2>
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
                    Зарегестрироваться
                </Button>
            </form>
        </div>
    );
});

export default Register;
