'use client';

import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

import styles from './HeaderAvatar.module.scss';

export default function HeaderAvatar() {
	return (
		<Avatar.Root className={`${styles.avatar__root}`}>
			<Avatar.Image
				className={`${styles.avatar__image}`}
				src='https://images.unsplash.com/photo-22221492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
				alt='Colm Tuite'
			/>
			<Avatar.Fallback className={`${styles.avatar__fallback}`} delayMs={600}>
				CT
			</Avatar.Fallback>
		</Avatar.Root>
	);
}
