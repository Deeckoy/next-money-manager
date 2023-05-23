import Link from 'next/link';
import ScheduledTransfersList from './ScheduledTransfersList/ScheduledTransfersList';

import styles from './ScheduledTransfersWidget.module.scss';

export default function ScheduledTransfersWidget() {
	return (
		<div className={`${styles.transfers__wrapper}`}>
			<div className={`${styles.transfers__head}`}>
				<h3 className={`${styles.transfers__title}`}>Scheduled Transfers</h3>

				<Link className={styles.transfers__link} href={'/planning'}>
					View all
				</Link>
			</div>

			<div className={`${styles.transfers__body}`}>
				<ScheduledTransfersList />
			</div>
		</div>
	);
}
