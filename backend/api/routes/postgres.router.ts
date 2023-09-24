import express, {Request, Response} from 'express';

import { getDatabaseSchema } from '../controllers/postgresql.controller';

export const postgresqlRouter = express.Router();

postgresqlRouter.post('/', async(req: Request, res: Response) => {
	const { dbAccessParams } = req.body
	const schema = await getDatabaseSchema(dbAccessParams)

	res.status(200);
	res.json(schema);
})