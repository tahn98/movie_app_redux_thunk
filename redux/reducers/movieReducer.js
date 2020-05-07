import {
  FETCHING_MOVIE_FAILURE,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_MOVIE_REQUEST,
  FETCHING_REFRESH_SUCCESS
} from '../actions/types'

const initialState = {
  isFetching: false,
  errorMessage: '',
  nowPlaying: []
}

const nowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case FETCHING_MOVIE_SUCCESS:
      let data = action.payload
      return { ...state, isFetching: false, nowPlaying: [...state.nowPlaying, ...data] }
    case FETCHING_MOVIE_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload }
    case FETCHING_REFRESH_SUCCESS:
      return { ...state, isFetching: false, nowPlaying: action.payload }
    default:
      return state
  }
}

export default nowPlayingReducer