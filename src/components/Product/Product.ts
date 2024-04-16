import styles from './Product.css';

export enum ProductAttribute {
	'id' = 'uid',
	'title' = 'totle',
	'price' = 'price',
	'category' = 'category',
	'description' = 'description',
	'image' = 'image',
}

class Product extends HTMLElement {
	uid?: number;
	totle?: string;
	price?: number;
	category?: string;
	description?: string;
	image?: string;

	static get observedAttributes() {
		return Object.keys(ProductAttribute);
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			switch (propName) {
				case ProductAttribute.id:
					this[propName] = parseInt(newValue);
					break;

				case ProductAttribute.price:
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
        <p>${this.description}</p>
        <h4>${this.category}</4>
        <h2>${this.price}</h2>
        </section>
      `;
		}

		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProduct);
	}
}

customElements.define('product-card', Product);
export default Product;
