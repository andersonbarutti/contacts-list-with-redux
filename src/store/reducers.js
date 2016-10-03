import { combineReducers } from 'redux'
import location from './location'
import { reducer as form } from 'redux-form'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    form,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
