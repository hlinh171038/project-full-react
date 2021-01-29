import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from './redux/rootReducer'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(logger,thunk)))
