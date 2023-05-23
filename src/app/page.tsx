import BalanceWidgetGroup from '@/components/Widgets/BalanceStatsWidgetGroup/BalanceStatsWidgetGroup';
import RecentTransactionsWidget from '@/components/Widgets/RecentTransactionsWidget/RecentTransactionsWidget';
import ScheduledTransfersWidget from '@/components/Widgets/ScheduledTransfersWidget/ScheduledTransfersWidget';

import styles from './page.module.css';

export default function HomePage() {
	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboard__column}>
				<BalanceWidgetGroup />

				<RecentTransactionsWidget />
			</div>

			<div className={styles.dashboard__column}>
				<ScheduledTransfersWidget />
			</div>
		</div>
	);
}
