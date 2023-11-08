import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: '50%',
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  contentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  emoji: {
    fontSize: 90,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.pickledBluewood,
  },
  sentiment: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.patina,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.patina,
    marginTop: 10,
  },
});
