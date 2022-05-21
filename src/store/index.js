import {applyMiddleware, combineReducers, createStore} from "redux";
import {peoplesReducer} from "./counter/peoplesReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()
export const rootStore = combineReducers({
  peoples: peoplesReducer
})

export const store = createStore(rootStore, applyMiddleware(sagaMiddleware))




sagaMiddleware.run(rootSaga)

