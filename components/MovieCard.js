import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MovieCard = ({navigation, id, title, overview, poster, vote }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Detail', {itemId : id})}>
        <View style={styles.innerBackground} />
        <View style={[styles.row, styles.container]}>
          <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${poster}` }} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={styles.overview}
              numberOfLines={3}>{overview}
            </Text>
          </View>
        </View>
        <View style={[styles.vote, styles.row]}>
          <AntDesign name='star' size={20}></AntDesign>
          <Text style={{ marginLeft: 5, fontFamily: 'monospace' }}>{vote}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  innerBackground: {
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
    height: 150,
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
  container: {
    position: 'absolute',
  },
  overview: {
    paddingRight: 20,
    fontSize: 15,
    lineHeight: 18,
  },
  image: {
    marginRight: 5,
    marginLeft: 15,
    marginTop: 15,
    width: 120,
    height: 160,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  vote: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: -5,
    position: 'absolute',
    borderRadius: 20,
    width: 80,
    height: 40,
    backgroundColor: '#8AD0D6',
  }
})

export default MovieCard