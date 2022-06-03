import {
  ReduxAction,
  DatabaseInputParams,
  TableState,
} from '../../utils/types';

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

export const setDatabaseModal = (isOpen: boolean): ReduxAction => ({
  type: 'SET_DB_MODAL',
  payload: isOpen,
});

export const setTipsModal = (isOpen: boolean): ReduxAction => ({
  type: 'SET_TIPS_MODAL',
  payload: isOpen,
});

export const setToolDetailsModal = (isOpen: boolean): ReduxAction => ({
  type: 'SET_TOOL_DETAILS_MODAL',
  payload: isOpen,
});

export const setCurrentTable = (tableObj: {}): ReduxAction => ({
  type: 'SET_CURRENT_TABLE',
  payload: tableObj,
});

export const clearSchemas = (): ReduxAction => ({ type: 'CLEAR_SCHEMAS' });

export const setSelectedTables = (tables: Array<TableState>): ReduxAction => ({
  type: 'SET_SELECTED_TABLES',
  payload: tables,
});
