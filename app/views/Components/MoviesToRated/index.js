import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

/* API */
import { GET_API } from '../../../services/API';
import { POSTER_IMG_URL } from '../../../config';

// Estilos importados
import styles from '../MoviesRecommended/styles';

const MoviesToRated = (props) => {
  // Manejo de estados con useState
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // Efecto similar a 'componentDidMount' obtiene los datos, una vez.
  useEffect(() => {
    const getMovies = async () => {
      const data = await GET_API(props.url);
      setMovies(data.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    // Peliculas mas valoradas
    <View>
      <View style={styles.view2}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{props.title}</Text>
          <TouchableOpacity>
            <Text style={styles.subTitle}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Muestra el indicador hasta que cargue la lista. */}
        {loading ? (
          <ActivityIndicator size={50} color={'#fff'} />
        ) : (
          <FlatList
            horizontal
            data={movies}
            keyExtractor={({ id }, index) => id}
            renderItem={(item) => PosterMovies(item, props)}
          />
        )}
      </View>
    </View>
  );
};

// Poster de peliculas
const PosterMovies = ({ item }, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('Details', { movieId: item.id });
      }}>
      <Image
        source={{ uri: `${POSTER_IMG_URL}${item.poster_path}` }}
        style={styles.poster}
        resizeMode="contain"
        inverted={true}
      />
      <Text style={styles.titlePoster}>{item.original_title}</Text>
      <Text style={styles.titlePoster}>Votes: {item.vote_count}</Text>
    </TouchableOpacity>
  );
};

export default MoviesToRated;
