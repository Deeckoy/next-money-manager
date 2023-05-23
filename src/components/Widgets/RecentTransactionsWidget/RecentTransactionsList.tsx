import styles from '@/components/Widgets/RecentTransactionsWidget/RecentTransactionWidget.module.scss';

import * as Table from '@/components/Table';

export default function RecentTransactionsList() {
	return (
		<>
			<Table.TableRow>
				<Table.TableColumn>
					<p className={styles.column__name}>Netflix Premium Subscription</p>
					<p className={styles.column__description}>netflix.inc</p>
				</Table.TableColumn>

				<Table.TableColumn>
					<p className={styles.column__type}>Entertainment</p>
				</Table.TableColumn>

				<Table.TableColumn>
					<p className={styles.column__amount}>$60.00</p>
				</Table.TableColumn>

				<Table.TableColumn>
					<p className={styles.column__date}>25 Nov. 2021</p>
				</Table.TableColumn>

				<Table.TableColumn>X</Table.TableColumn>
			</Table.TableRow>
		</>
	);
}
