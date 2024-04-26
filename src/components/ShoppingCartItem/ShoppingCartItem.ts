import styles from './ShoppingCartItem.css';

export enum ShopppingAttribute {
	'id' = 'uid',
	'image' = 'image',
	'title' = 'totle',
	'price' = 'price',
}

class Shopping extends HTMLElement {
	uid?: number;
	image?: string;
	totle?: string;
	price?: number;

	static get observedAttributes() {
		return Object.keys(ShopppingAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case ShopppingAttribute.id:
					this[propName] = parseInt(newValue);
					break;

				case ShopppingAttribute.price:
					this[propName] = parseInt(newValue);
					break;
			}
		}

		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <section class='section'>
        <img src="${this.image}"><img>
        <h2>${this.totle}</h2>
        <h2>${this.price}</h2>
        </section>
      `;
		}

		const cssShopping = this.ownerDocument.createElement('style');
		cssShopping.innerHTML = styles;
		this.shadowRoot?.appendChild(cssShopping);
	}
}

customElements.define('shopping-cart', Shopping);
export default Shopping;
