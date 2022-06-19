import axios from 'axios';
import { DatabaseInputParams } from './types';

const GET_SCHEMA_PATH = 'api/database-schema';

export const SCHEMA_GET = async (
  dbAccessParams: DatabaseInputParams,
): Promise<Object> => {
  const url = `https://db-viewer-api.herokuapp.com/${GET_SCHEMA_PATH}`;

  const { data } = await axios.post(url, { dbAccessParams });
  return data;
};
