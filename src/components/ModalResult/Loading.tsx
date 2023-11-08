import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../theme';

interface Props {
  seconds: number;
}

const scanningText = require('../../assets/lotties/scanningText.json');
const scanningToken = require('../../assets/lotties/scanningToken.json');
export function Loading({seconds}: Props) {
  // const [lottie, setLottie] = useState(scanningText);
  const intervalLottieLoading = seconds >= 5 ? scanningText : scanningToken;
  const intervalText =
    seconds >= 5 ? 'Verificando texto e separando tokens' : 'Scaneando Tokens';
  // useEffect(() => {
  //   if (seconds >= 5 && lottie !== scanningText) {
  //     return setLottie(scanningText);
  //   }
  //   if (seconds < 5 && lottie !== scanningToken) {
  //     return setLottie(scanningToken);
  //   }
  // }, [lottie, seconds]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{width: '90%', height: '70%', alignSelf: 'center'}}
        source={intervalLottieLoading}
        autoPlay
        loop
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          color: colors.gray,
          fontWeight: '600',
        }}>
        {intervalText}
      </Text>
    </View>
  );
}
