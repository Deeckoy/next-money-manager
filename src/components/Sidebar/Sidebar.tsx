'use client';

import {
	ChartPieIcon,
	ClockIcon,
	Cog6ToothIcon,
	DocumentTextIcon,
	InformationCircleIcon,
	RectangleGroupIcon,
	Square3Stack3DIcon,
	WalletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
	const pathname = usePathname();

	const isLinkActive = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebar__head}>
				<h3 className={styles.sidebar__logo}>Money Manager</h3>
			</div>

			<div className={styles.sidebar__body}>
				<div className={styles.sidebar_top}>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/') ? styles.sidebar__link_active : ''
						}`}
						href={'/'}>
						<RectangleGroupIcon className={`${styles.sidebar__link__icon}`} />
						Overview
					</Link>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/transactions') ? styles.sidebar__link_active : ''
						}`}
						href={'/transactions'}>
						<Square3Stack3DIcon className={`${styles.sidebar__link__icon}`} />
						Transactions
					</Link>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/wallets') ? styles.sidebar__link_active : ''
						}`}
						href={'/wallets'}>
						<WalletIcon className={`${styles.sidebar__link__icon}`} />
						Wallets
					</Link>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/planning') ? styles.sidebar__link_active : ''
						}`}
						href={'/planning'}>
						<ClockIcon className={`${styles.sidebar__link__icon}`} />
						Planning
					</Link>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/analysis') ? styles.sidebar__link_active : ''
						}`}
						href={'/analysis'}>
						<ChartPieIcon className={`${styles.sidebar__link__icon}`} />
						Analysis
					</Link>
					<Link
						className={`${styles.sidebar__link} ${styles.sidebar__link_disabled} ${
							isLinkActive('/help') ? styles.sidebar__link_active : ''
						}`}
						href={'/help'}
						aria-disabled={true}>
						<InformationCircleIcon className={`${styles.sidebar__link__icon}`} />
						Help
					</Link>
					<Link
						className={`${styles.sidebar__link} ${styles.sidebar__link_disabled} ${
							isLinkActive('/changelog') ? styles.sidebar__link_active : ''
						}`}
						href={'/changelog'}
						aria-disabled={true}>
						<DocumentTextIcon className={`${styles.sidebar__link__icon}`} />
						Changelog
					</Link>
				</div>

				<div className={styles.sidebar_bottom}>
					<Link
						className={`${styles.sidebar__link} ${
							isLinkActive('/settings') ? styles.sidebar__link_active : ''
						}`}
						href={'/settings'}>
						<Cog6ToothIcon className={`${styles.sidebar__link__icon}`} />
						Settings
					</Link>
				</div>
			</div>
		</aside>
	);
}
