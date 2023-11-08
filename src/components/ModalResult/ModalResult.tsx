import React, {useCallback, useEffect, useState} from 'react';
import {Modal, Text, View} from 'react-native';

import {styles} from './ModalResult.styles';

import {status} from './sentiment';
import {Button} from '../Button/Button';
import {Loading} from './Loading';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  tag: string;
}
export function ModalResult({isVisible, onClose, tag}: Props) {
  const [seconds, setSeconds] = useState(10);
  const [loading, setLoading] = useState(true);

  const timer = useCallback(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setLoading(false);
    }
  }, [seconds]);

  useEffect(() => {
    if (isVisible) {
      timer();
    }
  }, [isVisible, seconds, timer]);

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.content}>
          {loading ? (
            <Loading seconds={seconds} />
          ) : (
            <View style={styles.contentModal}>
              <View>
                <Text style={styles.emoji}>{status[tag]?.emoji}</Text>
                <View style={styles.contentStatus}>
                  <Text style={styles.title}>Resultado da análise: </Text>
                  <Text
                    style={{...styles.sentiment, color: status[tag]?.color}}>
                    {status[tag]?.text}
                  </Text>
                </View>
                <Text
                  style={{...styles.description, color: status[tag]?.color}}>
                  {status[tag]?.description}
                </Text>
              </View>

              <Button
                title="Fechar"
                onPress={() => {
                  onClose();
                  setLoading(true);
                  setSeconds(10);
                }}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
