import { productData } from '../services/getProduts';
import { Product } from '../types/products';
import { Shopping } from '../types/shoppings';
import {
	productActions,
	ShoppingActions,
	GetProductAction,
	GetShoppingAction,
	SaveShoppingAction,
} from '../types/store';

export const GetProductActiondata = async (): Promise<GetProductAction> => {
	const data = await productData();
	return {
		action: productActions.GETPRODUCTS,
		payload: data,
	};
};
export const GetShoppingActiondata = async (): Promise<GetShoppingAction> => {
	const data = await productData();
	return {
		action: ShoppingActions.GETSHOPPING,
		payload: data,
	};
};
export const SaveshoppingItemsActiondata = (product: Shopping) => {
	return {
		action: ShoppingActions.SAVESHOPPING,
		payload: product,
	};
};
