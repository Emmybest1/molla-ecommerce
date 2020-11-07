import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'
import composeEnhancers from './utils/utils'
import createSagaMiddlerware from 'redux-saga';
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddlerware()

const middlewares = [sagaMiddleware, logger]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store