export function loadFeatureProducts(featureProducts){
	console.log(featureProducts);
	return {type:'LOAD_FEATURE_PRODUCTS', featureProducts }
}

export function loadBanners(banners){
	console.log(banners);
	return {type:'LOAD_BANNER', banners }
}

export function loadfeature(){
	return function(dispatch){
		return fetch('http://180.149.245.182:3008/api/products?filter=%7B%22limit%22%3A%226%22%2C%22include%22%3A%22images%22%7D')
			.then(featureProducts =>featureProducts.json())
			.then(function(data){
				dispatch(loadFeatureProducts(data));
			})
		}
	}

export function loadbanner(){
	return function(dispatch){
		return fetch('http://180.149.245.182:3008/api/images?filter=%7B%22limit%22%3A%223%22%2C%22inlcude%22%3A%22product%22%7D')
			.then(banner =>banner.json())
			.then(function(data){
				dispatch(loadBanners(data));
			})
		}
	}