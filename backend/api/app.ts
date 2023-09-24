import * as dotenv from "dotenv";
import express from 'express';
import cors from 'cors';

import { postgresqlRouter } from './routes/postgres.router';
import { router } from './routes/initial.router';

dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 7001;

app.use(express.json());
app.use(cors());

app.use('/api/database-schema', postgresqlRouter);
app.use('/', router);

const runningMessage = `Server running at http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(runningMessage);
});
