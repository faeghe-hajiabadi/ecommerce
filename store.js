import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {exampleInitialState} from './reducers/product'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  // if (process.env.NODE_ENV !== 'production') {
  //   const { composeWithDevTools } = require('redux-devtools-extension')
  //   return composeWithDevTools(applyMiddleware(...middleware))
  // }
  return applyMiddleware(...middleware)
}

function configureStore (initialState = exampleInitialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
