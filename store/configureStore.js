import {createStore} from 'redux';
import rootReducer from '../reducers'
// import reduxImmmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
	return createStore(rootReducer,
		initialState,
		 //applyMiddleware(reduxImmmutableStateInvariant())
		);
}