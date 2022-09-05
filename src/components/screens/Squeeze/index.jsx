// * react
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

// * services
import { LinkService } from '@services/link';

// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';
import modal from '@store/modal';

// * styles/mui
import styles from './Squeeze.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Squeeze = observer(() => {
    const { control, handleSubmit } = useForm();
    const linkRef = useRef(null);

    const { data: response, mutate } = useMutation((data) =>
        LinkService.squeeze(data),
    );

    const onSubmit = (data) => {
        mutate({ ...data, token: auth.token });
    };

    return (
        <div className={styles.squeeze}>
            <p>Вставить ссылку чтобы получить сокращеннный вариант </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.squeezeInput}
            >
                <Controller
                    name="link"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="outlined-basic"
                            label="Вставить"
                            variant="outlined"
                            className={styles.input}
                            onChange={(e) => onChange(e)}
                            value={value}
                        />
                    )}
                />
                <Button type="submit" variant="contained">
                    Создать
                </Button>
            </form>
            {response?.data && (
                <div className={styles.squeezeLink}>
                    Сокращенная ссылка:
                    <span
                        ref={linkRef}
                        onClick={() =>
                            modal.saveTextInClipboard(
                                linkRef.current.textContent,
                            )
                        }
                    >
                        {`http://79.143.31.216/s/${response.data.short}`}
                        <ContentCopyIcon />
                    </span>
                </div>
            )}
        </div>
    );
});

export default Squeeze;
