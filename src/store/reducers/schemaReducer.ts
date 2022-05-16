import { ReduxAction, ReduxState } from '../../utils/types';

export const schemaReducer = (
  state: ReduxState | any,
  action: ReduxAction,
): ReduxState => {
  switch (action.type) {
    case 'SET_SCHEMA':
      return {
        ...state,
        schemas: [...state.schemas, action.payload],
      };
    case 'SET_INPUT_PARAMS':
      return {
        ...state,
        inputParams: {
          ...state.inputParams,
          ...action.payload,
        },
      };
    case 'SET_DB_MODAL':
      return {
        ...state,
        databaseModalOpen: action.payload,
      };
    case 'SET_CURRENT_TABLE':
      return {
        ...state,
        currentTable: action.payload,
      };
    default:
      return state;
  }
};
