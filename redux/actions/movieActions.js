import {
  FETCHING_MOVIE_FAILURE,
  FETCHING_MOVIE_REQUEST,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_REFRESH_SUCCESS
} from './types.js'

export const fetchingMovieRequest = () => {
  return {
    type : FETCHING_MOVIE_REQUEST
  }
}

export const fetchingMovieSuccess = (json) => {
  return {
    type : FETCHING_MOVIE_SUCCESS,
    payload : json
  }
}

export const fetchingMovieFailure = (error) => {
  return {
    type : FETCHING_MOVIE_FAILURE,
    payload : error
  }
}

export const onRefreshSuccess = (json) => {
  return {
    type : FETCHING_REFRESH_SUCCESS,
    payload : json
  }
}

export const fetchMovieNowPlaying = (page = 1) => {
  return async dispatch => {
    dispatch(fetchingMovieRequest())
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`,
      );
      let json = await response.json()
      dispatch(fetchingMovieSuccess(json.results))
    } catch (e) {
      dispatch(fetchingMovieFailure(e))
    }
  }
}

export const refreshMovieNowPlaying = (page = 1) => {
  return async dispatch => {
    dispatch(fetchingMovieRequest())
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`,
      );
      let json = await response.json()
      dispatch(onRefreshSuccess(json.results))
    } catch (e) {
      dispatch(fetchingMovieFailure(e))
    }
  }
}