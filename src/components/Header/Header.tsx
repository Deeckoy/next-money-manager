import HeaderAvatar from '@/components/Header/HeaderAvatar/HeaderAvatar';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<input type='text' placeholder={'Find wallet, transaction, anything'} />

			<HeaderAvatar />
		</header>
	);
}
