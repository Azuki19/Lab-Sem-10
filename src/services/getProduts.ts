export const productData = async () => {
	try {
		const data = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		return data;
	} catch (error) {
		console.error('Error al obtener los productos', error);
		return 'Unknown';
	}
};
export default productData;
