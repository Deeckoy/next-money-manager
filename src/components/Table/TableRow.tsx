import styles from '@/components/Table/Table.module.scss';

export default function TableColumn({ children }: { children?: React.ReactNode }) {
	return <tr className={styles.table__row}>{children}</tr>;
}
