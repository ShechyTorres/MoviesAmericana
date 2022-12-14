import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// API
import { POSTER_IMG_URL } from '../../../config';
import { GET_API } from '../../../services/API';

// Vistas y estilos importados
import styles from './styles';
import MoviesRecommended from '../MoviesRecommended';

const Details = (props) => {
  const { navigation } = props;
  // Tema
  const theme = useColorScheme();

  // Manejo de estados con useState
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [favorite, setFavorite] = useState(true);

  // Obtiene los datos una vez, segun el Id.
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET_API(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      console.log(data);
      setLoading(false);
    };
    getDetails();
  }, []);

  // Generos de las peliculas
  const getGenre = () => {
    return details.genres.map((genre) => (
      <View style={styles.getView}>
        <Text style={styles.getText}>{genre.name},</Text>
      </View>
    ));
  };

  // Compañias de producción
  const getProductionCompanies = () => {
    return details.production_companies.map((production_companie) => (
      <View style={styles.getView}>
        <Image
          source={{ uri: `${POSTER_IMG_URL}${production_companie.logo_path}` }}
          style={styles.iconProduc}
          resizeMode="contain"
        />
        <Text style={styles.getTextProduction}>{production_companie.name},</Text>
      </View>
    ));
  };

  // Pais de producción
  const getProductionCountries = () => {
    return details.production_countries.map((production_country) => (
      <View style={styles.getView}>
        <Text style={styles.getText}>{production_country.name},</Text>
      </View>
    ));
  };

  // Lenguaje
  const getLanguages = () => {
    return details.spoken_languages.map((spoken_language) => (
      <View style={styles.getView}>
        <Text style={styles.getText}>{spoken_language.english_name}</Text>
      </View>
    ));
  };

  // Boton atrás
  const back = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={theme == 'dark' ? styles.fondoDark : styles.fondo}>
        <ScrollView>
          {/* Muestra el indicador hasta quen los detalles. */}
          {loading ? (
            <ActivityIndicator size={50} color={'#fff'} />
          ) : (
            <View>
              {/* Fondo Poster */}
              <View>
                <Image
                  source={{ uri: `${POSTER_IMG_URL}${details.backdrop_path}` }}
                  style={styles.fondoPoster}
                  resizeMode="contain"
                />
              </View>

              {/* Boton back */}
              <View style={styles.viewBack}>
                <TouchableOpacity onPress={back}>
                  <Icon name="arrow-back" size={30} style={styles.white} />
                </TouchableOpacity>
              </View>

              {/* Boton favorite */}
              <View style={styles.viewFavorite}>
                <TouchableOpacity
                  onPress={() => {
                    setFavorite(!favorite);
                  }}>
                  {favorite ? (
                    <Icon name="favorite-border" size={30} style={styles.white} />
                  ) : (
                    <Icon name="favorite" size={30} style={styles.white} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.view1}>
                {/* Titulo de Pelicula */}
                <View style={styles.viewDetailTitle}>
                  <Text style={styles.detailTitle}>{details.original_title}</Text>
                  <Icon name="5k" size={30} color="#808080" />
                </View>

                {/* Boton direccionador a la pagina web de la pelicula */}
                <View style={styles.viewDetailTitle}>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(details.homepage);
                    }}
                    style={styles.btnWatch}>
                    <Text style={styles.btnDetail}>Watch Now</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.white}>Popularity:</Text>
                    <Text style={styles.white}>{details.popularity}</Text>
                  </View>
                </View>

                {/* Detalle de pelicula */}
                <Text style={theme == 'dark' ? styles.overviewDetailDark : styles.overviewDetail}>
                  {details.overview}
                </Text>

                {/* Compañia de produccion */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetailCompanies}>Studios </Text>
                  <ScrollView horizontal={true}>{getProductionCompanies()}</ScrollView>
                </View>

                {/* Genero */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetail}>Genre </Text>
                  <ScrollView horizontal={true}>{getGenre()}</ScrollView>
                </View>

                {/* Fecha */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetail}>Release </Text>
                  <Text style={styles.white}>{details.release_date}</Text>
                </View>

                {/* Duración */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetail}>Duration </Text>
                  <Text style={styles.white}>{details.runtime} min</Text>
                </View>

                {/* Lenguaje */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetailCompanies}>Languages </Text>
                  <ScrollView horizontal={true}>{getLanguages()}</ScrollView>
                </View>

                {/* Pais de produccion */}
                <View style={styles.rowOptionDetail}>
                  <Text style={styles.optionDetailCompanies}>Production Country </Text>
                  <ScrollView horizontal={true}>{getProductionCountries()}</ScrollView>
                </View>

                {/* Peliculas similares */}
                <MoviesRecommended
                  title={'SIMILAR MOVIES'}
                  navigation={props.navigation}
                  url={`/movie/${props.route.params.movieId}/similar`}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
