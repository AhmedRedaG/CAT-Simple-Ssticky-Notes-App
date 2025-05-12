import { Router } from "express";

const router = Router();

router.use((req, res) => {
  res.render("error");
});

export default router;
