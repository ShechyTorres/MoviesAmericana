import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

// Vistas y estilos importados
import styles from './styles';
import MoviesRecommended from '../Components/MoviesRecommended';
import MoviesToRated from '../Components/MoviesToRated';
import MoviesUpcoming from '../Components/MoviesUpcoming';

const Home = (props) => {
  // Tema y colores
  const { colors } = useTheme();
  const theme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={theme == 'dark' ? styles.fondoDark : styles.fondo}>
        <View style={styles.view1}>
          <Text style={styles.textHome}>Hello, what do you want to watch ?</Text>
          {/* Buscador */}
          <View style={theme == 'dark' ? styles.viewBuscadorDark : styles.viewBuscador}>
            <Icon name="search" size={15} style={styles.iconBuscador} />
            <TextInput
              style={styles.buscador}
              placeholder={'Search'}
              placeholderTextColor={colors.card}
            />
          </View>
        </View>

        <View style={theme == 'dark' ? styles.fondo2Dark : styles.fondo2}>
          {/* Vistas importadas como componentes */}
          <ScrollView>
            <MoviesRecommended navigation={props.navigation} />
            <MoviesToRated navigation={props.navigation} />
            <MoviesUpcoming navigation={props.navigation} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
