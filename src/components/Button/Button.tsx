import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './Button.styles';
import {colors} from '../../theme';

interface Props extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
}
export function Button({title, disabled, loading, ...rest}: Props) {
  const buttonDisabled = disabled || loading;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={buttonDisabled}
      style={{
        ...styles.button,
        backgroundColor: buttonDisabled ? colors.gray3 : colors.mountainMeadow,
      }}
      {...rest}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text
          style={{
            ...styles.buttonTitle,
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
