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
    case 'CLEAR_SCHEMAS':
      return {
        ...state,
        schemas: action.payload,
      };
    case 'SET_SELECTED_TABLES':
      return {
        ...state,
        selectedTables: action.payload,
      };
    case 'SET_TIPS_MODAL':
      return {
        ...state,
        tipsModalOpen: action.payload,
      };
    case 'SET_TOOL_DETAILS_MODAL':
      return {
        ...state,
        toolDetailsOpen: action.payload,
      };
    case 'SET_SHOW_TABLES_INFOS':
      return {
        ...state,
        showTablesInfos: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
