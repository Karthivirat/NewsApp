import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const NewsDetailsScreen = props => {

  const dispatch = useDispatch();

  const { articleUrl } = props.route.params;
  const article = useSelector(state => state.news.articles.articles.find(article => article.url === articleUrl));

  const isFav = useSelector(state => state.news.favorites.some(article => article.url === article.url));

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground source={{ uri: article.urlToImage }} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons
              name={isFav ? 'favorite' : 'favorite-border'}
              color="#72bcd4" size={24}
              onPress={() => {
                dispatch(newsAction.toggleFavorites(article.url))
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{article.content}{props.content && props.content.length > 1000 ? props.content.slice(0, 1000) + '...' : props.content}</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  title: {
    
    fontSize: 24
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  author: {
     
    fontSize: 20,
    color: 'white'
  },
  content: {
    margin: 10
  },
  contentText: {
    fontSize: 20,
     
  }
});

export default NewsDetailsScreen;
