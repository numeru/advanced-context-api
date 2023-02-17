import { ModalActionType, useModalDispatch } from '@/src/contexts/ModalContext';

export default function Home() {
	const modalDispatch = useModalDispatch();

	return (
		<div>
			<button
				type="button"
				onClick={() =>
					modalDispatch({
						type: ModalActionType.OPEN,
						Component: <CustomModal />,
					})
				}
			>
				커스텀 모달 열기
			</button>
		</div>
	);
}

function CustomModal() {
	const modalDispatch = useModalDispatch();

	return (
		<div>
			<span>커스텀 모달</span>
			<button
				type="button"
				onClick={() =>
					modalDispatch({
						type: ModalActionType.CLOSE,
					})
				}
			>
				닫기
			</button>
		</div>
	);
}
