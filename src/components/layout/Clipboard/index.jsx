// * store
import { observer } from 'mobx-react-lite';
import modal from '@store/modal';

// * styles/mui
import styles from './Clipboard.module.scss';
import CheckIcon from '@mui/icons-material/Check';

const Clipboard = observer(() => {
    return (
        <div
            className={`${styles.clipboard} ${
                modal.isOpenClipboard && styles.active
            }`}
        >
            <CheckIcon /> Скопировано
        </div>
    );
});

export default Clipboard;
