export default function courseReducer(state = [],action){
	switch(action.type){
		case 'LOAD_FEATURE_PRODUCTS':
			return[...state,
			Object.assign({},action.featureProducts)
			];

		default:
		 return state;
	}
}