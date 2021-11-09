import { ReduxAction, DatabaseInputParams } from '../../utils/types';

export const setSchema = (schemaObj: {}): ReduxAction => ({
  type: 'SET_SCHEMA',
  payload: schemaObj,
});

export const setInputParams = (
  inputParamsObj: DatabaseInputParams,
): ReduxAction => ({
  type: 'SET_INPUT_PARAMS',
  payload: inputParamsObj,
});
