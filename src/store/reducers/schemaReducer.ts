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
    default:
      return state;
  }
};
