import { Product } from './products';
import { Shopping } from './shoppings';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: Product[];
	Shopping: Shopping[];
};

export enum productActions {
	'GETPRODUCTS' = 'GETPRODUCTS',
}
export enum ShoppingActions {
	'GETSHOPPING' = 'GETSHOPPING',
	'SAVESHOPPING' = 'SAVESHOPPING',
}

export interface GetProductAction {
	action: productActions.GETPRODUCTS;
	payload: Product[];
}
export interface GetShoppingAction {
	action: ShoppingActions.GETSHOPPING;
	payload: Shopping[];
}
export interface SaveShoppingAction {
	action: ShoppingActions.SAVESHOPPING;
	payload: Shopping;
}

export type Actions = GetProductAction | GetShoppingAction | SaveShoppingAction;
