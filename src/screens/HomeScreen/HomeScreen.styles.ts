import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme';

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: height * 0.13,
    color: colors.mountainMeadow,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    color: colors.mountainMeadow,
    marginTop: 10,
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
    color: colors.mountainMeadow,
    marginTop: 10,
    fontWeight: '500',
  },
  tip: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: height * 0.05,
  },
  input: {
    height: 200,
    textAlignVertical: 'top',
    fontSize: 16,
    borderColor: colors.gray2,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  image: {
    position: 'absolute',
    right: -10,
    top: -30,
    width: 200,
    height: 200,
    alignSelf: 'flex-end',
  },
  buttonClean: {
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
  },
  titleClean: {
    fontSize: 16,
    color: colors.vividTangerine,
    fontWeight: 'bold',
  },
});
