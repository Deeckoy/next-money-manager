import styles from './Table.module.scss';

export default function Table({ children }: { children?: React.ReactNode }) {
	return <div className={styles.wrapper}>{children}</div>;
}
