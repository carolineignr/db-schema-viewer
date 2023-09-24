import express, {Request, Response} from 'express';

export const router = express.Router();

router.get('/', async(req: Request, res: Response) => {
	res.status(200);
	res.json({ message: 'ok' });
})