import BalanceWidgetItem from './BalanceStatsWidgetItem/BalanceStatsWidgetItem';
import { BanknotesIcon } from '@heroicons/react/24/outline';

import styles from './BalanceStatsWidgetGroup.module.scss';

export default function BalanceStatsWidgetGroup() {
	return (
		<div className={styles.widget__group}>
			<BalanceWidgetItem icon={<BanknotesIcon />} name={'Total balance'} value={'$5420.21'} />
			<BalanceWidgetItem icon={<BanknotesIcon />} name={'Total spending'} value={'$250.80'} />
			<BalanceWidgetItem icon={<BanknotesIcon />} name={'Total saved'} value={'$550.25'} />
		</div>
	);
}
