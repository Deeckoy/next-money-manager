import * as Table from '@/components/Table';

import styles from './page.module.scss';

export default function TransactionsPage() {
	return (
		<div className={styles.wrapper}>
			<Table.TableWrapper>
				<Table.Table>
					<Table.TableHead>
						<Table.TableRow>
							<Table.TableHeadColumn>ID</Table.TableHeadColumn>
							<Table.TableHeadColumn>Date</Table.TableHeadColumn>
							<Table.TableHeadColumn>Wallet</Table.TableHeadColumn>
							<Table.TableHeadColumn>Category</Table.TableHeadColumn>
							<Table.TableHeadColumn>Type</Table.TableHeadColumn>
							<Table.TableHeadColumn>Amount</Table.TableHeadColumn>
							<Table.TableHeadColumn>Notes</Table.TableHeadColumn>
						</Table.TableRow>
					</Table.TableHead>
				</Table.Table>
			</Table.TableWrapper>
		</div>
	);
}
