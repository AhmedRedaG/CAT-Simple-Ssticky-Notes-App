import { Router } from "express";

const router = Router();

router.use((req, res) => {
  res.send("error");
});

export default router;
