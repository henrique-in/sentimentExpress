import {apiToken} from '../api/apiConfig';
import {TokenAPI} from './types';

async function getMeaningToken(): Promise<string> {
  const {data} = await apiToken.get<TokenAPI>('token');

  return data[0].token;
}

export {getMeaningToken};
