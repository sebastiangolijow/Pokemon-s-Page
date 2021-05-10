import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./reducer/reducer";
import thunk from "redux-thunk";

// export const store = createStore(
//   Reducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   )
// );




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Reducer,
    composeEnhancers(applyMiddleware(thunk))
);