import { StyleSheet } from 'react-native';

// Tamaños responsive del width y el height
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Tamaño responsive de letras
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  // Contenedor
  view2: {
    marginTop: hp('5%'),
    marginLeft: wp('10%'),
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp('10%'),
  },

  // Titulo
  title: {
    color: '#fff',
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'grey',
    fontSize: RFValue(14),
  },

  // Poster
  poster: {
    width: wp('35%'),
    height: hp('25%'),
    borderRadius: 30,
    marginRight: wp('5%'),
    marginVertical: hp('2%'),
  },
  titlePoster: {
    color: '#fff',
    width: 140,
  },
});

export default styles;
