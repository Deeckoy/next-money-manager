import { TableBody, TableWrapper } from '@/components/Table';
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
							<Table.TableRow>
								<Table.TableColumn>
									<p className={styles.column__name}>iPhone 13 Pro Max</p>
									<p className={styles.column__description}>apple.inc</p>
								</Table.TableColumn>

								<Table.TableColumn>
									<p className={styles.column__type}>Mobile</p>
								</Table.TableColumn>

								<Table.TableColumn>
									<p className={styles.column__amount}>$800.00</p>
								</Table.TableColumn>

								<Table.TableColumn>
									<p className={styles.column__date}>25 Nov. 2021</p>
								</Table.TableColumn>

								<Table.TableColumn>X</Table.TableColumn>
							</Table.TableRow>

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
						</Table.TableBody>
					</Table.Table>
				</Table.TableWrapper>
			</div>
		</div>
	);
}
