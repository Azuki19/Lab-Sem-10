export const productData = async () => {
	try {
		const product = await fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => console.log(json));
	} catch (error) {
		console.error('Error al obtener los productos', error);
		return 'Unknown';
	}
};
export default productData;
