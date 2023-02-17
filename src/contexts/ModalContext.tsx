import { createContext, useContext, useReducer } from 'react';

type ValueOf<T> = T[keyof T];

type ModalState = {
	isOpen: boolean;
	Component: {
		render: () => React.ReactNode;
	};
};

export const ModalActionType = {
	OPEN: 'OPEN_MODAL',
	CLOSE: 'CLOSE_MODAL',
} as const;

type ModalAction = { type: ValueOf<typeof ModalActionType>; Component?: React.ReactNode };

function reducer(state: ModalState, action: ModalAction): ModalState {
	switch (action.type) {
		case ModalActionType.OPEN:
			return {
				...state,
				isOpen: true,
				Component: {
					render: () => action.Component,
				},
			};
		case ModalActionType.CLOSE:
			return {
				...state,
				isOpen: false,
				Component: {
					render: () => null,
				},
			};
		default:
			throw new Error('Unhandled action');
	}
}

type ModalDispatch = React.Dispatch<ModalAction>;

const ModalStateContext = createContext<ModalState | null>(null);
const ModalDispatchContext = createContext<ModalDispatch | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		isOpen: false,
		Component: {
			render: () => null,
		},
	});

	return (
		<ModalStateContext.Provider value={state}>
			<ModalDispatchContext.Provider value={dispatch}>
				{state.isOpen && state.Component.render()}
				{children}
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	);
};

export function useModalState() {
	const state = useContext(ModalStateContext);
	if (!state) throw new Error('Cannot find ModalStateContext');
	return state;
}

export function useModalDispatch() {
	const dispatch = useContext(ModalDispatchContext);
	if (!dispatch) throw new Error('Cannot find ModalDispatchContext');
	return dispatch;
}
