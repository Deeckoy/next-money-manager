import styles from '@/components/Table/Table.module.scss';

export default function TableColumn({ children }: { children?: React.ReactNode }) {
	return <tbody className={styles.table__body}>{children}</tbody>;
}
