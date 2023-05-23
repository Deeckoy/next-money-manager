import styles from './Table.module.scss';

export default function Table({ children }: { children: React.ReactNode }) {
	return <table className={styles.table}>{children}</table>;
}
