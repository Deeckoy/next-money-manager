import RecentTransactionsList from '@/components/Widgets/RecentTransactionsWidget/RecentTransactionsList';
import Link from 'next/link';
import * as Table from '@/components/Table';
import styles from './RecentTransactionWidget.module.scss';

export default function RecentTransactionsWidget() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.head}>
				<h3 className={styles.head__title}>Recent transactions</h3>

				<Link className={styles.head__link} href={'/transactions'}>
					View all
				</Link>
			</div>

			<div>
				<Table.TableWrapper>
					<Table.Table>
						<Table.TableHead>
							<Table.TableRow>
								<Table.TableHeadColumn>Name/Business</Table.TableHeadColumn>

								<Table.TableHeadColumn>Type</Table.TableHeadColumn>

								<Table.TableHeadColumn>Amount</Table.TableHeadColumn>

								<Table.TableHeadColumn>Date</Table.TableHeadColumn>
							</Table.TableRow>
						</Table.TableHead>

						<Table.TableBody>
							<RecentTransactionsList />
						</Table.TableBody>
					</Table.Table>
				</Table.TableWrapper>
			</div>
		</div>
	);
}
