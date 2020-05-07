import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nowPlayingReducer from './reducers/movieReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const configureStore = createStoreWithMiddleware(nowPlayingReducer)

export default configureStore