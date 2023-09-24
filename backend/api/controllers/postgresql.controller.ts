const { extractSchema } = require('extract-pg-schema');

import { ConnectionParams, PostgreSQLBaseSchema } from "../types/database.type";

export const getDatabaseSchema = async (props: ConnectionParams) => {
	const connectionParams: ConnectionParams = {
		host: props.host,
		database: props.database,
		user: props.user,
		password: props.password
	}

	const res = await connectDatabase(connectionParams);
	return res;
}

async function connectDatabase(params: ConnectionParams) {
	try {
		const databaseSchema: PostgreSQLBaseSchema = await extractSchema('public', params);

		return databaseSchema;
	} catch (err) {
		console.log('Erro ao conectar no banco:' + err);
	}
};