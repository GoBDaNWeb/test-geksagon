// * react
import { useQuery } from '@tanstack/react-query';

// * store
import { observer } from 'mobx-react-lite';
import auth from '@store/auth';

// * services
import { LinkService } from '@services/link';

// * styles
import styles from './Main.module.scss';

// * components
import BasicTable from './Table';

const Main = observer(() => {
    const { data: statistics, isLoading } = useQuery(['statistics'], () =>
        LinkService.statistics(auth.token),
    );

    return (
        <div className={styles.main}>
            {isLoading ? (
                <h4>Загрузка...</h4>
            ) : (
                <BasicTable tableData={statistics && statistics.data} />
            )}
        </div>
    );
});

export default Main;
