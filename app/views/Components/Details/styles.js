import { StyleSheet } from 'react-native';

// Tamaños responsive del width y el height
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Tamaño responsive de letras
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  // Fondo
  fondo: {
    flex: 1,
    backgroundColor: '#2C3848',
  },
  fondoDark: {
    flex: 1,
    backgroundColor: '#000',
  },
  fondoPoster: {
    height: hp('30%'),
  },

  // Letra blanca
  white: {
    color: '#fff',
  },

  // Boton back
  viewBack: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    left: 30,
  },

  // Boton favorite
  viewFavorite: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    top: 30,
    right: 15,
  },

  // Contenedor del detalle
  view1: {
    flexDirection: 'column',
    marginHorizontal: wp('7%'),
  },
  viewDetailTitle: {
    paddingTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Titulo del detalle
  detailTitle: {
    color: '#fff',
    fontSize: RFValue(20),
    fontWeight: 'bold',
    width: wp('60%'),
  },

  // Botón Ver Ahora
  btnWatch: {
    backgroundColor: '#808080',
    borderRadius: 20,
  },
  btnDetail: {
    color: '#fff',
    width: wp('30%'),
    fontSize: RFValue(13),
    textAlign: 'center',
    padding: 10,
    textTransform: 'uppercase',
  },

  // Detalle de pelicula
  overviewDetail: {
    color: '#909090',
    fontSize: RFValue(15),
    paddingVertical: 30,
  },
  overviewDetailDark: {
    color: '#fff',
    fontSize: RFValue(15),
    paddingVertical: 30,
  },
  rowOptionDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionDetailCompanies: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(15),
    width: 100,
  },
  optionDetail: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(15),
  },

  // Genero de pelicula y otros detalles
  getView: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  getText: {
    color: '#fff',
    fontSize: RFValue(13),
  },
  getTextProduction: {
    color: '#fff',
    fontSize: RFValue(13),
    width: 100,
  },
  iconProduc: {
    backgroundColor: '#fff',
    width: wp('20%'),
    height: hp('10%'),
  },
});

export default styles;
