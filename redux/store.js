import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import nowPlayingReducer from './reducers/movieReducer'
import relatedReducer from './reducers/relatedReducer'

const reducer = combineReducers({
  nowPlayingReducer: nowPlayingReducer,
  relatedReducer: relatedReducer
});

const configureStore = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default configureStore