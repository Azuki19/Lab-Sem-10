import styles from './Product.css';

export enum ProductAttribute {
	'id' = 'uid',
	'title' = 'totle',
	'price' = 'price',
	'category' = 'category',
	'description' = 'description',
	'image' = 'image',
	'ratingcount' = 'ratingcount',
	'ratingrate' = 'ratingrate',
}

class Product extends HTMLElement {
	uid?: number;
	totle?: string;
	price?: number;
	category?: string;
	description?: string;
	image?: string;
	ratingcount?: number;
	ratingrate?: number;

	static get observedAttributes() {
		const attrs: Record<ProductAttribute, null> = {
			uid: null,
			image: null,
			totle: null,
			description: null,
			category: null,
			price: null,
			ratingcount: null,
			ratingrate: null,
		};
		return Object.keys(attrs);
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

				case ProductAttribute.ratingcount:
					this.ratingcount = newValue ? Number(newValue) : undefined;
					break;

				case ProductAttribute.ratingrate:
					this.ratingrate = newValue ? Number(newValue) : undefined;
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
        <p>About the product: ${this.description}</p>
        <h4>${this.category}</h4>
				<p>Rating: rate: ${this.ratingcount} count: ${this.ratingrate}</p>
        <h2>Price: $${this.price}</h2>
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
