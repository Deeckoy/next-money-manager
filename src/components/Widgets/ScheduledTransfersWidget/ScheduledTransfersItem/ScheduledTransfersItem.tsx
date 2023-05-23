import styles from './ScheduledTransfersItem.module.scss';

export default function ScheduledTransfersItem() {
	return (
		<div className={`${styles.item__wrapper}`}>
			<div className={`${styles.info__wrapper}`}>
				<div className={`${styles.avatar}`}>R</div>

				<div>
					<p className={`${styles.name}`}>Robul Karin</p>
					<p className={`${styles.date}`}>Nov 28, 2021 | 11:00 AM</p>
				</div>
			</div>

			<p className={`${styles.amount}`}>-&nbsp;$435,00</p>
		</div>
	);
}
