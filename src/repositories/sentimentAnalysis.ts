import {api} from '../api/apiConfig';
import {SentimentAPI} from './types';

async function getSentiment(text: string): Promise<SentimentAPI> {
  const formData = new FormData();
  formData.append('key', '4949ac71165a2a0a1f1336cb6ef4fe5c');
  formData.append('txt', text);
  formData.append('lang', 'pt');

  const {data} = await api.post<SentimentAPI>('sentiment-2.1', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}

export {getSentiment};
