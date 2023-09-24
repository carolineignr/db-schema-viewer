export type ConnectionParams = {
	host: string,
	database: string,
	user: string,
	password: string
}

export type PostgreSQLBaseSchema = {
	table: Array<any>,
	views: Array<any>,
	type: Array<any>
}