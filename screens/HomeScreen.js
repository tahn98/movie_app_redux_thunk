import React, { useEffect, useState, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RefreshControl, ActivityIndicator, View, FlatList } from 'react-native'
import { fetchMovieNowPlaying, refreshMovieNowPlaying } from '../redux/actions/movieActions'
import MovieCard from '../components/MovieCard'

const HomeScreen = ({ navigation }) => {
  const [page, setPage] = useState(2)

  const { nowPlaying, errorMessage, isFetching } = useSelector(state => ({
    nowPlaying: state.nowPlaying,
    errorMessage: state.errorMessage,
    isFetching: state.isFetching
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieNowPlaying())
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchMovieNowPlaying(page))
    setPage(page + 1)
  }

  const onRefresh = () => {
    dispatch(refreshMovieNowPlaying())
  }

  const renderLoading = () => {
    if (!isFetching) return null
    if (nowPlaying.length == 0) return null
    return (
      <ActivityIndicator size='large' style={{ justifyContent: 'center' }} />
    )
  }

  let content = <FlatList
    data={nowPlaying}
    keyExtractor={movie => movie.id.toString()}
    renderItem={({ item }) => {
      return <MovieCard
        navigation={navigation}
        id={item.id}
        title={item.title}
        overview={item.overview}
        poster={item.poster_path}
        vote={item.vote_average} />
    }}
    ListFooterComponent={renderLoading}
    onEndReachedThreshold={0.5}
    onEndReached={handleLoadMore}
    refreshControl={
      <RefreshControl
        refreshing={isFetching}
        onRefresh={onRefresh}
      />
    }>
  </FlatList>

  return <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
    {content}
  </View>
}

HomeScreen.headerOptions = () => {
  return {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#000',
      fontFamily: 'monospace',
    },

  }
}

export default HomeScreen;