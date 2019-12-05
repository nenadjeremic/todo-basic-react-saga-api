import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/index";
import { rootSaga } from '../sagas';


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;


// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware, myLogger } from "../middleware";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer, 
//     storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, logger, thunk))
// );
// export default store;