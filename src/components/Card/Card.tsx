import styles from './Card.module.scss';

export default function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.card__wrapper}>
				<div className={styles.card__head}>
					<h3 className={styles.card__title}>Main company account</h3>
				</div>

				<div className={styles.card__body}>
					<h3 className={styles.card__number}>**** **** **** 3456</h3>
				</div>

				<div className={styles.card__footer}>
					<div className={styles.card__info__wrapper}>
						<div className={styles.card__info}>
							<p className={styles.info__name}>Exp date</p>
							<p className={styles.info__value}>10/25</p>
						</div>

						<div className={styles.card__info}>
							<p className={styles.info__name}>Cvv</p>
							<p className={styles.info__value}>***</p>
						</div>
					</div>

					<div className={styles.card__balance}>
						<p className={styles.balance__name}>Available amount</p>
						<p className={styles.balance__value}>$12 345</p>
					</div>
				</div>
			</div>

			<div className={styles.card__decor_1}></div>
			<div className={styles.card__decor_2}></div>
			<div className={styles.card__decor_3}></div>
		</div>
	);
}
