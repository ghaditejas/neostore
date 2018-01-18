export function loadFeatureProducts(featureProducts){
	console.log(featureProducts);
	return {type:'LOAD_FEATURE_PRODUCTS', featureProducts }
}

export function loadfeature(){
	return function(dispatch){
		return fetch('http://180.149.245.182:3008/api/products')
			.then(featureProducts =>featureProducts.json())
			.then(function(data){
				dispatch(loadFeatureProducts(data));
			})
		}
	}