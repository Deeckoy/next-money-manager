import styles from './Table.module.scss';

interface TableColumnInterface {
	width?: string | number;
	children?: React.ReactNode;
}

export default function TableColumn({ width, children }: TableColumnInterface) {
	return (
		<td className={styles.table__cell} width={width}>
			{children}
		</td>
	);
}
