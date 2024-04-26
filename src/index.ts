import * as components from './components/indexPadre';
import Product, { ProductAttribute } from './components/Product/Product';
import { productData } from './data/dataFetch';

class AppContainer extends HTMLElement {
	product: Product[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	render() {
		// appState.characters.forEach((character: any) =>{
		// 		const card = this.ownerDocument.createElement('my-card') as Card;
		// 		card.setAttribute(CardProps.name, character.name)
		// 		card.setAttribute(CardProps.birth_year, character.birth_year)
		// 		card.setAttribute(CardProps.gender, character.gender)
		// 		card.setAttribute(CardProps.height, character.height)
		// 		this.shadowRoot?.appendChild(card)
		// })
	}
}
