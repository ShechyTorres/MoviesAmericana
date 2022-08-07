import { StyleSheet } from 'react-native';

// Tamaños responsive del width y el height
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Tamaño responsive de letras
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  // Primer fondo
  fondo: {
    flex: 1,
    backgroundColor: '#5CA0D3',
  },
  fondoDark: {
    flex: 1,
    backgroundColor: '#2C3848',
  },

  // Texto de bienvenida
  view1: {
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('13%'),
  },
  textHome: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },

  // Buscador
  viewBuscador: {
    flexDirection: 'row',
    backgroundColor: '#8DBDE0',
    borderColor: '#000',
    height: hp('5%'),
    borderRadius: 50,
    marginTop: hp('2%'),
  },
  viewBuscadorDark: {
    flexDirection: 'row',
    backgroundColor: '#5CA0D3',
    borderColor: '#000',
    height: hp('5%'),
    borderRadius: 50,
    marginTop: hp('2%'),
  },
  iconBuscador: {
    marginTop: wp('2.5%'),
    marginLeft: wp('4%'),
    marginRight: wp('2%'),
    height: 15,
    width: 15,
    color: '#fff',
  },
  buscador: {
    fontSize: 15,
    backgroundColor: 'transparent',
    height: hp('5%'),
    width: wp('60%'),
  },
  txtBuscador: {
    color: '#fff',
  },

  // Segundo fondo redondeado
  fondo2: {
    flex: 1,
    backgroundColor: '#2C3848',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  fondo2Dark: {
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default styles;
