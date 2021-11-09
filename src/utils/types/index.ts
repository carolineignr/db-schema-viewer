export type ReduxAction = {
  type: string;
  payload?: {};
};

export type DatabaseInputParams = {
  ['host']: string;
  ['database']: string;
  ['user']: string;
  ['password']: string;
};

export type ReduxState = {
  schemas: SchemaState[];
  inputParams: DatabaseInputParams;
  loading: boolean;
};

export type SchemaState = {
  tables: TableState[];
  views?: {}[];
  index?: {}[];
};

export type InputParamsState = {
  inputParams: DatabaseInputParams;
};

export type InputProp = {
  label?: string;
  type?: string;
  name: string;
  placeholder: string;
};

export type TableState = {
  columns: any;
  name: any;
  tags: any;
};
