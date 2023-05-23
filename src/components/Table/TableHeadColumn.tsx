import styles from './Table.module.scss';

export default function TableHeadColumn({ children }: { children?: React.ReactNode }) {
	return <th className={styles.table__head__cell}>{children}</th>;
}
