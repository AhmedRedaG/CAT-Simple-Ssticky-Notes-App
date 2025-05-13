import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("root", { pageTitle: "Home" });
});

export default router;
