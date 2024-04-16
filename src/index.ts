import * as components from './components/indexPadre';
import Product, { ProductAttribute } from './components/Product/Product';
import { productData } from './data/dataFetch';

class AppContainer extends HTMLElement {
  product: Product[] = [];

  constructor() {
		super();
		this.attachShadow({ mode: 'open' });

    productData.forEach((thing) => {
			const ProductCard = this.ownerDocument.createElement('user-post') as UserPost;

			ProductCard.setAttribute(ProductAttribute.uid, String(thing.id));
			ProductCard.setAttribute(ProductAttribute.totle, thing.title);
			ProductCard.setAttribute(ProductAttribute.price, thing.price);

      this. product.push(ProductCard);
		});