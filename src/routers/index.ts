import { Router, Request, Response } from 'express';
import { getAccessToken } from '../controllers/searches/food/food';

const router: Router = Router();

router.post('/getAccessToken', (req: Request, res: Response) => {
  getAccessToken(req, res);
});

router.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default router;
