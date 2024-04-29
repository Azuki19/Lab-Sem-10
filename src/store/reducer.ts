import { Actions, AppState, productActions, ShoppingActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;
	console.log(action, payload);
	switch (action) {
		case productActions.GETPRODUCTS:
			return {
				...currentState,
				products: payload,
			};
		case ShoppingActions.GETSHOPPING:
			return {
				...currentState,
				Shopping: payload,
			};

		default:
			return currentState;
	}
};
