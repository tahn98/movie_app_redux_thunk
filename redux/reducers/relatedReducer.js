import {
    FETCHING_MOVIE_FAILURE,
    FETCHING_MOVIE_REQUEST,
    FETCHING_RELATED_MOVIE_SUCCESS,
    CLEAR_RELATED_MOVIE,
  } from '../actions/types'
  
  const initialState = {
    isFetching: false,
    errorMessage: '',
    related: []
  }
  
  const relatedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_MOVIE_REQUEST:
        return { ...state, isFetching: true }
      case FETCHING_RELATED_MOVIE_SUCCESS:
        return { ...state, isFetching: false, related: action.payload }
      case FETCHING_MOVIE_FAILURE:
        return { ...state, isFetching: false, errorMessage: action.payload }
      case CLEAR_RELATED_MOVIE:
        return { ...state, related : []}
      default:
        return state
    }
  }
  
  export default relatedReducer