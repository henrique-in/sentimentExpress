import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './HomeScreen.styles';
import {colors} from '../../theme';
import {Button} from '../../components/Button/Button';
import {getSentiment} from '../../repositories/sentimentAnalysis';
import {ModalResult} from '../../components/ModalResult/ModalResult';
import {getMeaningToken} from '../../repositories/getToken';

const illustrationImage = require('../../assets/img/illustration.png');
export function HomeScreen() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const getAnalysis = async () => {
    setLoading(true);
    try {
      const token = await getMeaningToken();
      const data = await getSentiment(text, token);
      setScore(data.score_tag);
      setIsVisible(true);
    } catch (error) {
      Alert.alert('Ops...', 'Ocorreu um erro ao obter o sentimento');
    } finally {
      setLoading(false);
    }
  };

  const clearText = () => {
    setScore('');
    setText('');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image
          source={illustrationImage}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Bem-vindo {'\n'}ao Sentimento Express!
          </Text>
          <Text style={styles.subtitle}>
            Use nosso app e te diremos como você se sente.
          </Text>
          <Text style={styles.text}>
            Insira seu texto no campo abaixo e pressione o botão para descobrir
            o sentimento por trás das palavras.
          </Text>
          <TextInput
            style={styles.input}
            value={text}
            placeholderTextColor={colors.gray}
            onChangeText={setText}
            multiline
          />
          {text && text.trim().length < 50 && (
            <Text style={{color: colors.gray}}>* Mínimo de 50 caracteres</Text>
          )}
          <Text style={styles.tip}>
            Não sabe o que escrever? Tente compartilhar seus pensamentos ou um
            evento do seu dia e descubra como você se sente.
          </Text>
          <Button
            title="Analisar sentimento"
            loading={loading}
            disabled={text.trim().length > 50 ? false : true}
            onPress={() => getAnalysis()}
          />
          {text && score && (
            <TouchableOpacity style={styles.buttonClean} onPress={clearText}>
              <Text style={styles.titleClean}>Limpar texto</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <ModalResult
        tag={score}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </View>
  );
}
