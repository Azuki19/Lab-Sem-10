import Product, { ProductAttribute } from '../components/Product/Product';
import { addObserver, appState, dispatch } from '../store/index';
import { GetProductActiondata } from '../store/actions';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await GetProductActiondata();
		dispatch(action);
		const Storage = JSON.stringify(appState);
		localStorage.setItem('Appstate', Storage);
	}
	render() {
		const localstorage: any = window.localStorage;
		const local = JSON.parse(localstorage.getItem('Appstate'));

		local.products.forEach((products: any) => {
			const card = this.ownerDocument.createElement('product-card') as Product;
			card.setAttribute(ProductAttribute.image, products.image);
			card.setAttribute(ProductAttribute.title, products.title);
			card.setAttribute(ProductAttribute.description, products.description);
			card.setAttribute(ProductAttribute.category, products.category);
			card.setAttribute(ProductAttribute.price, JSON.stringify(products.price));
			card.setAttribute(ProductAttribute.ratingcount, JSON.stringify(products.rating.rate));
			card.setAttribute(ProductAttribute.ratingrate, JSON.stringify(products.rating.count));
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;
