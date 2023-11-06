"use client"
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware: any = createSagaMiddleware();

const middleware = [sagaMiddleware];

const configureStore = (initialState : any)=> {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )

    sagaMiddleware.run(rootSaga);

    return store;
}

const store = configureStore({});

export default store;
