import axios from 'axios';
import * as dotenv from 'dotenv';
import { DatabaseInputParams } from './types';

dotenv.config();

const API_URL = process.env.SERVER || 'localhost';
const API_PORT = process.env.API_PORT || '7001';
const GET_SCHEMA_PATH = '/api/database-schema';

export const SCHEMA_GET = async (
  dbAccessParams: DatabaseInputParams,
): Promise<Object> => {
  const url = `http://${API_URL}:${API_PORT}${GET_SCHEMA_PATH}`;

  const { data } = await axios.post(url, { dbAccessParams });
  return data;
};
