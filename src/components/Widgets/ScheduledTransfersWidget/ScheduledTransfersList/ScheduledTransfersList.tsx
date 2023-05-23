import ScheduledTransfersItem from '@/components/Widgets/ScheduledTransfersWidget/ScheduledTransfersItem/ScheduledTransfersItem';

export default function ScheduledTransfersList() {
	const arr = new Array(9).fill(0);

	return (
		<>
			{arr.map((item, index) => (
				<ScheduledTransfersItem key={index} />
			))}
		</>
	);
}
