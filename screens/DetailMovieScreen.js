import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { fetchRelatedMovie, clearRelatedMovie } from '../redux/actions/movieActions'

const DetailMovieScreen = ({ route }) => {
  const { itemId } = route.params
  const nowPlaying = useSelector(state => state.nowPlayingReducer.nowPlaying)
  const { related, errorMessage, isFetching } = useSelector(state => state.relatedReducer)

  const currentMovie = nowPlaying.filter((item) => {
    return item.id == itemId
  })[0]
  const movieRelated = related.slice(0, 5)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRelatedMovie(itemId))
  }, [])

  useEffect(() => {
    return () => {
      dispatch(clearRelatedMovie())
    }
  }, [])

  return <ScrollView style={{ flex: 1 }}>
    <Image
      resizeMode='cover'
      style={styles.backdrop}
      source={{ uri: `https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}` }}
    />
    <Text style={styles.title}>
      {currentMovie.title}
    </Text>
    <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
      <View>
        <Text style={styles.vote}>
          {currentMovie.vote_count}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
          Vote Count
        </Text>
      </View>

      <View>
        <AntDesign name='star' size={30}></AntDesign>
        <Text>{currentMovie.vote_average}/10</Text>
      </View>

      <View>
        <Text style={styles.polularity}>
          {currentMovie.popularity}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
          Popularity
        </Text>
      </View>
    </View>
    <Text style={{ padding: 20, fontSize: 15 }}>
      {currentMovie.overview}
    </Text>

    <Text style={styles.relatedTitle}>
      Related Movie
    </Text>

    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={movie => movie.id.toString()}
      horizontal={true}
      data={movieRelated}
      renderItem={({ item }) => {
        return <View>
          <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
        </View>
      }}
    />

    <View style={{ height: 30 }} />
  </ScrollView>
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 150,
    height: 180,
    marginRight: 5,
    marginLeft: 5,
  },
  backdrop: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 280,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 24,
    position: 'relative',
    top: -30,
  },
  relatedTitle: {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 8,
  },
  vote: {
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
  },
  voteTitle: {
    fontFamily: 'monospace',
    fontSize: 25,
  },
  polularity: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  }
})

DetailMovieScreen.headerOptions = () => {
  return {
    title: 'Detail',
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

export default DetailMovieScreen;