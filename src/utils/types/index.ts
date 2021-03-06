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
  databaseModalOpen: boolean;
  tipsModalOpen: boolean;
  toolDetailsOpen: boolean;
  currentTable: TableState;
  selectedTables: TableState[];
  showTablesInfos: boolean;
};

export type SchemaState = {
  id: number;
  tables: TableState[];
  views?: {}[];
  index?: {}[];
  activeTable?: {};
  activeColumn?: {};
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
  name: string;
  tags: any;
};

export type PostgreSQLBaseSchema = {
  table: Array<any>;
  views: Array<any>;
  type: Array<any>;
};
