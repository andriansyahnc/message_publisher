import {Request, Response, Router} from "express";

const router = Router();

router.post('/kafka', (req: Request, res: Response) => {
  res.send({
    status: "ok",
  });
});

export default router;