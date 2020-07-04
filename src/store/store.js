import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";



const rootReducer = combineReducers({

});


export default function configureStore(preloadedState) {
	const middleware = [thunk];
	const middlewareEnhancer = applyMiddleware(...middleware);

	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(middlewareEnhancer);

	const store = createStore(rootReducer, preloadedState, enhancer);
	return store;
}
