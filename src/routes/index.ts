import {Request, Response, Router} from "express";
import kafkaRouter from './publisher/kafka';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.send({
    status: "ok",
  });
});

router.use('/publish', kafkaRouter);

export default router;