import styles from './BalanceStatsWidgetItem.module.scss';

interface BalanceWidgetItemInterface {
	icon: JSX.Element | React.ReactNode;
	name: string;
	value: string;
}

export default function BalanceStatsWidgetItem({ icon, name, value }: BalanceWidgetItemInterface) {
	return (
		<div className={styles.widget}>
			<div className={styles.widget__icon__wrapper}>{icon}</div>

			<div className={styles.widget__info}>
				<p className={styles.widget__name}>{name}</p>
				<h3 className={styles.widget__value}>{value}</h3>

				{/*TODO: +% or -%*/}
				<p className={styles.widget__stat}>+12.08%</p>
			</div>
		</div>
	);
}
