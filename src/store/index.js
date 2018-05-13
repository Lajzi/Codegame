import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducers/index";



const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  
  let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
  // let yourApp = combineReducers(reducers)
  const store = createStoreWithMiddleware(rootReducer)

  //const store = createStore(rootReducer);
export default store;