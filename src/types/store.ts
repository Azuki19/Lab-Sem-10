import { Product } from './products';
import { Shopping } from './shoppings';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: Product[];
	shoppingitems: Shopping[];
};

export enum productActions {
	'GETPRODUCTS' = 'GETPRODUCTS',
}
export enum shoppingItemsActions {
	'GETSHOPPINGITEMS' = 'GETSHOPPINGITEMS',
	'SAVESHOPPINGITEMS' = 'SAVESHOPPINGITEMS',
}

export interface GetProductAction {
	action: productActions.GETPRODUCTS;
	payload: Product[];
}
export interface GetshoppingItemsAction {
	action: shoppingItemsActions.GETSHOPPINGITEMS;
	payload: Shopping[];
}
export interface SaveshoppingItemsAction {
	action: shoppingItemsActions.SAVESHOPPINGITEMS;
	payload: Shopping;
}

export type Actions = GetProductAction | GetshoppingItemsAction | SaveshoppingItemsAction;
